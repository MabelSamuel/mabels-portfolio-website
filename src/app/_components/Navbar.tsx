import Link from "next/link";
import { navLinks } from "@/app/_lib/nav-links.js";

export default function Navbar() {
  return (
    <nav className="px-10 sticky glass-navbar bg-navbar backdrop-blur-lg border border-border">
      <div className="flex">
        <span className="basis-1/4 text-primary text-lg font-medium">
          Mabel.
        </span>
        <ul className="flex basis-3/4 justify-between">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-primary-dark">
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
