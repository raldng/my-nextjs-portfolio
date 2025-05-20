// src/components/About.tsx
export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4">
          I am a Software Developer with a strong background in web application development, currently focusing on specializing in OutSystems. I strive to optimize applications and integrate seamless solutions, with experience in back-end development, API optimization, and data analysis. I am passionate about creating systems that are intuitive and user-friendly, always aiming to improve performance and user experience through innovative technologies.
        </p>
      </div>
    </section>
  );
}
