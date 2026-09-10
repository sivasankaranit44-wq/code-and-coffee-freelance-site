import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f1e9]">

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-24">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">

          <span className="mb-6 inline-block rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 shadow-sm backdrop-blur-md">
            Freelance Web Developer
          </span>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-amber-950">
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
              className="rounded-xl bg-amber-700 px-8 py-3 text-sm font-medium text-white shadow-md shadow-amber-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-800 hover:shadow-lg"
            >
              Let's Talk About Your Project
            </Link>

            <Link
              to="/portfolio"
              className="rounded-xl border border-amber-700/70 bg-white/35 px-8 py-3 text-sm font-medium text-amber-800 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/60"
            >
              See My Work
            </Link>

          </div>
        </div>
      </section>


      {/* Build Improve Secure */}
      <section className="relative border-y border-white/70 bg-white/25 px-6 py-20 backdrop-blur-sm">

        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <div className="mb-10 text-center">

            <h2 className="mb-3 text-3xl font-bold text-amber-950">
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
                className="group rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.07)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_16px_40px_rgba(91,55,35,0.11)]"
              >

                <div className="mb-5 flex items-center justify-between">

                  <span className="text-3xl font-bold text-amber-300/80">
                    {item.number}
                  </span>

                  <span className="text-sm text-amber-600 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>

                </div>

                <h3 className="mb-3 text-xl font-semibold text-amber-950">
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
      <section className="relative px-6 py-20">

        <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <h2 className="mb-4 text-3xl font-bold text-amber-950">
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
                className="rounded-2xl border border-white/80 bg-white/50 p-6 shadow-[0_8px_30px_rgba(91,55,35,0.05)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/65"
              >

                <h3 className="mb-2 font-semibold text-amber-950">
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
      <section className="relative border-y border-white/70 bg-white/25 px-6 py-20 backdrop-blur-sm">

        <div className="relative mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <h2 className="mb-4 text-3xl font-bold text-amber-950">
              Built around your business.
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
              Your business doesn't have to change the way it works just to
              fit a piece of software. I build practical web solutions around
              the problem you're actually trying to solve.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {[
              {
                title: "Business Websites",
                desc: "Professional websites that explain your business clearly, build trust and make it easy for customers to contact you.",
              },
              {
                title: "Business Applications",
                desc: "Dashboards, CRM systems, internal tools and custom applications that help reduce manual work and organize your operations.",
              },
              {
                title: "Secure Web Solutions",
                desc: "Web applications developed with authentication, user permissions and protected APIs considered from the beginning.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60"
              >

                <h3 className="mb-3 font-semibold text-amber-950">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-8 text-center">

            <Link
              to="/services"
              className="text-sm font-semibold text-amber-700 transition hover:text-amber-950"
            >
              Explore my services →
            </Link>

          </div>

        </div>
      </section>


      {/* Projects */}
      <section className="relative px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <h2 className="mb-4 text-3xl font-bold text-amber-950">
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
                className="rounded-2xl border border-white/80 bg-white/50 p-6 shadow-[0_8px_30px_rgba(91,55,35,0.05)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/65"
              >

                <span className="mb-3 inline-block rounded-full border border-amber-100 bg-amber-100/60 px-3 py-1 text-xs font-semibold text-amber-700">
                  {project.type}
                </span>

                <h3 className="mb-3 text-lg font-bold text-amber-950">
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
              className="text-sm font-semibold text-amber-700 transition hover:text-amber-950"
            >
              View all projects →
            </Link>

          </div>

        </div>
      </section>


      {/* How I Work */}
      <section className="relative border-y border-white/70 bg-white/25 px-6 py-20 backdrop-blur-sm">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="mb-4 text-3xl font-bold text-amber-950">
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
                className="rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_8px_30px_rgba(91,55,35,0.05)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60"
              >

                <div className="mb-3 text-3xl font-bold text-amber-300/80">
                  {step.step}
                </div>

                <h3 className="mb-2 text-sm font-semibold text-amber-950">
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
      <section className="relative px-6 py-20">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mb-4 text-3xl font-bold text-amber-950">
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
      <section className="relative overflow-hidden bg-amber-700 px-6 py-20 text-center text-white">

        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">

          <h2 className="mb-4 text-3xl font-bold">
            Have a problem you want to solve?
          </h2>

          <p className="mb-8 text-sm leading-relaxed text-amber-100">
            Tell me what you're trying to build, improve or secure. We can
            have a quick conversation and figure out the right approach.
          </p>

          <Link
            to="/bookacall"
            className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-amber-700 shadow-lg shadow-amber-950/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-xl"
          >
            Let's Talk
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
