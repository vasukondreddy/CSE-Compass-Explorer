-- Make your existing email an admin
-- First, let's see what users exist and make manikanta@gmail.com an admin
SELECT public.make_user_admin('manikanta@gmail.com');

-- Also create the admin@example.com user as admin if it exists
SELECT public.make_user_admin('admin@example.com');

-- Let's also create a simple admin account directly if needed
-- Note: This will only work if the user has signed up first