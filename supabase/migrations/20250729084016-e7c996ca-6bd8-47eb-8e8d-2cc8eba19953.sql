-- First, let's create a function to easily make a user admin by email
CREATE OR REPLACE FUNCTION public.make_user_admin(user_email text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Insert admin role for the user with the given email
  INSERT INTO public.user_roles (user_id, role)
  SELECT id, 'admin'::app_role 
  FROM auth.users 
  WHERE email = user_email
  ON CONFLICT (user_id, role) DO NOTHING;
END;
$$;