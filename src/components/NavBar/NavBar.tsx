import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex items-center text-sm font-medium tracking-wide">
      <ul className="flex gap-4">
        <li>
          <Link className="flex items-center text-black" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link className="flex items-center text-black" href="#projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="flex items-center text-black" href="#contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
