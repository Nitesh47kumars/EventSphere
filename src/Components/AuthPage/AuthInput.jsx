export default function AuthInput({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      required
    />
  );
}
