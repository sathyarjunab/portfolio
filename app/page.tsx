import {
  Navbar, Hero, Ticker, SectionHeader, About, ProjectShowcase, ExperienceTimeline,
  SkillGroups, ResumeDownload, SocialLinks, ContactBlock, Footer, Button, Reveal,
} from "../components/sa";
import { profile, resume, tickerItems, about, projects, experience, skills, socials } from "../data/portfolio";

function Section({ id, eyebrow, title, description, children }: { id: string; eyebrow: string; title: string; description?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="sa-section">
      <div className="sa-container">
        <Reveal><SectionHeader eyebrow={eyebrow} title={title} description={description} /></Reveal>
        <Reveal delay={80}>{children}</Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <div className="sa-container" style={{ paddingTop: 12, position: "sticky", top: 0, zIndex: 40 }}>
        <Navbar
          name={profile.name}
          monogram={profile.monogram}
          sticky={false}
          links={[
            { label: "About", href: "#about" },
            { label: "Work", href: "#projects" },
            { label: "Resume", href: "#resume" },
            { label: "Contact", href: "#contact" },
          ]}
          cta={{ label: "Hire me", href: "#contact" }}
        />
      </div>

      <div className="sa-container">
        <Hero
          name={profile.heroName}
          role={profile.role}
          status={profile.status || undefined}
          sticker={profile.sticker}
          portraitSrc={profile.portrait}
          bio={profile.bio}
          actions={[
            <Button key="work" href="#projects" size="lg">See my work</Button>,
            <Button key="cv" variant="secondary" size="lg" href="#resume">Get my resume</Button>,
          ]}
        />
      </div>

      <Ticker items={tickerItems} />

      <Section id="about" eyebrow="/about" title="Hey, I’m Sathyarjun">
        <About lead={about.lead} notes={about.notes} />
      </Section>

      <Section id="projects" eyebrow="/projects" title="Selected work" description="Trading platforms, billing systems and a few things I built for fun.">
        <ProjectShowcase projects={projects} />
      </Section>

      <Section id="experience" eyebrow="/experience" title="Where I’ve worked">
        <ExperienceTimeline items={experience} />
      </Section>

      <Section id="skills" eyebrow="/skills" title="What I use">
        <SkillGroups groups={skills} />
      </Section>

      <section className="sa-section">
        <div className="sa-container">
          <Reveal>
            <ResumeDownload {...resume} />
          </Reveal>
        </div>
      </section>

      <Section id="social" eyebrow="/elsewhere" title="Find me online">
        <SocialLinks items={socials} />
      </Section>

      <section className="sa-section">
        <div className="sa-container">
          <Reveal>
            <ContactBlock
              title="Let’s build something together."
              email={profile.email}
              links={[
                { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
                { label: "GitHub", href: profile.github, icon: "github" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <div className="sa-container" style={{ paddingTop: 64 }}>
        <Footer owner={profile.name} note="Built with Next.js" />
      </div>
    </main>
  );
}
