import Link from "next/link";
import { navLinks } from "@/app/_lib/nav-links.js";

export default function Navbar() {
  return (
    <nav>
      <ul>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.link}>{link.title}</Link>
        </li>
      ))}
      </ul>
    </nav>
  );
}
