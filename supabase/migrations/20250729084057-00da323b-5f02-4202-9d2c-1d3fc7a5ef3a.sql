-- Make admin@example.com an admin (run this after the user signs up)
-- This will work once the user account exists
DO $$
BEGIN
  -- Check if user exists and make them admin
  IF EXISTS (SELECT 1 FROM auth.users WHERE email = 'admin@example.com') THEN
    PERFORM public.make_user_admin('admin@example.com');
    RAISE NOTICE 'Admin role assigned to admin@example.com';
  ELSE
    RAISE NOTICE 'User admin@example.com does not exist yet. Please sign up first.';
  END IF;
END $$;