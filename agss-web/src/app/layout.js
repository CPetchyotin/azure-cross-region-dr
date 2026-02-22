import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AGSS - Stability & Security for Industry',
  description: 'Transforming IT from a cost center into a strategic asset.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans text-slate-800 bg-white selection:bg-cyan-100 selection:text-cyan-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}