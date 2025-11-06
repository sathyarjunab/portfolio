"use client";

import Loader from "@/component/loader";
import SkillsGraph from "@/component/skills";
import Image from "next/image";
import { useEffect, useState } from "react";
type PageEnum = "Home" | "About" | "Projects" | "Contact";

const colorMapping = {
  Home: { nav: "#795757", logo: "#000000", links: "#000000" },
  About: { nav: "#FBF3D5", logo: "#ffffff", links: "#ffffff" },
  Projects: { nav: "#795757", logo: "#ffffff", links: "#B6CEB4" },
  Contact: { nav: "#B6CEB4", logo: "#ffffff", links: "#B6CEB4" },
};

const projects = [
  {
    Title: "Hedged Core",
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

  return loading ? (
    <Loader percentage={percentage} />
  ) : (
    <div className=" bg-[#FBF3D5]  font-serif">
      <div className="cursor-dot"></div>
      {/* navbar */}
      <div
        className={`fixed top-2 left-1 right-1 rounded-2xl flex items-center justify-between shadow-md z-50 font-serif px-6 py-3 backdrop-blur-md bg-transparent`}
        style={{
          backgroundColor: "rgba(253,249,234, 0.5)",
          padding: "1rem",
        }}
      >
        <div
          className="text-3xl flex-none font-bold  tracking-wider "
          style={{ color: colorMapping[pageName]["logo"] }}
        >
          PORTFOLIO
        </div>
        <div
          className="flex text-lg font-medium gap-4 font-normal"
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
            href="#contact"
            className=" transition-colors duration-300 font-bold"
          >
            Contact
          </a>
        </div>
      </div>

      {/* home section */}

      <div id="Home" className="w-screen h-screen flex">
        <div className="flex items-center justify-start w-1/2">
          <div style={{ marginLeft: "10%" }}>
            <h1 className="flex items-center space-x-2 gap-0.5">
              <span className="text-[#D6A99D] text-5xl font-bold">Hi</span>
              <Image
                src="/WavingHand.gif"
                alt="Waving hand"
                className=" object-contain"
                width={35}
                height={35}
              />
              <span className="text-[#9CAFAA] text-5xl">I’m</span>
            </h1>
            <div
              className="text-[#A7AAE1] text-7xl name "
              style={{ marginBottom: "0.5rem" }}
            >
              {name}
            </div>
            <div className="text-[#9CAFAA] text-2xl text-justify">
              Highly driven and relentless in delivering results, I approach
              every project with full commitment and intensity. I thrive under
              pressure, consistently pushing beyond expectations to complete
              tasks with precision and speed. My focus and determination allow
              me to sustain high productivity until the job is done at the
              highest standard.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2">
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
        className="h-full w-full bg-[#D6A99D] flex"
        id="About"
        data-cursor-color="#ffffff"
      >
        <div className="flex h-full w-full" style={{ marginTop: "5%" }}>
          <div
            className="w-1/2 text-2xl text-[#ffffff] font-light leading-relaxed tracking-wide"
            style={{ padding: "10% 5%" }}
            data-cursor-color="#ffffff"
          >
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <span className="text-4xl text-[#A7AAE1] mt-1">☸</span>
                <span>
                  {`Hey, I'm `}
                  <span className="font-semibold text-[#FBF3D5]">
                    Sathyarjun
                  </span>{" "}
                  — I’m a developer who genuinely enjoys turning ideas into
                  working code.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-4xl text-[#A7AAE1] mt-1">☸</span>
                <span>
                  Solving bugs feels like solving puzzles — frustrating at
                  first, but satisfying when everything clicks.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-4xl text-[#A7AAE1] mt-1">☸</span>
                <span>
                  I started coding because I liked building things that actually
                  do something, and that curiosity hasn’t slowed down.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-4xl text-[#A7AAE1] mt-1">☸</span>
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

      {/* projects Section */}
      <div className="grid grid-cols-3"></div>
    </div>
  );
}
