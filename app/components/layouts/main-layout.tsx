import classNames from "classnames";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: MainLayoutProps) {
  const customClassNames = classNames("flex-1", className);

  return <main className={customClassNames}>{children}</main>;
}
