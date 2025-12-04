
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft, Shield } from "lucide-react";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthForm from "@/components/auth/AuthForm";
import AuthToggle from "@/components/auth/AuthToggle";
import useEmailConfirmation from "@/components/auth/useEmailConfirmation";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  // Handle email confirmation on page load
  useEmailConfirmation();

  // Redirect if already authenticated
  useEffect(() => {
    console.log('Auth page - user state changed:', user?.email, 'isLoading:', isLoading);
    if (!isLoading && user) {
      console.log('Redirecting authenticated user to home');
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <Card className="shadow-xl">
          <AuthHeader isLogin={isLogin} />
          <CardContent>
            <AuthForm isLogin={isLogin} onToggleMode={handleToggleMode} />
            <AuthToggle isLogin={isLogin} onToggle={handleToggleMode} />
            
            {/* Admin Login Link */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link 
                to="/admin" 
                className="flex items-center justify-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Shield className="h-4 w-4" />
                <span>Admin Login</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
