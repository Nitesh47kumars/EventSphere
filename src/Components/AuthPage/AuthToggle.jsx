export default function AuthToggle({ isLogin, setIsLogin }) {
  return (
    <p className="text-center text-gray-600 mt-4">
      {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
      <button
        type="button"
        onClick={() => setIsLogin(!isLogin)}
        className="text-indigo-600 font-semibold hover:underline"
      >
        {isLogin ? "Sign Up" : "Login"}
      </button>
    </p>
  );
}
  