// src/components/Experience.tsx
const experiences = [
  {
    title: 'Back-End Developer / Business Analyst',
    company: 'Accenture',
    companyUrl: 'https://www.accenture.com/sg-en',
    period: '2024 — Present',
    description: 'Significant contributions were made in OutSystems API optimization, resolving critical tickets, and leading extensive testing efforts. Post-go-live, significant amount of key issues were addressed, stabilizing production and improving efficiency. OutSystems modules were optimized, enhancing execution speed and resource utilization. Additionally, a major change request on API development was handled, ensuring seamless integration.',
    badges: ['SQL', 'OutSystems'],
    highlights: ['3 Project Involvements', '42+ Tickets Closed'],
  },
  {
    title: 'Murdoch University',
    company: 'Kaplan',
    companyUrl: 'https://murdoch.kaplan.com.sg/',
    period: '2022 — 2024',
    description: 'Completed studies at Murdoch University with a Bachelor’s degree in Information Technology, specializing in Computer Science. Built a Power BI application for a client’s course/module query system, gaining hands-on experience in data visualization, SQL, and business intelligence tools.',
    badges: ['Java', 'Python', 'C++', 'SQL', 'JSON', 'Power BI'],
    subtitle: 'Bachelor of Information Technology in Computer Science'
  },
  {
    title: 'Software Developer / Data Analyst',
    company: 'Crimson Logic',
    companyUrl: 'https://www.crimsonlogic.com/',
    period: '2018',
    description: 'Experienced in Agile methodologies, contributing to SCRUM meetings, sprint planning, and backlog prioritization. Built KPI trackers and real-time data visualizations in Tableau and Power BI.',
    badges: ['Java', 'Tableau', 'Power BI', 'Agile'],
  },
  {
    title: 'Ngee Ann Polytechnic',
    company: 'Ngee Ann Polytechnic',
    companyUrl: 'https://www.np.edu.sg/',
    period: '2017 — 2020',
    description: 'Completed the Diploma in Information Technology. Led a capstone project to redesign and upgrade the annual Open House event website.',
    badges: ['Python', 'R', 'HTML & CSS', 'Javascript', 'SQL', 'Java', 'Swift', 'Objective-C', 'PHP'],
    subtitle: 'Diploma in Information Technology'
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, idx) => (
            <li key={idx} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a href={exp.companyUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{exp.title} · <span className="inline-block">{exp.company}</span></span>
                      </a>
                    </div>
                    {exp.subtitle && <div className="text-slate-500" aria-hidden="true">{exp.subtitle}</div>}
                  </h3>
                  <p className="description mt-2 text-sm leading-normal hidden sm:block">{exp.description}</p>
                  {exp.highlights && (
                    <div className="mt-2 space-x-4">
                      {exp.highlights.map((item, i) => (
                        <span key={i} className="relative inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.badges.map((tech, i) => (
                      <li key={i} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base" href="Gerald Ng - Resume.pdf" target="_blank" rel="noreferrer noopener">
            <span>View Full<span className="inline-block">&nbsp;Résumé</span></span>
          </a>
          <a className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base ml-6" href="Testimonial_Gerald Ng.pdf" target="_blank" rel="noreferrer noopener">
            <span>View<span className="inline-block">&nbsp;Accenture&nbsp;Testimonial</span></span>
          </a>
        </div>
      </div>
    </section>
  );
}