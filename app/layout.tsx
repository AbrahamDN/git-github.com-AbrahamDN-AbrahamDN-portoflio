import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { externalLinks, navLinks } from "./data";
import Icon from "./components/Icons";

const satoshi = localFont({
  src: "./fonts/Satoshi.ttf",
  display: "swap",
  variable: "--satoshi",
});

const generalSans = localFont({
  src: "./fonts/Satoshi.ttf",
  display: "swap",
  variable: "--general-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abraham DN Portfolio",
  description:
    "Experienced web developer with 3 years of proven expertise, demonstrating a relentless commitment to accessibility, performance optimization, and elevating user experience with UI/UX skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${satoshi.variable} ${generalSans.variable} grid`}
      >
        <header className="container-lg py-10 fixed z-40 fade-bottom">
          <div className="w-full flex justify-between items-start column-gap-2">
            <Link
              href="#"
              className="heading text-base md:text-lg leading-[0.15em] "
            >
              ADN
            </Link>

            <nav>
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
          </div>
        </header>

        {children}

        <aside className="sm:sticky max-sm:container-lg sm:min-w-min sm:container-lg-left bottom-10">
          <ul className="flex gap-3 sm:flex-col md:gap-6 sm:w-[25px] items-center justify-center">
            {externalLinks.map(({ title, link }, idx) => (
              <li key={`exLink-${idx}`} className="mb-3">
                <Link href={link} target="_blank" rel="noreferrer">
                  <Icon name={title.toLowerCase()} />
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <footer className="text-xs lg:text-sm border border-line py-10 mt-5">
          <div className="container-lg text-center">
            <p className="mb-4">I wish I had more images on here.</p>
            <p>
              See you soon -{" "}
              <Link
                href={
                  externalLinks.find(
                    (val) => val.title.toLowerCase() === "github"
                  )?.link || ""
                }
                className="underline"
              >
                AbrahamDN
              </Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
