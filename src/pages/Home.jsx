import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">

          <span className="mb-6 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-700">
            Freelance Web Developer
          </span>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-amber-900">
            Your business deserves a website that
            <span className="text-amber-600"> actually helps.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600">
            I build websites and web applications for businesses that want
            to look professional, work more efficiently, and give their
            customers a better experience.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              to="/bookacall"
              className="rounded-xl bg-amber-700 px-8 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-amber-800 hover:shadow-lg"
            >
              Let's Talk About Your Project
            </Link>

            <Link
              to="/portfolio"
              className="rounded-xl border border-amber-700 px-8 py-3 text-sm font-medium text-amber-700 transition hover:bg-amber-100"
            >
              See My Work
            </Link>

          </div>
        </div>
      </section>

      {/* What I Can Help With */}
      <section className="border-y border-amber-100 bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">

          <div className="mb-10 text-center">

            <h2 className="mb-3 text-3xl font-bold text-amber-900">
              Build. Improve. Secure.
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
              Whether you need something new, want to improve an existing
              system, or need security considered as part of your web
              application, we can start with the problem and work from there.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Build",
                desc: "Business websites, landing pages, custom web applications and e-commerce platforms built around what your business actually needs.",
              },
              {
                number: "02",
                title: "Improve",
                desc: "Custom dashboards, internal tools and business workflows that reduce repetitive work and make existing processes easier to manage.",
              },
              {
                number: "03",
                title: "Secure",
                desc: "Security-focused web development with attention to authentication, authorization, protected APIs and common application security risks.",
              },
            ].map((item) => (
              <Link
                key={item.number}
                to="/services"
                className="group rounded-2xl border border-amber-100 bg-amber-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-200 hover:shadow-md"
              >

                <div className="mb-5 flex items-center justify-between">

                  <span className="text-3xl font-bold text-amber-200">
                    {item.number}
                  </span>

                  <span className="text-sm text-amber-600 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>

                </div>

                <h3 className="mb-3 text-xl font-semibold text-amber-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {item.desc}
                </p>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-amber-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <h2 className="mb-4 text-3xl font-bold text-amber-900">
              Maybe your current setup is making things harder than they need to be.
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
              You don't always need a complicated solution. Sometimes you just
              need the right one.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {[
              {
                title: "You don't have a proper website",
                desc: "People hear about your business, search for you online, and can't find enough information to trust you.",
              },
              {
                title: "You're doing too much manually",
                desc: "Spreadsheets, copy-pasting and repetitive tasks are taking up time that could be spent on the business.",
              },
              {
                title: "Your current website feels outdated",
                desc: "Your business has grown, but your website still looks and works like it did years ago.",
              },
              {
                title: "Your web application needs better protection",
                desc: "When an application handles customer accounts, business data or different user roles, security needs to be considered as part of the build.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
              >

                <h3 className="mb-2 font-semibold text-amber-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Built Around Your Business */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <h2 className="mb-4 text-3xl font-bold text-amber-900">
              Built around your business.
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
              Your business doesn't have to change the way it works just to
              fit a piece of software. I build practical web solutions around
              the problem you're actually trying to solve.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">

              <h3 className="mb-3 font-semibold text-amber-900">
                Business Websites
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                Professional websites that explain your business clearly,
                build trust and make it easy for customers to contact you.
              </p>

            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">

              <h3 className="mb-3 font-semibold text-amber-900">
                Business Applications
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                Dashboards, CRM systems, internal tools and custom applications
                that help reduce manual work and organize your operations.
              </p>

            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">

              <h3 className="mb-3 font-semibold text-amber-900">
                Secure Web Solutions
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                Web applications developed with authentication, user
                permissions and protected APIs considered from the beginning.
              </p>

            </div>

          </div>

          <div className="mt-8 text-center">

            <Link
              to="/services"
              className="text-sm font-semibold text-amber-700 transition hover:text-amber-900"
            >
              Explore my services →
            </Link>

          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="bg-amber-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <h2 className="mb-4 text-3xl font-bold text-amber-900">
              A few things I've built
            </h2>

            <p className="text-sm text-gray-500">
              Real projects built while developing my full-stack experience.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {[
              {
                name: "BrewDesk",
                type: "CRM Dashboard",
                desc: "A full-stack CRM built to manage customers, search and filter records, and keep everything in one place.",
              },
              {
                name: "BrewBill",
                type: "Invoice Generator",
                desc: "A full-stack invoicing application for creating invoices, managing clients and generating professional PDFs.",
              },
              {
                name: "BrewCast",
                type: "Email Campaign Platform",
                desc: "An email campaign and automation platform for creating, managing and sending email campaigns.",
              },
              {
                name: "Business Websites",
                type: "Web Development",
                desc: "Clean and responsive websites designed to help businesses present their services and make it easier for customers to connect.",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
              >

                <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  {project.type}
                </span>

                <h3 className="mb-3 text-lg font-bold text-amber-900">
                  {project.name}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {project.desc}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-8 text-center">

            <Link
              to="/portfolio"
              className="text-sm font-semibold text-amber-700 transition hover:text-amber-900"
            >
              View all projects →
            </Link>

          </div>

        </div>
      </section>

      {/* How I Work */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="mb-4 text-3xl font-bold text-amber-900">
            How I work
          </h2>

          <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-gray-500">
            Nothing complicated. We talk about what you need, agree on the
            work, and build it step by step.
          </p>

          <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-4">

            {[
              {
                step: "01",
                title: "Talk",
                desc: "We discuss your business, your idea and what you actually need.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "We agree on the features, timeline and cost before I start.",
              },
              {
                step: "03",
                title: "Build",
                desc: "I build the project in stages and keep you updated along the way.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Once everything is ready, we launch and I help with the next steps.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-2xl border border-amber-100 bg-amber-50 p-6"
              >

                <div className="mb-3 text-3xl font-bold text-amber-200">
                  {step.step}
                </div>

                <h3 className="mb-2 text-sm font-semibold text-amber-900">
                  {step.title}
                </h3>

                <p className="text-xs leading-relaxed text-gray-500">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="bg-amber-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mb-4 text-3xl font-bold text-amber-900">
            Why Code & Coffee?
          </h2>

          <p className="mb-6 text-sm leading-7 text-gray-600">
            Before becoming a developer, I spent 3.5 years in sales.
            That experience changed the way I look at websites and software.
            I don't just think about how something works technically.
            I also think about the person who will actually use it and
            the business behind it.
          </p>

          <p className="text-sm leading-7 text-gray-600">
            Code & Coffee brings both sides together: understanding the
            problem, building a practical solution, and keeping the process
            simple and honest.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">

          <h2 className="mb-4 text-3xl font-bold">
            Have a problem you want to solve?
          </h2>

          <p className="mb-8 text-sm leading-relaxed text-amber-100">
            Tell me what you're trying to build, improve or secure. We can
            have a quick conversation and figure out the right approach.
          </p>

          <Link
            to="/bookacall"
            className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-amber-700 transition hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-lg"
          >
            Let's Talk
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 px-6 py-8 text-center">
        <p className="text-sm text-amber-200">
          © 2026 Code and Coffee · Built by Sivasankaran
        </p>
      </footer>

    </div>
  );
}
