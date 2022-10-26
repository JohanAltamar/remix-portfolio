import { Navbar } from "../navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
