import { useState } from "react";
import AuthForm from "./AuthForm";
import AuthToggle from "./AuthToggle";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        <AuthForm isLogin={isLogin} />
        <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  );
}
