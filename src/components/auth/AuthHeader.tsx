
import { CardHeader, CardTitle } from "@/components/ui/card";

interface AuthHeaderProps {
  isLogin: boolean;
}

const AuthHeader = ({ isLogin }: AuthHeaderProps) => {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold">
        {isLogin ? "Welcome Back" : "Create Account"}
      </CardTitle>
      <p className="text-gray-600">
        {isLogin
          ? "Sign in to access your courses"
          : "Join CSE Compass today"}
      </p>
    </CardHeader>
  );
};

export default AuthHeader;
