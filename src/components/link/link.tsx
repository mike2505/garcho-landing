"use client";
import { cn } from "@/utils/cn";

interface ILink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const Link: React.FC<ILink> = ({ children, className, ...props }) => {
  return (
    <a {...props} className={cn("transition-colors text-nowrap", className)}>
      {children}
    </a>
  );
};
