interface MainLayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: MainLayoutProps) {
  return <main>{children}</main>;
}
