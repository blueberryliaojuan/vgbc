// components/Button.jsx
export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
import Image from "next/image";
