"use client";

import Loader from "@/component/loader";
import SkillsGraph from "@/component/skills";
import Image from "next/image";
import { useEffect, useState } from "react";
type PageEnum = "Home" | "About" | "Projects" | "Contact";
import { Github, Linkedin } from "lucide-react";

const colorMapping = {
  Home: { nav: "#795757", logo: "#A7AAE1", links: "#A7AAE1" },
  About: { nav: "#FBF3D5", logo: "#A7AAE1", links: "#A7AAE1" },
  Projects: { nav: "#795757", logo: "#A7AAE1", links: "#A7AAE1" },
  Contact: { nav: "#B6CEB4", logo: "#ffffff", links: "#B6CEB4" },
};

const projects = [
  {
    Title: "Hedged Core",
    description:
      " Contributed to a stock recommendation platform delivering real-time trade suggestions. Independently developed the WhatsApp integration module and implemented advanced OHLC and line chart visualizations for comprehensive market analytics.",
    imageUrl: "/Hedged.png",
    redirectUrl: "https://app.hedged.in",
  },
  {
    Title: "Hedged Desk",
    description:
      " Contributed to a stock recommendation platform delivering real-time trade suggestions. Independently developed the WhatsApp integration module and implemented advanced OHLC and line chart visualizations for comprehensive market analytics.",
    imageUrl: "/HedgedDesk.png",
    redirectUrl: "",
  },
  {
    Title: "Greein",
    description:
      " Contributed to a stock recommendation platform delivering real-time trade suggestions. Independently developed the WhatsApp integration module and implemented advanced OHLC and line chart visualizations for comprehensive market analytics.",
    imageUrl: "/Greein.png",
    redirectUrl: "https://greein.com/",
  },
];

