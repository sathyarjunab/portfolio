"use client";

import Loader from "@/component/loader";
import SkillsGraph from "@/component/skills";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type PageEnum = "Home" | "About" | "Projects" | "Contact";

//nav bar colors
const colorMapping = {
  Home: { nav: "#ffffff", logo: "#A7AAE1", links: "#A7AAE1" },
  About: { nav: "#ffffff", logo: "#A7AAE1", links: "#A7AAE1" },
  Projects: { nav: "#ffffff", logo: "#A7AAE1", links: "#A7AAE1" },
  Contact: { nav: "#ffffff", logo: "#A7AAE1", links: "#A7AAE1" },
};

//projects
const projects = [
  {
    Title: "Hedged Core",
    description:
      "Contributed to a stock recommendation platform delivering real-time trade suggestions. Independently developed the WhatsApp integration module and implemented advanced OHLC and line chart visualizations for comprehensive market analytics.",
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

const items = [
  {
    image: "/Hedged.png",
    link: "",
    title: "Hedged Core",
    description:
      "Contributed to a stock recommendation platform delivering real-time trade suggestions. Independently developed the WhatsApp integration module and implemented advanced OHLC and line chart visualizations for comprehensive market analytics.",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
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
    <div className="font-serif relative min-h-full ">
      <div className="cursor-dot"></div>
      {/* navbar */}
      <div className="fixed top-2 left-1 right-1  z-50 flex items-center justify-between rounded-2xl shadow-md font-serif backdrop-blur-md bg-[rgba(255,255,255,0.5)] px-5">
        <div className={`text-xl flex-none font-bold `}>
          <Image
            alt="logo"
            src={"/sup-logo.svg"}
            width={30}
            height={30}
            color={`${colorMapping[pageName]["logo"]}`}
            className="w-10 h-10 md:w-13 md:h-13 lg:w-17 lg:h-17 object-contain "
          />
        </div>
        <div
          className="flex text-xs gap-4 ml-2 font-normal text-center md:text-2xl"
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
        className="w-full flex flex-col-reverse px-2 py-8 md:p-8 md:flex-row md:pt-45 md:justify-around"
      >
        <div className="flex items-center justify-start md:w-1/2 ">
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

        <div className="rounded-full border-4 hero-block overflow-hidden mt-6 self-center justify-self-center justify-self-between">
          <Image
            src="/hero.png"
            alt="Hero"
            width={380}
            height={380}
            className="object-cover"
          />
        </div>
      </div>
      {/* about section */}
      <div
        className="w-full flex flex-col py-15 md:flex-row  pirata-one-regular justify-center md:items-center md:py-10"
        id="About"
        data-cursor-color="#ffffff"
      >
        <div
          className="text-justify text-xs text-[#A7AAE1] font-light leading-relaxed tracking-wide px-2 md:py-[10%] md:px-[5%] md:w-1/2 md:text-2xl "
          data-cursor-color="#ffffff"
        >
          <ul className="space-y-8">
            <li className="flex items-center gap-4">
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
            <li className="flex items-center gap-4">
              <span className="text-4xl text-[#9CAFAA] mt-1">☸</span>
              <span>
                Solving bugs feels like solving puzzles — frustrating at first,
                but satisfying when everything clicks.
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

        <div
          className="h-screen flex justify-center items-center w-full md:w-1/2 md:h-120"
          data-cursor-color="#ffffff"
        >
          <SkillsGraph />
        </div>
      </div>
      {/* Projects Section */}
      <div
        id="Projects"
        className="py-15 px-2 md:px-10 md:h-screen md:flex md:justify-center md:items-center"
      >
        <div className="flex flex-col items-center justify-center gap-7 mx-auto text-[#A7AAE1] pirata-one-regular md:flex-row md:text-xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-block max-w-md w-full bg-slate-300 border-[#E5E7EB] rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out"
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
                <p className="m-5">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Section */}
      <div
        id="Contact"
        className="w-full text-white flex flex-col gap-2 items-center justify-center pirata-one-regular"
      >
        <div className="flex gap-2.5 items-center w-full text-center justify-center">
          <h1 className="text-xl font-bold ">Contact Me</h1>
          <p className="text-xl opacity-90">Let’s build something together.</p>
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <p className="text-lg font-medium">📧 sathyarjunab@gmail.com</p>
          <p className="text-lg font-medium">📞 +91 91136 19637</p>

          <div className="flex gap-6">
            <div className="flex justify-center items-center gap-1">
              <LinkedinIcon />
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
              <GithubIcon />
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
