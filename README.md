
# Learning Platform

A comprehensive learning platform built with React, TypeScript, and Supabase featuring courses, DSA practice, and admin management.

## Features

### For Students
- 📚 **Course Catalog**: Browse and select from various programming courses
- 🧠 **DSA Practice**: Comprehensive Data Structures and Algorithms practice with:
  - Topic-based organization
  - Difficulty levels (Easy, Medium, Hard)
  - Progress tracking
  - Company tags and hints
- 📊 **Progress Tracking**: Monitor your learning journey and streaks
- 👤 **User Dashboard**: Personalized learning experience

### For Administrators
- 👥 **User Management**: View and manage user roles
- 📝 **Course Management**: Create and edit courses and resources
- 🎯 **DSA Content Management**: Add and manage DSA topics and questions
- 📈 **Analytics**: View platform usage and user engagement

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Backend**: Supabase (PostgreSQL + Authentication + Real-time)
- **State Management**: TanStack Query for server state
- **Routing**: React Router v6

## Quick Start

### Prerequisites
- Node.js 18+ 
- A Supabase account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd learning-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project
   - The database schema will be automatically applied
   - Update the Supabase configuration in `src/integrations/supabase/client.ts` if needed

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Main app: `http://localhost:5173`
   - Admin panel: `http://localhost:5173/admin`

## Database Schema

The application uses the following main tables:
- `profiles` - User profile information
- `user_roles` - Role-based access control
- `courses` - Course catalog
- `course_resources` - Learning resources for courses
- `dsa_topics` - DSA topic organization
- `dsa_questions` - DSA practice questions
- `user_question_progress` - User progress tracking
- `user_streaks` - Learning streak tracking

## Authentication & Authorization

- **Authentication**: Handled by Supabase Auth
- **Authorization**: Role-based with `admin` and `user` roles
- **Security**: Row Level Security (RLS) policies protect all data

## Admin Setup

To create an admin user:

1. Sign up for a regular account first
2. Run this SQL in your Supabase SQL editor:
   ```sql
   INSERT INTO public.user_roles (user_id, role)
   VALUES (
     (SELECT id FROM auth.users WHERE email = 'your-email@example.com'),
     'admin'
   );
   ```

## Development

### Project Structure
```
src/
├── components/         # Reusable UI components
│   ├── admin/         # Admin panel components
│   ├── auth/          # Authentication components
│   ├── course/        # Course-related components
│   ├── dsa/           # DSA components
│   └── ui/            # shadcn/ui components
├── contexts/          # React contexts
├── hooks/             # Custom React hooks
├── integrations/      # External service integrations
├── pages/             # Route components
└── services/          # Business logic services
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Environment Configuration

Update Supabase Authentication settings:
- Site URL: Your production domain
- Redirect URLs: Add your production URLs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
