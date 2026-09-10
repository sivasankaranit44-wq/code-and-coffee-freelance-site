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
    <div className="min-h-screen bg-amber-50">

      {/* Hero */}
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Services
          </span>

          <h1 className="text-4xl font-bold text-amber-900 leading-tight mb-4">
            Build it. Improve it. Secure it.
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            I build websites and web applications, improve existing business
            workflows, and bring security into the development process from
            the start. The goal is simple: build something useful for your
            business and make it reliable as it grows.
          </p>

        </div>
      </section>

      {/* What I Help With */}
      <section className="px-6 pb-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="rounded-2xl bg-white border border-amber-100 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-3">
              Build
            </p>

            <h2 className="text-xl font-bold text-amber-900 mb-3">
              Turn an idea into a working product.
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed">
              From business websites and landing pages to full-stack
              applications and e-commerce platforms.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-amber-100 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-3">
              Improve
            </p>

            <h2 className="text-xl font-bold text-amber-900 mb-3">
              Make your existing system work better.
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed">
              Improve existing websites, dashboards, APIs and business
              workflows with practical technical solutions.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-amber-100 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-3">
              Secure
            </p>

            <h2 className="text-xl font-bold text-amber-900 mb-3">
              Build with security in mind.
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed">
              Apply security-focused development practices around
              authentication, authorization, APIs and common web
              application risks.
            </p>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto">

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-amber-900">
              Services
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Choose what you need, or bring me the problem and we can figure
              out the right approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {services.map((service, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between ${
                  service.title === "Security-Focused Web Development"
                    ? "border-amber-300 shadow-md shadow-amber-900/5"
                    : "border-amber-100 shadow-sm"
                }`}
              >
                <div>

                  {service.title === "Security-Focused Web Development" && (
                    <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      Security Focus
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-amber-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-amber-600 font-bold mt-0.5">
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                <Link
                  to="/bookacall"
                  className="group relative block overflow-hidden text-center bg-amber-700 hover:bg-amber-800 text-white text-xs font-medium py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-900/20"
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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-10">

            <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Web Security
            </span>

            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Security should not be an afterthought.
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
              My development work also focuses on building safer web
              applications. I have hands-on knowledge of web application
              security and apply that knowledge when working with
              authentication, APIs, user permissions and application data.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">
                Authentication
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Secure login flows, JWT-based authentication and protected
                application access.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">
                Authorization
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Role-based access control and permission checks so users can
                access only the functionality and data they are allowed to.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">
                API Security
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Protected routes, input handling and security-focused API
                practices to reduce common access and data exposure risks.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Note */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-gray-500 text-sm leading-relaxed">
            Not sure which service fits your requirement?{" "}
            <Link
              to="/bookacall"
              className="text-amber-700 font-medium hover:underline"
            >
              Book a free 15 minute call
            </Link>{" "}
            and we can understand the problem first and figure out the right
            solution.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-amber-700 text-white text-center">
        <div className="max-w-2xl mx-auto">

          <h2 className="text-3xl font-bold mb-4">
            Have a web project or business problem?
          </h2>

          <p className="text-amber-100 text-sm mb-8">
            Let's have a quick conversation about what you need and whether I
            can help.
          </p>

          <Link
            to="/bookacall"
            className="inline-block bg-white text-amber-700 font-semibold px-8 py-3 rounded-xl text-sm hover:bg-amber-50 transition"
          >
            Book a Free Call
          </Link>

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
