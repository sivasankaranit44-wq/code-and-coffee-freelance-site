import { InlineWidget } from "react-calendly";

export default function BookACall() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f1e9] text-[#3f2b22]">

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-14">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">

          <span className="mb-6 inline-block rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 shadow-sm backdrop-blur-md">
            Book a Call
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-amber-950 sm:text-5xl">
            Let's talk about your project.
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
            No lengthy emails. No back and forth. Just a quick 30 minute call
            to understand what you need and whether I am the right fit to
            build it.
          </p>

        </div>
      </section>


      {/* What to expect */}
      <section className="relative px-6 py-10 pb-16">

        <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">

          <div className="mb-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-amber-950">
              What happens in the call?
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
              A simple conversation to understand the problem, the idea, and
              what the next step could look like.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {[
              {
                step: "01",
                title: "You share your idea",
                desc: "Tell me what you want to build, what problem it solves, and who it is for.",
              },
              {
                step: "02",
                title: "We figure out the fit",
                desc: "I'll be honest about whether I can deliver what you need and in what timeline.",
              },
              {
                step: "03",
                title: "We decide next steps",
                desc: "If we are a good fit, we move forward. Simple, no pressure, no commitment needed.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/80 bg-white/45 p-6 text-center shadow-[0_10px_35px_rgba(91,55,35,0.06)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_16px_40px_rgba(91,55,35,0.09)]"
              >

                <div className="mb-4 text-3xl font-bold text-amber-300/80">
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


      {/* Calendly Section */}
      <section className="relative px-6 py-10 pb-20">

        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <div className="overflow-hidden rounded-2xl border border-white/80 bg-white/50 shadow-[0_12px_40px_rgba(91,55,35,0.08)] backdrop-blur-lg">

            {/* Calendly Header */}
            <div className="border-b border-white/70 px-6 py-8 text-center sm:px-8">
            
              <h2 className="mb-3 text-2xl font-bold text-amber-950">
                Pick a time that works for you.
              </h2>

              <p className="text-sm text-gray-500">
                Choose a convenient time and let's talk about your project.
              </p>

            </div>


            {/* Calendly Inline Widget */}
            <div className="w-full bg-white/30">

              <InlineWidget
                url="https://calendly.com/d/dtgd-ztb-mkb"
                styles={{
                  height: "700px",
                  minWidth: "320px",
                }}
              />

            </div>


            {/* Email */}
            <div className="border-t border-white/70 px-6 py-8 text-center">

              <p className="text-xs text-gray-400">
                Prefer email instead?{" "}

                <a
                  href="mailto:sivasankaranit44@gmail.com"
                  className="font-medium text-amber-700 transition hover:text-amber-950 hover:underline"
                >
                  sivasankaranit44@gmail.com
                </a>

              </p>

            </div>

          </div>

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
