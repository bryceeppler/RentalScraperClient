// components/Layout.tsx
import { Navbar } from "./navbar";
import { type ReactNode } from "react";
type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-base-200 text-base-content">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
