// components/Button.tsx
import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-oxfordBlue text-white px-4 py-2 rounded"
    >
      {children}
    </button>
  );
}
