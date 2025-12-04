
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

interface AuthFormProps {
  isLogin: boolean;
  onToggleMode: () => void;
}

const AuthForm = ({ isLogin, onToggleMode }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Normalize email to lowercase and trim whitespace
    const normalizedEmail = email.toLowerCase().trim();

    try {
      if (isLogin) {
        console.log('Attempting login with email:', normalizedEmail);
        const { data, error } = await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });

        console.log('Login response:', { data, error });
        if (error) {
          console.error('Login error:', error);
          if (error.message.includes('Invalid login credentials') || error.message.includes('invalid_credentials')) {
            toast({
              title: "Login failed",
              description: "Invalid email or password. If you just signed up, please check your email and confirm your account first.",
              variant: "destructive",
            });
          } else if (error.message.includes('Email not confirmed')) {
            toast({
              title: "Email not confirmed",
              description: "Please check your email and click the confirmation link.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Login failed",
              description: error.message,
              variant: "destructive",
            });
          }
        } else if (data.user) {
          console.log('Login successful for user:', data.user.email);
          toast({
            title: "Welcome back!",
            description: "You have successfully logged in.",
          });
          // Navigation will happen automatically via useEffect when user state updates
        }
      } else {
        console.log('Attempting signup with email:', normalizedEmail);
        const { data, error } = await supabase.auth.signUp({
          email: normalizedEmail,
          password,
          options: {
            data: {
              full_name: fullName,
            },
            emailRedirectTo: `${window.location.origin}/`,
          },
        });

        console.log('Signup response:', { data, error });

        if (error) {
          console.error('Signup error:', error);
          // Handle specific signup errors
          if (error.message.includes('User already registered') || error.message.includes('already_registered')) {
            toast({
              title: "Account exists",
              description: "An account with this email already exists. Please sign in instead.",
              variant: "destructive",
            });
            onToggleMode(); // Switch to login mode
          } else if (error.message.includes('Password should be at least')) {
            toast({
              title: "Weak password",
              description: "Password should be at least 6 characters long.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Signup failed",
              description: error.message,
              variant: "destructive",
            });
          }
        } else if (data.user) {
          // Check if the user was actually created or if they already existed
          if (data.user.email_confirmed_at === null) {
            toast({
              title: "Check your email",
              description: "We've sent you a confirmation link. Please check your email to activate your account.",
            });
          } else {
            toast({
              title: "Account created!",
              description: "Your account has been created and you're now signed in.",
            });
          }
        }
      }
    } catch (error) {
      console.error('Auth error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLogin && (
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <Input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required={!isLogin}
            placeholder="Enter your full name"
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : isLogin ? "Sign In" : "Create Account"}
      </Button>
    </form>
  );
};

export default AuthForm;
