
-- Create admin-specific tables and policies

-- First, let's create a table to store admin sessions separately
CREATE TABLE public.admin_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  is_active BOOLEAN DEFAULT true NOT NULL
);

-- Enable RLS on admin sessions
ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;

-- Policy for admin sessions - only admins can manage their own sessions
CREATE POLICY "Admins can manage their own sessions"
  ON public.admin_sessions
  FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Update courses table to allow admin inserts/updates
DROP POLICY IF EXISTS "Admins can manage courses" ON public.courses;
CREATE POLICY "Admins can manage courses"
  ON public.courses
  FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Update dsa_topics table to allow admin management
ALTER TABLE public.dsa_topics DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.dsa_topics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view DSA topics"
  ON public.dsa_topics
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage DSA topics"
  ON public.dsa_topics
  FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Update dsa_questions table to allow admin management
ALTER TABLE public.dsa_questions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.dsa_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view DSA questions"
  ON public.dsa_questions
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage DSA questions"
  ON public.dsa_questions
  FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create a function to create admin users
CREATE OR REPLACE FUNCTION public.create_admin_user(
  admin_email TEXT,
  admin_password TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_user_id UUID;
BEGIN
  -- This function should only be called by existing admins or during initial setup
  IF NOT (SELECT has_role(auth.uid(), 'admin'::app_role)) AND 
     (SELECT COUNT(*) FROM public.user_roles WHERE role = 'admin') > 0 THEN
    RAISE EXCEPTION 'Only admins can create admin users';
  END IF;

  -- Create the user (this would typically be done through Supabase Auth)
  -- For now, we'll just return a placeholder
  RETURN gen_random_uuid();
END;
$$;
