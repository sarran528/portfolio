import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCheck, FiGithub, FiInstagram, FiLinkedin, FiMail, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { sarran, portfolio15, portfolio17, zapflow } from "./assets";
import { TicofabCanvas } from "./components/canvas";
import { Badge, Button, Card, Container, SectionHeading } from "./components/ui";
import { usePremiumMotion } from "./utils/premiumMotion";

const projects = [
  { number: "01", title: "AI SaaS Application | Prompt-to-Website Generator", type: "AI SaaS application", summary: "Built an AI-powered SaaS application that turns a text prompt into a working website or app, such as landing pages and prototypes, with secure sandboxing.", image: portfolio15, stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Neon", "Inngest", "TanStack Query", "Shadcn/UI"], details: ["Implemented Inngest-based background jobs and CRUD workflows", "Integrated OpenAI API for AI-driven generation"] },
  { number: "02", title: "Study Group Finder | MERN Web Application", type: "MERN web application", summary: "Built an end-to-end platform for discovering, creating and managing study groups with course mapping and membership workflows.", image: portfolio17, stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Git"], details: ["Designed the REST API and MongoDB schema", "Implemented JWT-based authentication"] },
  { number: "03", title: "Low Vision Assistive Mobile Application | React Native", type: "React Native mobile application", summary: "Built a mobile app for visually impaired users with image-to-text, speech-to-text and text-to-speech.", image: zapflow, stack: ["React Native", "Expo", "Python", "OCR", "Speech Recognition", "Text-to-Speech APIs"], details: ["Implemented OCR and image-processing pipelines in Python", "Integrated real-time voice assistance"] },
];

const skills = [
  ["Core Stack", "React.js, Node.js, Express.js, TypeScript, JavaScript, MongoDB, REST APIs, JWT Authentication"],
  ["Testing & DevOps", "Unit testing (Vitest), API testing (Bruno, Postman), CI/CD (Jenkins build and test cycles), Docker, Git, GitHub, code reviews, mentoring"],
  ["Frontend", "Next.js, Tailwind CSS, Shadcn/UI, HTML5, CSS3, React Native, SEO, React.js"],
  ["Backend & Databases", "PostgreSQL, Prisma ORM, Neon, MySQL, MongoDB, Spring Boot, Java"],
  ["State & Automation", "TanStack Query, Context API, OpenAI API integration, Inngest"],
  ["Other", "Python, C, Data Structures, Algorithms, OOP, DBMS, SDLC, System Design Fundamentals, VS Code, IntelliJ IDEA, Prisma Studio"],
];

const experience = [
  ["2026 - Present", "Freelance Project Manager & Full Stack Developer", "NEXGENADZ", "Building a College CMS platform and website for PPG Institute of Technology end to end, while owning project planning, stakeholder communication, feature tracking, delivery timelines, APIs, databases, and deployment."],
  ["Jul 2025", "Full Stack Developer Intern", "Cloves Inc. (Remote)", "Built backend APIs and business logic using Java and Spring Boot with relational databases, optimized API response handling, and collaborated on feature implementation and testing."],
  ["Jul 2025", "Java Developer Intern", "Infosys", "Built frontend and backend modules using React and Spring Boot, implemented REST APIs, and contributed to requirements analysis, debugging, and testing in a team-based workflow."],
];

const achievements = [
  "Java Programming Certification - Infosys",
  "Data Analysis Certification - IBM",
  "MongoDB Certification",
  "Runner-Up - Tamil Nadu Skill Development Corporation (TNSDC) Hackathon",
];

const navItems = ["about", "skills", "work", "experience", "contact"];

const App = () => {
  const rootRef = useRef(null);
  const [dark, setDark] = useState(() => localStorage.getItem("portfolio-theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  usePremiumMotion(rootRef);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", `${scrollable ? (window.scrollY / scrollable) * 100 : 0}%`);
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("sarranm528@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div ref={rootRef} className={`site ${dark ? "theme-dark" : ""}`}>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <header className="nav shell">
        <a className="wordmark" href="#top" aria-label="Sarran M home">SM<span>.</span></a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a href="#contact" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>Start a conversation</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <FiX /> : <FiMenu />}</button>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <FiSun /> : <FiMoon />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="shape shape--ring" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow" data-hero-reveal><span className="status-dot" /> Open to opportunities</p>
            <h1 id="hero-title" data-hero-reveal>Building useful software with <em>clarity</em> and character.</h1>
            <p className="hero-lede" data-hero-reveal>I&apos;m Sarran, a full-stack developer building scalable web products with React, Node, and TypeScript.</p>
            <div className="hero-actions" data-hero-reveal><Button href="#work">View projects</Button><a className="text-link" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="hero-visual" aria-label="Interactive 3D astronaut" data-hero-reveal><TicofabCanvas /></div>
        </section>

        <section className="section shell" id="about">
          <SectionHeading number="01" eyebrow="About me" title="Technical enough to go deep. Curious enough to look sideways." subtitle="Full Stack Developer and Computer Science graduate with production experience across web products, APIs, databases, authentication, and AI-integrated features." />
          <div className="about-grid">
            <div className="about-copy" data-reveal><p>I work across the stack with JavaScript, TypeScript, React, Next.js, Node.js, and Spring Boot. I learn new codebases quickly, use AI tools to accelerate development, and apply independent judgment to review and validate every result.</p><p>My best work happens in close collaboration: asking good questions, sharing progress early, and building systems that feel understandable to the people who use them.</p><p className="personal-line">Coimbatore, Tamil Nadu · open to thoughtful remote work</p></div>
            <Card className="profile-card"><img src={sarran} alt="Sarran M." loading="lazy" /><div><strong>Sarran M.</strong><span>Full-stack developer</span><span>Coimbatore, Tamil Nadu</span></div></Card>
          </div>
        </section>

        <section className="section shell" id="skills">
          <SectionHeading number="02" eyebrow="What I work with" title="A practical stack for products that need to ship." subtitle="Grouped by the way I use the tools, from interface to infrastructure." />
          <div className="skills-list">{skills.map(([title, list]) => <div className="skill-row" key={title} data-skill><Badge>{title}</Badge><p>{list}</p></div>)}</div>
        </section>

        <section className="section shell" id="work">
          <SectionHeading number="03" eyebrow="Selected work" title="Projects with a point of view." subtitle="AI SaaS, full-stack platforms, and assistive technology built around real workflows." />
          <div className="project-list">{projects.map((project) => <Card className="project" key={project.number}><div className="project-image"><img src={project.image} alt={project.title} loading="lazy" /></div><div className="project-info"><div className="project-top"><span>{project.number} / {project.type}</span><button className="round-button" onClick={() => setSelectedProject(project)} aria-label={`View details for ${project.title}`}><FiArrowUpRight /></button></div><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="tags">{project.stack.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div></div></Card>)}</div>
        </section>

        <section className="section shell" id="experience">
          <SectionHeading number="04" eyebrow="Experience" title="Learning quickly, owning the details, delivering the whole thing." />
          <div className="timeline">{experience.map(([date, title, company, description], index) => <article className="timeline-item" key={title}><span>{date}</span><div><h3>{title}</h3><strong>{company}</strong><p>{description}</p></div><i aria-hidden="true" /></article>)}</div>
        </section>

        <section className="section shell" id="achievements">
          <SectionHeading number="05" eyebrow="Certifications & achievements" title="Signals of curiosity and follow-through." />
          <div className="achievement-grid">{achievements.map((achievement) => <Card className="achievement" key={achievement}><FiCheck aria-hidden="true" /><h3>{achievement}</h3></Card>)}</div>
        </section>

        <section className="contact-band" id="contact"><Container className="contact-grid"><div><p className="eyebrow">06 / Start a conversation</p><h2>Have a product in mind?<br /><em>Let&apos;s make it real.</em></h2><p className="contact-copy">Tell me what you&apos;re building, where you&apos;re stuck, or what you want to explore.</p><div className="contact-links"><button onClick={copyEmail}><FiMail /> {copied ? "Email copied" : "sarranm528@gmail.com"}</button><a href="https://github.com/sarran528/sarran528" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href="https://www.linkedin.com/in/sarran-m-52a96a331" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a><a href="https://www.instagram.com/_.sarran05._/" target="_blank" rel="noreferrer"><FiInstagram /> Instagram</a></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows="4" placeholder="A little about the project..." /></label><Button variant="light" type="submit">{sent ? "Message ready to send" : "Send an inquiry"}</Button></form></Container></section>
      </main>

      <footer className="footer shell"><span>© {new Date().getFullYear()} Sarran M.</span><span>Built with intention.</span><a href="#top">Back to top ↑</a></footer>
      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}><button className="icon-button modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><FiX /></button><p className="eyebrow">{selectedProject.type}</p><h2 id="project-modal-title">{selectedProject.title}</h2><p>{selectedProject.summary}</p><ul>{selectedProject.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="tags">{selectedProject.stack.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div></div></div>}
    </div>
  );
};

export default App;
