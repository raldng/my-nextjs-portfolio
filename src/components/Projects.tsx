// src/components/Projects.tsx
const projects = [
  {
    title: 'Performance Tracking System (In Progress)',
    type: 'App',
    description:
      'Performance Tracking System utilizes CRUD operations and different user roles to manage and track individual performance data. The application allows users to input, update, and view performance metrics, generating detailed dashboards and key performance indicators (KPIs) for each individual in the project. By providing real-time insights and tracking progress, the system helps stakeholders monitor performance effectively and make data-driven decisions.',
  },
  {
    title: 'Ticketing System (In Progress)',
    type: 'App',
    description:
      'Simple ticketing system application that utilizes CRUD (Create, Read, Update, Delete) operations and supports different user roles. The system allows users to create, manage, and track tickets while administrators can oversee, update, and close them. Each role is assigned specific permissions to ensure proper access control, enabling efficient management of support requests and workflows.',
  },
  {
    title: 'FitMeUp (In Progress)',
    type: 'Personal Trainer System App',
    description:
      'FitMeUp connects clients in Thailand with personal trainers at their preferred locations, offering a convenient, hassle-free alternative to traditional gyms. Clients and trainers can easily manage bookings through our website or LINE, with payment and session coordination handled by our admin team.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, idx) => (
            <li key={idx} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href=""
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label=""
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}&nbsp;·&nbsp;
                        <span className="inline-block">
                          {project.type}{' '}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
