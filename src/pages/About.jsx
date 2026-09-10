import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f1e9] text-[#3f2b22]">

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">

          <span className="mb-6 inline-block rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 shadow-sm backdrop-blur-md">
            Code & Coffee
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-amber-950 sm:text-5xl">
            Simple solutions for real business problems.
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-500">
            I build websites and web applications that help businesses work
            better, serve customers more effectively, and grow online. I also
            bring security-focused development practices into the applications
            I build.
          </p>

        </div>
      </section>


      {/* What I Help With */}
      <section className="relative border-y border-white/70 bg-white/25 px-6 py-20 backdrop-blur-sm">

        <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <h2 className="mb-4 text-2xl font-bold text-amber-950">
              What can be improved?
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
              Every business has different problems. The right website or
              application should fit the way you work, not the other way around.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {[
              {
                title: "Need a better online presence?",
                desc: "I build clean, responsive websites that clearly explain what you offer and make it easy for people to contact you.",
              },
              {
                title: "Too much work is still manual?",
                desc: "A custom web application can bring repetitive tasks, customer data and everyday workflows into one place.",
              },
              {
                title: "Your current tools don't fit?",
                desc: "Instead of changing your process to match a generic tool, I can build something around the way your business actually works.",
              },
              {
                title: "Worried about security?",
                desc: "Web applications handle customer data, accounts and business operations. I build with authentication, authorization and protected APIs in mind from the start.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-2xl border border-white/80 bg-white/50 p-6 shadow-[0_8px_30px_rgba(91,55,35,0.05)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/65 hover:shadow-[0_14px_35px_rgba(91,55,35,0.09)]"
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

        </div>
      </section>


      {/* What I Build */}
      <section className="relative px-6 py-20">

        <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <h2 className="mb-4 text-2xl font-bold text-amber-950">
              What I can build for you
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
              From a simple business website to a complete web application,
              the goal is always the same: build something useful, reliable
              and appropriate for your business.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {[
              {
                title: "Business Websites",
                desc: "A professional website that explains your services, shows your work and gives potential customers a simple way to reach you.",
              },
              {
                title: "Landing Pages",
                desc: "Focused pages for products, services, events or campaigns where the message and next step need to be clear.",
              },
              {
                title: "Custom Web Applications",
                desc: "Dashboards, CRM systems, internal tools and other applications built around your specific business needs.",
              },
              {
                title: "E-commerce Websites",
                desc: "Online stores that make it easier for customers to browse your products, place orders and interact with your business.",
              },
              {
                title: "Security-Focused Web Applications",
                desc: "Web applications developed with security considered from the beginning, including authentication, authorization, protected APIs and safer handling of application data.",
              },
              {
                title: "API & Backend Solutions",
                desc: "Structured REST APIs and backend systems that connect your application to databases, business logic and secure user access.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className={`rounded-2xl border bg-white/50 p-6 shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/65 hover:shadow-[0_16px_40px_rgba(91,55,35,0.1)] ${
                  item.title === "Security-Focused Web Applications"
                    ? "border-amber-300/80"
                    : "border-white/80"
                }`}
              >

                {item.title === "Security-Focused Web Applications" && (
                  <span className="mb-4 inline-block rounded-full border border-amber-200/70 bg-amber-100/60 px-3 py-1 text-xs font-semibold text-amber-700">
                    Security Focus
                  </span>
                )}

                <h3 className="mb-3 font-semibold text-amber-950">
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


      {/* Security */}
      <section className="relative border-y border-white/70 bg-white/25 px-6 py-20 backdrop-blur-sm">

        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <span className="mb-4 inline-block rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 shadow-sm backdrop-blur-md">
              Web Security
            </span>

            <h2 className="mb-4 text-2xl font-bold text-amber-950">
              Build for your users. Protect what matters.
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500">
              Security is part of how I approach web application development,
              especially when an application handles user accounts, business
              data or different levels of access. My focus is on practical
              security measures that belong in the development process.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {[
              {
                title: "Authentication",
                desc: "Secure login and protected user access using established authentication practices.",
              },
              {
                title: "Authorization",
                desc: "Role-based permissions that help ensure users can access only the features and data they are allowed to use.",
              },
              {
                title: "API Security",
                desc: "Protected routes and security-aware API practices to reduce unauthorized access and common application risks.",
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


          <div className="mt-10 text-center">

            <p className="text-sm text-gray-500">
              Need a web solution where security is considered from the start?
            </p>

            <Link
              to="/bookacall"
              className="mt-4 inline-block text-sm font-semibold text-amber-700 transition hover:text-amber-950"
            >
              Let's discuss your project →
            </Link>

          </div>

        </div>
      </section>


      {/* How I Approach Projects */}
      <section className="relative px-6 py-20">

        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <h2 className="mb-4 text-2xl font-bold text-amber-950">
              The way I approach a project
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
              Before thinking about code, I want to understand what you are
              actually trying to solve.
            </p>

          </div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

            {[
              {
                step: "01",
                title: "Understand",
                desc: "We talk about your business, your current setup and the problem you want to solve.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "We decide what actually needs to be built, what can wait and what makes sense for your budget.",
              },
              {
                step: "03",
                title: "Build",
                desc: "I build the solution step by step and share progress so you know what's happening.",
              },
              {
                step: "04",
                title: "Improve",
                desc: "After launch, we look at what works, what needs changing and what can be added later.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-2xl border border-white/80 bg-white/45 p-6 shadow-[0_8px_30px_rgba(91,55,35,0.05)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60"
              >

                <div className="mb-3 text-3xl font-bold text-amber-300/80">
                  {item.step}
                </div>

                <h3 className="mb-2 text-sm font-semibold text-amber-950">
                  {item.title}
                </h3>

                <p className="text-xs leading-relaxed text-gray-500">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* Why This Approach */}
      <section className="relative border-y border-white/70 bg-white/25 px-6 py-20 backdrop-blur-sm">

        <div className="relative mx-auto max-w-3xl text-center">

          <h2 className="mb-6 text-2xl font-bold text-amber-950">
            More than just writing code
          </h2>

          <p className="mb-5 text-sm leading-7 text-gray-600">
            I spent 3.5 years working in sales before moving into web
            development. That experience taught me something useful:
            understanding the problem is just as important as building the
            solution.
          </p>

          <p className="mb-5 text-sm leading-7 text-gray-600">
            So when we work together, you don't need to explain everything in
            technical terms. Tell me what isn't working, what takes too much
            time, what your customers need, or what you want to build.
          </p>

          <p className="text-sm leading-7 text-gray-600">
            I'll help figure out what can be built, how it can be improved,
            and where security needs to be considered along the way.
          </p>

        </div>
      </section>


      {/* Tech */}
      <section className="relative px-6 py-20">

        <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">

          <div className="mb-10 text-center">

            <h2 className="mb-3 text-2xl font-bold text-amber-950">
              What I work with
            </h2>

            <p className="text-sm text-gray-500">
              The technologies and development practices I use to build web
              solutions.
            </p>

          </div>


          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JavaScript",
              "Tailwind CSS",
              "HTML & CSS",
              "REST APIs",
              "JWT Authentication",
              "RBAC",
              "API Security",
              "Git & GitHub",
              "Vercel",
              "Render",
            ].map((skill, i) => (

              <div
                key={i}
                className={`rounded-xl border px-4 py-3 text-center text-sm font-medium shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 ${
                  [
                    "JWT Authentication",
                    "RBAC",
                    "API Security",
                  ].includes(skill)
                    ? "border-amber-300/80 bg-white/60 text-amber-900"
                    : "border-white/80 bg-white/45 text-amber-900"
                }`}
              >
                {skill}
              </div>

            ))}

          </div>

        </div>
      </section>


      {/* Current Work */}
      <section className="relative border-y border-white/70 bg-white/25 px-6 py-20 backdrop-blur-sm">

        <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">

          <div className="mb-10 text-center">

            <h2 className="mb-3 text-2xl font-bold text-amber-950">
              What I'm working on
            </h2>

            <p className="text-sm text-gray-500">
              A few things I'm building and exploring right now.
            </p>

          </div>


          <div className="space-y-4">

            {[
              {
                title: "Code & Coffee",
                text: "Building my freelance web development practice and working with businesses on websites and web applications.",
              },
              {
                title: "BrewCast",
                text: "Building an email campaign and automation platform as part of my full-stack project work.",
              },
              {
                title: "Claira",
                text: "Building a portfolio-focused project to help freshers and career switchers improve how they present their work.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-2xl border border-white/80 bg-white/45 p-5 shadow-[0_8px_30px_rgba(91,55,35,0.05)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60"
              >

                <h3 className="mb-2 font-semibold text-amber-950">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* CTA */}
<section className="relative overflow-hidden bg-[#a97852] px-6 py-20 text-center text-white">

  <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#e5c2a5]/20 blur-3xl" />

  <div className="relative mx-auto max-w-2xl">


<h2 className="mb-4 text-3xl font-bold">
  Have a problem you want to solve?
</h2>

<p className="mb-8 text-sm leading-relaxed text-[#f5e9df]">
  Tell me what you're trying to build, improve or secure. We can
  have a simple conversation and figure out the right approach.
</p>

<Link
  to="/bookacall"
  className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-[#8f6345] shadow-lg shadow-[#6f4a35]/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f7f1e9] hover:shadow-xl"
>
  Let's Talk
</Link>


  </div>
</section>



      {/* Footer */}
      <footer className="border-t border-[#d8c7b8]/50 bg-[#f3ebe2] px-6 py-7 text-center">

<p className="text-sm text-[#8f6345]"> © 2026 Code and Coffee · Built by Sivasankaran </p>

</footer>

    </div>
  );
}
