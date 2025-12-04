
-- Step 4: Assign admin role to a user
-- Replace 'your-email@example.com' with your actual email address
-- This will find your user and assign the admin role

DO $$
DECLARE
    target_user_id UUID;
BEGIN
    -- Find the user by email (replace with your actual email)
    SELECT id INTO target_user_id 
    FROM auth.users 
    WHERE email = 'your-email@example.com';
    
    -- Check if user exists
    IF target_user_id IS NULL THEN
        RAISE EXCEPTION 'User with email your-email@example.com not found. Please update the email in this query.';
    END IF;
    
    -- Insert admin role if it doesn't exist
    INSERT INTO public.user_roles (user_id, role)
    VALUES (target_user_id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
    
    RAISE NOTICE 'Admin role assigned to user: %', target_user_id;
END $$;
