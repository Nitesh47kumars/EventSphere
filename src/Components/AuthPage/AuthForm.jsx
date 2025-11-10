import AuthInput from "./AuthInput";

export default function AuthForm({ isLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {!isLogin && <AuthInput type="text" placeholder="Full Name" />}
      <AuthInput type="email" placeholder="Email" />
      <AuthInput type="password" placeholder="Password" />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        {isLogin ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}
