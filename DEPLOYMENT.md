
# Deployment Guide

This guide will help you deploy your Learning Platform to production.

## Prerequisites

Before deploying, ensure you have:
- A Supabase project set up
- Admin user configured in the database
- All environment variables properly configured

## Environment Configuration

### Supabase Setup

1. **Database Setup**: All required tables and policies are already configured through migrations
2. **Authentication URLs**: Configure the following in Supabase Dashboard → Authentication → URL Configuration:
   - Site URL: `https://your-domain.com` (your production URL)
   - Redirect URLs: Add your production URL(s)

### Required Environment Variables

The following environment variables are automatically configured in the codebase:
- `SUPABASE_URL`: Already set in the client configuration
- `SUPABASE_ANON_KEY`: Already set in the client configuration

## Pre-Deployment Checklist

### ✅ Completed Items
- [x] Database schema and migrations
- [x] Row Level Security (RLS) policies
- [x] Authentication system
- [x] Admin panel functionality
- [x] Admin user assignment

### 🔄 Deployment Steps

1. **Deploy to your hosting platform** (Vercel, Netlify, etc.)
2. **Update Supabase URLs** in Authentication settings
3. **Test admin login** with your configured email
4. **Verify all functionality** in production

## Admin Access

An admin user has been configured in your database. To access the admin panel:

1. Go to `/admin` on your deployed site
2. Sign in with the email you configured in the database
3. You should have full admin access to:
   - User management
   - Course management
   - DSA topic and question management

## Testing Your Deployment

### Authentication Test
1. Visit `/auth` and create a new account
2. Verify email confirmation works
3. Test login/logout functionality

### Admin Panel Test
1. Visit `/admin`
2. Sign in with your admin email
3. Test all admin features:
   - View users
   - Manage courses
   - Manage DSA content

### General Functionality Test
1. Test course browsing
2. Test DSA topics and questions
3. Verify user dashboard functionality

## Troubleshooting

### Common Issues

**Authentication Redirect Errors**
- Ensure Site URL and Redirect URLs are properly configured in Supabase
- Check that URLs match your production domain exactly

**Admin Access Issues**
- Verify your email was correctly assigned the admin role
- Check the user_roles table in Supabase

**Database Connection Issues**
- Verify Supabase project is active
- Check that RLS policies are properly configured

## Security Considerations

1. **Row Level Security**: All tables have proper RLS policies
2. **Admin Functions**: Protected by role-based access control
3. **User Data**: Isolated per user with proper access controls

## Monitoring

After deployment, monitor:
- Authentication success rates
- Database performance
- User activity in admin panel
- Error logs for any issues

## Support

If you encounter issues:
1. Check browser console for errors
2. Review Supabase logs
3. Verify all environment configurations
4. Test with a fresh incognito/private browser session

Your application is now ready for production deployment! 🚀
