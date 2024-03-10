import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-center h-14 px-2 border-b">
        <nav className="flex items-center gap-4 text-sm font-medium tracking-wide">
          <Link className="flex items-center text-black" href="#">
            About
          </Link>
          <Link className="flex items-center text-black" href="#">
            Projects
          </Link>
          <Link className="flex items-center text-black" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 px-2 py-16 text-center md:px-6 md:py-24">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
            I'm a passionate developer who loves creating amazing web
            experiences.
          </p>
        </div>
      </main>
      <footer className="flex items-center justify-center h-14 border-t">
        Made with Love
      </footer>
    </div>
  );
}
