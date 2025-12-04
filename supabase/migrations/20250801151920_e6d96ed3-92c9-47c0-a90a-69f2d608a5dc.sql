-- Assign admin role to test@admin.com (after user signs up)
SELECT public.make_user_admin('test@admin.com');