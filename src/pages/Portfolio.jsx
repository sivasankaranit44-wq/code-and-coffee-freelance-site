export default function Portfolio() {
  const projects = [
    {
      title: "Claira - AI Portfolio Catalyst",
      desc: "An AI powered portfolio coach built for freshers and career switchers. Helps users improve their resume, get project suggestions, and prepare for interviews.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Claude AI"],
      live: "https://clairalandingpage-f432.vercel.app/",
      github: "https://github.com/Siva918641",
      tag: "Full Stack",
    },
    {
      title: "Brew Invoice - Invoice Generator",
      desc: "A full stack MERN invoice generator with JWT authentication, client management, PDF generation, email sending, and dashboard analytics.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Puppeteer", "Nodemailer"],
      live: "https://brewbill-frontend.vercel.app/",
      github: "https://github.com/sivasankaranit44-wq",
      tag: "Full Stack",
    },
    {
      title: "Brewdesk - CRM Dashboard",
      desc: "A full stack CRM dashboard with real-time search, advanced filtering, drag and drop reordering, pagination, customer CRUD operations, and dark themed UI.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      live: "https://brewdesk-frontend.vercel.app/",
      github: "https://github.com/sivasankaranit44-wq",
      tag: "Full Stack",
    },
    {
      title: "LexiBreak - The Quiz App",
      desc: "An interactive quiz application with reusable components, client side routing, dynamic question fetching via API, and scoring logic.",
      tech: ["React", "React Router", "Tailwind CSS", "Vercel"],
      live: "https://lexi-break-quiz-react.vercel.app/",
      github: "https://github.com/Siva918641",
      tag: "Frontend",
    },
  ];

  const tagColors = {
    "Full Stack": "bg-amber-100/60 text-amber-700 border-amber-200/70",
    Frontend: "bg-blue-50/60 text-blue-600 border-blue-100/70",
  };

  const securityPoints = [
    {
      title: "Web Application Security",
      desc: "Security-focused development and reviews for web applications, with attention to authentication, authorization, input handling and common web security issues.",
    },
    {
      title: "API Security",
      desc: "Reviewing API access, protected routes, authentication and authorization to help prevent unauthorized access to application data and functionality.",
    },
    {
      title: "Secure Authentication",
      desc: "Implementing and reviewing authentication and role-based access controls so users can access only what they are supposed to.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f1e9]">

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-16">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">

          <span className="mb-6 inline-block rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 shadow-sm backdrop-blur-md">
            Portfolio
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-amber-950 sm:text-5xl">
            Work I am proud of.
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
            Real projects built while developing my full-stack experience.
            Each project gave me a chance to solve a different kind of problem.
          </p>

        </div>
      </section>


      {/* Projects */}
      <section className="relative px-6 pb-20">

        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {projects.map((project, i) => (

              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-white/80 bg-white/50 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/65 hover:shadow-[0_16px_40px_rgba(91,55,35,0.1)]"
              >

                <div>

                  {/* Project Tag */}
                  <span
                    className={`mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold ${
                      tagColors[project.tag]
                    }`}
                  >
                    {project.tag}
                  </span>

                  {/* Project Title */}
                  <h3 className="mb-3 text-lg font-bold text-amber-950">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-gray-500">
                    {project.desc}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">

                    {project.tech.map((technology, j) => (

                      <span
                        key={j}
                        className="rounded-full border border-white/80 bg-white/45 px-3 py-1 text-xs text-amber-800 backdrop-blur-md"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>


                {/* Buttons */}
                <div className="flex gap-3">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-[#a97852] py-2.5 text-center text-xs font-medium text-white shadow-sm shadow-[#6f4a35]/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#946947] hover:shadow-md"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-amber-700/70 bg-white/35 py-2.5 text-center text-xs font-medium text-amber-700 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/60"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* Security & Web Application Security */}
      <section className="relative border-y border-white/70 bg-white/25 px-6 py-20 backdrop-blur-sm">

        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <div className="mb-10 text-center">

            <span className="mb-4 inline-block rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 shadow-sm backdrop-blur-md">
              Security
            </span>

            <h2 className="mb-4 text-3xl font-bold text-amber-950">
              I build with security in mind.
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
              Alongside full-stack development, I have hands-on knowledge of
              web application security. I focus on identifying common security
              weaknesses and building applications with safer authentication,
              authorization and API practices.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {securityPoints.map((item, i) => (

              <div
                key={i}
                className="rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60"
              >

                <h3 className="mb-3 text-lg font-semibold text-amber-950">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>


          <div className="mt-8 text-center">

            <p className="text-sm text-gray-500">
              Need a website or web application with security considered from the start?
            </p>

          </div>

        </div>
      </section>


      {/* CTA */}
<section className="relative overflow-hidden bg-[#a97852] px-6 py-20 text-center text-white">

  <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#e5c2a5]/20 blur-3xl" />

  <div className="relative mx-auto max-w-2xl">


<h2 className="mb-4 text-3xl font-bold">
  Have a project in mind?
</h2>

<p className="mb-8 text-sm leading-relaxed text-[#f5e9df]">
  Let's have a quick 30 minute call and figure out if we are a good
  fit.
</p>

<a
  href="/bookacall"
  className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-[#8f6345] shadow-lg shadow-[#6f4a35]/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f7f1e9] hover:shadow-xl"
>
  Book a Free Call
</a>

  </div>
</section>

{/* Footer */}

<footer className="border-t border-[#d8c7b8]/50 bg-[#f3ebe2] px-6 py-7 text-center">

<p className="text-sm text-[#8f6345]"> © 2026 Code and Coffee · Built by Sivasankaran </p>

</footer>


    </div>
  );
}