import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="pt-16 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}