export default function Home() {
  const [loading, setLoader] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [name, setName] = useState("");
  const heroName = "SATHYARJUN A B";
  const [pageName, setPageName] = useState<PageEnum>("Home");

  // Loader
  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(timer);
        setLoader(false);
        return prev;
      });
    }, 29);

    return () => clearInterval(timer);
  }, []);

  // add listeners
  useEffect(() => {
    const cursor = document.querySelector(".cursor-dot") as HTMLElement | null;

    if (!cursor) return;

    const handleMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      const color = el?.dataset?.cursorColor;
      cursor.style.backgroundColor = color || "#a67c52"; // white fallback
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, [loading]);

  // navbar color change
  useEffect(() => {
    const nav = document.querySelector(".fixed.top-2") as HTMLElement | null;
    if (!nav) return;

    const getSectionUnderNav = () => {
      const rect = nav.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.bottom + 1; // 1px below navbar
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      if (!el) return null;
      // find nearest ancestor with an id that matches PageEnum (safety check)
      const section = el.closest("section[id], [id]") as HTMLElement | null;
      if (!section) return null;
      const id = section.id;
      return id === "Home" ||
        id === "About" ||
        id === "Projects" ||
        id === "Contact" ||
        id === "Skills"
        ? (id as PageEnum)
        : null;
    };

    let raf = 0;
    const tick = () => {
      const sectionId = getSectionUnderNav();
      if (sectionId) {
        setPageName((prev) => (prev === sectionId ? prev : sectionId));
      }
    };
    const handler = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);

    // run once on mount
    handler();

    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [loading]);

  // typing effect for the name
  useEffect(() => {
    if (!loading) {
      const timer = setInterval(() => {
        setName((prev) => {
          if (prev.length < heroName.length) {
            return prev + heroName[prev.length];
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 200);
    }
  }, [loading]);

  return false ? (
    <Loader percentage={percentage} />
  ) : (
    <div className=" bg-[#FBF3D5]  font-serif relative">
      <div className="cursor-dot"></div>
      {/* navbar */}
      <div
        className={`fixed w-screen top-2 rounded-2xl flex items-center justify-between shadow-md z-50 font-serif px-6 py-3 backdrop-blur-md bg-transparent`}
        style={{
          backgroundColor: "rgba(253,249,234, 0.5)",
          padding: "1rem",
        }}
      >
        <div
          className="text-xl md:text-3xl flex-none font-bold  tracking-wider "
          style={{ color: colorMapping[pageName]["logo"] }}
        >
          PORTFOLIO
        </div>
        <div
          className="flex text-sm md:text-lg gap-4 font-normal"
          style={{ color: colorMapping[pageName]["logo"] }}
        >
          <a href="#Home" className=" transition-colors duration-300 font-bold">
            Home
          </a>
          <a
            href="#About"
            className=" transition-colors duration-300 font-bold"
          >
            About Me
          </a>
          <a
            href="#Projects"
            className=" transition-colors duration-300 font-bold"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className=" transition-colors duration-300 font-bold"
          >
            Contact
          </a>
        </div>
      </div>

      {/* home section */}
      <div
        id="Home"
        className="w-screen h-screen flex flex-col-reverse gap-5 md:flex-row"
        style={{ padding: "1rem" }}
      >
        <div className="flex items-center justify-start md:w-1/2">
          <div>
            <p className="flex items-center space-x-2 gap-0.5 text-[#D6A99D]  text-xl md:text-5xl">
              <span className="font-bold">Hi</span>
              <Image
                src="/WavingHand.gif"
                alt="Waving hand"
                className=" object-contain"
                width={35}
                height={35}
              />
              <span>I’m</span>
            </p>
            <div
              className="text-[#A7AAE1] text-3xl md:text-7xl"
              style={{ marginBottom: "0.5rem" }}
            >
              {name}
            </div>
            <div className="text-[#9CAFAA] text-sm md:text-xl text-justify">
              Highly driven and relentless in delivering results, I approach
              every project with full commitment and intensity. I thrive under
              pressure, consistently pushing beyond expectations to complete
              tasks with precision and speed. My focus and determination allow
              me to sustain high productivity until the job is done at the
              highest standard.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center  md:w-1/2 mt-24 md:mt-0">
          <div className="relative">
            <div className="relative rounded-full border-[4px] border-[#CBB89D] hero-block overflow-hidden ">
              <Image
                src="/hero.png"
                alt="Hero"
                width={380}
                height={380}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div
        className="h-screen w-full bg-[#FBF3D5] flex"
        id="About"
        data-cursor-color="#ffffff"
      >
        <div className="flex h-full w-full" style={{ marginTop: "5%" }}>
          <div
            className="w-1/2 text-xl text-[#A7AAE1] font-light leading-relaxed tracking-wide"
            style={{ padding: "10% 5%" }}
            data-cursor-color="#ffffff"
          >
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <span className="text-4xl text-[#9CAFAA] mt-1">☸</span>
                <span>
                  {`Hey, I'm `}
                  <span className="font-semibold text-[#F4DF8F]">
                    Sathyarjun
                  </span>{" "}
                  — I’m a developer who genuinely enjoys turning ideas into
                  working code.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-4xl text-[#9CAFAA] mt-1">☸</span>
                <span>
                  Solving bugs feels like solving puzzles — frustrating at
                  first, but satisfying when everything clicks.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-4xl text-[#9CAFAA] mt-1">☸</span>
                <span>
                  I started coding because I liked building things that actually
                  do something, and that curiosity hasn’t slowed down.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-4xl text-[#9CAFAA] mt-1">☸</span>
                <span>
                  I love experimenting with new frameworks, writing code that
                  feels smooth to read, and understanding what’s happening under
                  the hood.
                </span>
              </li>
            </ul>
          </div>

          <div className="w-1/2" data-cursor-color="#ffffff">
            <SkillsGraph />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="Projects" className="min-h-screen bg-[#FBF3D5] py-16 px-10">
        <div className="flex items-center justify-center gap-4 h-screen min-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-md w-full bg-slate-100 border-[#E5E7EB] rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out"
            >
              <Image
                src={project.imageUrl}
                alt={project.Title + " Home Screen Image"}
                className="object-cover rounded-t-3xl"
                width={500}
                height={500}
              />
              <div className="p-6" style={{ padding: "12px" }}>
                <p
                  className="text-3xl font-semibold text-gray-600"
                  style={{ margin: "5px" }}
                >
                  {project.Title}
                </p>
                <p className="text-gray-500  m-5">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="Contact"
        className="w-full bg-[#B6CEB4] text-white flex flex-col gap-2 items-center justify-center"
        style={{ padding: "50px" }}
      >
        <div className="flex gap-2.5 items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg mb-2 opacity-90">
            Let’s build something together.
          </p>
        </div>
        <div className="flex gap-4">
          <p className="text-lg font-medium">📧 sathyarjunab@gmail.com</p>
          <p className="text-lg font-medium">📞 +91 91136 19637</p>

          <div className="mt-6 flex gap-6">
            <div className="flex justify-center items-center gap-1">
              <Linkedin />
              <a
                href="https://www.linkedin.com/in/sathyarjun-a-b-7767ba238/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex justify-center items-center gap-1">
              <Github />
              <a
                href="https://github.com/sathyarjunab"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm opacity-80">
          © {new Date().getFullYear()} Sathyarjun A B.
        </div>
      </div>
    </div>
  );
}
