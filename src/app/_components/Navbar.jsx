import Link from "next/link";
import { navLinks } from "@/app/_lib/nav-links.js";

export default function Navbar() {
  return (
    <nav className="mx-10 sticky flex glass-navbar">
      <span>Mabel.</span>
      <ul className="flex basis-3/4 justify-between">
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.link}>{link.title}</Link>
        </li>
      ))}
      </ul>
    </nav>
  );
}
