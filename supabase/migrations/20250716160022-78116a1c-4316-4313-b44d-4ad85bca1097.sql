
-- Disable email confirmation for new signups
-- This allows users to sign in immediately after registration without email confirmation
UPDATE auth.config 
SET email_confirm_change_enabled = false;

-- Alternative approach if the above doesn't work in your Supabase version:
-- You can also disable email confirmation in the Supabase Dashboard
-- Go to Authentication > Settings > Email Auth and toggle off "Enable email confirmations"
