import { Link } from "@remix-run/react";
import classNames from "classnames";

// Types
import type { FC, ReactNode } from "react";

export interface NavbarProps {
  isUserAuthenticated: boolean;
}

export function Navbar({ isUserAuthenticated }: NavbarProps) {
  return (
    <header className="px-4 md:px-10">
      <nav className="flex h-14 items-center">
        <Link to="/" className="mr-10 py-4 text-2xl font-bold">
          <h1>Johan Altamar</h1>
        </Link>
        <div className="flex-1 h-full flex items-center">
          <LinkItem to="/about">About</LinkItem>
          <LinkItem to="/projects">Projects</LinkItem>
          <LinkItem to="/blog">Blog</LinkItem>
        </div>
        {isUserAuthenticated ? (
          <LinkItem to="/logout">Logout</LinkItem>
        ) : (
          <>
            <LinkItem to="/login">Login</LinkItem>
            <LinkItem to="/register">Register</LinkItem>
          </>
        )}
      </nav>
    </header>
  );
}

interface LinkItemProps {
  children: ReactNode;
  to: string;
  className?: string;
}

const LinkItem: FC<LinkItemProps> = ({ children, className, to }) => {
  const styles = classNames(
    className,
    "py-4 px-5 transition-all duration-300 hover:bg-black/10 hidden"
  );

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
};
