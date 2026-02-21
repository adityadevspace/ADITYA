import { useEffect, useState } from "react";

const sections = [
  "home",
  "video",
  "skills",
  "education",
  "certifications",
  "assignments",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const offsetTop = element.offsetTop - 200;
        const height = element.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetTop + height) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 
                    bg-[#050816]/70 backdrop-blur-xl 
                    border-b border-white/10
                    shadow-[0_0_30px_rgba(0,255,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wider
                     bg-gradient-to-r from-cyan-400 to-purple-500
                     text-transparent bg-clip-text"
        >
          AK
        </a>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-sm md:text-base">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`capitalize transition-all duration-300 pb-1 relative ${
                  active === section
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section}

                {/* Premium underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full 
                              bg-gradient-to-r from-cyan-400 to-purple-500
                              transition-all duration-300 origin-left
                              ${
                                active === section
                                  ? "scale-x-100"
                                  : "scale-x-0"
                              }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}