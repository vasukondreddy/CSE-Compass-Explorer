-- Fix security definer functions by setting search_path
CREATE OR REPLACE FUNCTION public.make_user_admin(user_email text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
BEGIN
  -- Insert admin role for the user with the given email
  INSERT INTO public.user_roles (user_id, role)
  SELECT id, 'admin'::app_role 
  FROM auth.users 
  WHERE email = user_email
  ON CONFLICT (user_id, role) DO NOTHING;
END;
$function$;

-- Fix get_current_streak function
CREATE OR REPLACE FUNCTION public.get_current_streak(user_uuid uuid)
 RETURNS integer
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
DECLARE
  current_streak INTEGER := 0;
  check_date DATE := CURRENT_DATE;
BEGIN
  -- Count consecutive days with activity
  WHILE EXISTS (
    SELECT 1 FROM public.user_streaks 
    WHERE user_id = user_uuid 
    AND streak_date = check_date 
    AND (dsa_questions_solved > 0 OR dbms_topics_completed > 0 OR os_topics_completed > 0 OR cn_topics_completed > 0)
  ) LOOP
    current_streak := current_streak + 1;
    check_date := check_date - INTERVAL '1 day';
  END LOOP;
  
  RETURN current_streak;
END;
$function$;