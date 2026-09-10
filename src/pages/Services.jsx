import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Landing Page",
      desc: "A focused, responsive landing page designed around your business goal, whether that is generating enquiries, promoting a service, or launching a product.",
      features: [
        "Custom design",
        "Mobile responsive",
        "Contact form integration",
        "Deployed and ready to go",
      ],
    },
    {
      title: "Portfolio Website",
      desc: "A clean, professional portfolio that presents your work clearly and helps visitors understand what you do.",
      features: [
        "Up to 5 pages",
        "Project showcase section",
        "Contact form",
        "Deployed on Vercel",
      ],
    },
    {
      title: "React Web App",
      desc: "A functional web application built around your specific business or product requirement, with a clean and responsive React frontend.",
      features: [
        "Custom React components",
        "API integration",
        "State management",
        "Full deployment",
      ],
    },
    {
      title: "REST API Development",
      desc: "A structured backend API built with Node.js and Express to power your website, web application, or internal business system.",
      features: [
        "Node.js and Express",
        "MongoDB database design",
        "JWT authentication",
        "API documentation",
      ],
    },
    {
      title: "Full Stack MERN App",
      desc: "End-to-end development covering the frontend, backend, database, authentication, and deployment for a complete web application.",
      features: [
        "React frontend",
        "Node.js and Express backend",
        "MongoDB database",
        "Authentication and deployment",
      ],
    },
    {
      title: "E-commerce Platform",
      desc: "A complete online store built around your business workflow, from product management and shopping carts to orders and payments.",
      features: [
        "Product listing and categories",
        "Shopping cart",
        "Payment gateway integration",
        "Order management",
      ],
    },
    {
      title: "Security-Focused Web Development",
      desc: "Web applications built with security considered from the beginning, with attention to authentication, authorization, API access, input handling, and common web application security risks.",
      features: [
        "Authentication and authorization",
        "Role-based access control",
        "Protected API routes",
        "Security-focused application review",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f1e9] text-[#3f2b22]">

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-14">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">

          <span className="mb-6 inline-block rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 shadow-sm backdrop-blur-md">
            Services
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-amber-950 sm:text-5xl">
            Build it. Improve it. Secure it.
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500">
            I build websites and web applications, improve existing business
            workflows, and bring security into the development process from
            the start. The goal is simple: build something useful for your
            business and make it reliable as it grows.
          </p>

        </div>
      </section>


      {/* Build / Improve / Secure */}
      <section className="relative border-y border-white/70 bg-white/25 px-6 py-10 backdrop-blur-sm">

        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">

          {/* Build */}
          <div className="rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_16px_40px_rgba(91,55,35,0.1)]">

            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-600">
              Build
            </p>

            <h2 className="mb-3 text-xl font-bold text-amber-950">
              Turn an idea into a working product.
            </h2>

            <p className="text-sm leading-relaxed text-gray-500">
              From business websites and landing pages to full-stack
              applications and e-commerce platforms.
            </p>

          </div>


          {/* Improve */}
          <div className="rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_16px_40px_rgba(91,55,35,0.1)]">

            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-600">
              Improve
            </p>

            <h2 className="mb-3 text-xl font-bold text-amber-950">
              Make your existing system work better.
            </h2>

            <p className="text-sm leading-relaxed text-gray-500">
              Improve existing websites, dashboards, APIs and business
              workflows with practical technical solutions.
            </p>

          </div>


          {/* Secure */}
          <div className="rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_16px_40px_rgba(91,55,35,0.1)]">

            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-600">
              Secure
            </p>

            <h2 className="mb-3 text-xl font-bold text-amber-950">
              Build with security in mind.
            </h2>

            <p className="text-sm leading-relaxed text-gray-500">
              Apply security-focused development practices around
              authentication, authorization, APIs and common web
              application risks.
            </p>

          </div>

        </div>
      </section>


      {/* Services Grid */}
      <section className="relative px-6 py-20">

        <div className="pointer-events-none absolute left-0 top-24 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">

          <div className="mb-10">

            <h2 className="text-2xl font-bold text-amber-950">
              Services
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">
              Choose what you need, or bring me the problem and we can figure
              out the right approach.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {services.map((service, i) => (

              <div
                key={i}
                className={`flex flex-col justify-between rounded-2xl border bg-white/50 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/65 hover:shadow-[0_16px_40px_rgba(91,55,35,0.1)] ${
                  service.title === "Security-Focused Web Development"
                    ? "border-amber-300/80"
                    : "border-white/80"
                }`}
              >

                <div>

                  {service.title === "Security-Focused Web Development" && (
                    <span className="mb-4 inline-block rounded-full border border-amber-200/70 bg-amber-100/60 px-3 py-1 text-xs font-semibold text-amber-700">
                      Security Focus
                    </span>
                  )}

                  <h3 className="mb-2 text-lg font-bold text-amber-950">
                    {service.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-gray-500">
                    {service.desc}
                  </p>


                  <ul className="mb-6 space-y-2">

                    {service.features.map((feature, j) => (

                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >

                        <span className="mt-0.5 font-bold text-amber-600">
                          ✓
                        </span>

                        <span>{feature}</span>

                      </li>

                    ))}

                  </ul>

                </div>


                <Link
                  to="/bookacall"
                  className="group relative block overflow-hidden rounded-lg bg-amber-700 py-2.5 text-center text-xs font-medium text-white shadow-sm shadow-amber-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-800 hover:shadow-lg hover:shadow-amber-900/20"
                >
                  <span className="relative z-10">
                    Book a Free Call
                  </span>
                </Link>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* Security Focus */}
      <section className="relative border-y border-white/70 bg-white/25 px-6 py-20 backdrop-blur-sm">

        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <div className="mb-10 text-center">

            <span className="mb-4 inline-block rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 shadow-sm backdrop-blur-md">
              Web Security
            </span>

            <h2 className="mb-4 text-3xl font-bold text-amber-950">
              Security should not be an afterthought.
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500">
              My development work also focuses on building safer web
              applications. I have hands-on knowledge of web application
              security and apply that knowledge when working with
              authentication, APIs, user permissions and application data.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* Authentication */}
            <div className="rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60">

              <h3 className="mb-3 text-lg font-semibold text-amber-950">
                Authentication
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                Secure login flows, JWT-based authentication and protected
                application access.
              </p>

            </div>


            {/* Authorization */}
            <div className="rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60">

              <h3 className="mb-3 text-lg font-semibold text-amber-950">
                Authorization
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                Role-based access control and permission checks so users can
                access only the functionality and data they are allowed to.
              </p>

            </div>


            {/* API Security */}
            <div className="rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60">

              <h3 className="mb-3 text-lg font-semibold text-amber-950">
                API Security
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                Protected routes, input handling and security-focused API
                practices to reduce common access and data exposure risks.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* Note */}
      <section className="relative px-6 py-10">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm leading-relaxed text-gray-500">
            Not sure which service fits your requirement?{" "}
            <Link
              to="/bookacall"
              className="font-medium text-amber-700 transition hover:text-amber-950 hover:underline"
            >
              Book a free 15 minute call
            </Link>{" "}
            and we can understand the problem first and figure out the right
            solution.
          </p>

        </div>
      </section>


      {/* CTA */}
      <section className="relative overflow-hidden bg-amber-700 px-6 py-20 text-center text-white">

        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">

          <h2 className="mb-4 text-3xl font-bold">
            Have a web project or business problem?
          </h2>

          <p className="mb-8 text-sm leading-relaxed text-amber-100">
            Let's have a quick conversation about what you need and whether I
            can help.
          </p>

          <Link
            to="/bookacall"
            className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-amber-700 shadow-lg shadow-amber-950/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-xl"
          >
            Book a Free Call
          </Link>

        </div>
      </section>


      {/* Footer */}
      <footer className="bg-amber-950 px-6 py-8 text-center">

        <p className="text-sm text-amber-200">
          © 2026 Code and Coffee · Built by Sivasankaran
        </p>

      </footer>

    </div>
  );
}