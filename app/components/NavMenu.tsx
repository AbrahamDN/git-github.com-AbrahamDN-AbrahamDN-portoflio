"use client";

import Link from "next/link";
import { navLinks } from "../data";
import { useRef } from "react";
import { useEventListener } from "usehooks-ts";
import { scrollActive } from "@/lib/sectionActive";

function NavMenu() {
  const documentRef = useRef<Document>(document);
  useEventListener("scroll", scrollActive, documentRef);

  return (
    <nav className="nav__menu">
      <ul className="text-end">
        {navLinks.map(({ title, link }, idx) => (
          <li
            key={`navLink-${idx}`}
            className="heading uppercase text-xs md:text-sm mb-1 md:mb-2 last:mb-0"
          >
            <Link
              href={link}
              data-text={title}
              className="opacity-change transition-opacity duration-500 text-fill"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavMenu;
