// src/components/About.tsx
export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4">
          I’m an Application Developer with a strong background in operations and maintenance, where I work extensively on resolving support tickets for legacy systems. 
          This hands-on experience has sharpened my ability to quickly diagnose issues, understand business priorities, and translate client needs into practical technical solutions.
          By identifying opportunities for improvement, I’ve been able to design and develop system enhancements that streamline workflows, improve usability, and create lasting value for end users. 
          My goal is always to bridge the gap between business needs and technology — ensuring every solution is both functional and user-friendly.
        </p>
      </div>
    </section>
  );
}
