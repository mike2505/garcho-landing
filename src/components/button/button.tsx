"use client";
import { cn } from "@/utils/cn";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<IButton> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={cn("transition-colors", className)}>
      {children}
    </button>
  );
};
