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
    "Full Stack": "bg-amber-100 text-amber-700",
    Frontend: "bg-blue-50 text-blue-600",
  };

  return (
    <div className="min-h-screen bg-amber-50">

      {/* Hero */}
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Portfolio
          </span>

          <h1 className="text-4xl font-bold text-amber-900 leading-tight mb-4">
            Work I am proud of.
          </h1>

          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Every project here was built from scratch and its deployed, functional,
            and real. Each one taught me something new.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                {/* Project Tag */}
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                    tagColors[project.tag]
                  }`}
                >
                  {project.tag}
                </span>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-amber-900 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="bg-amber-50 border border-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-amber-700 hover:bg-amber-800 text-white text-xs font-medium py-2.5 rounded-lg transition"
                >
                  Live Demo
                </a>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-amber-700 text-amber-700 hover:bg-amber-50 text-xs font-medium py-2.5 rounded-lg transition"
                >
                  GitHub
                </a>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-amber-700 text-white text-center">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-3xl font-bold mb-4">
            Have a project in mind?
          </h2>

          <p className="text-amber-100 text-sm mb-8">
            Let's have a quick 15 minute call and figure out if we are a good
            fit.
          </p>

          {/* Book a Call */}
          <a
            href="/bookacall"
            className="inline-block bg-white text-amber-700 font-semibold px-8 py-3 rounded-xl text-sm hover:bg-amber-50 transition"
          >
            Book a Free Call
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-amber-900 text-center">
        <p className="text-amber-200 text-sm">
          2026 CodeandCoffee. Built by Sivasankaran
        </p>
      </footer>

    </div>
  );
}