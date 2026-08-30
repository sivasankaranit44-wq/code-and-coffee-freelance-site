import { InlineWidget } from "react-calendly";

export default function BookACall() {
  return (
    <div className="min-h-screen bg-amber-50">

      {/* Hero */}
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Book a Call
          </span>

          <h1 className="text-4xl font-bold text-amber-900 leading-tight mb-4">
            Let's talk about your project.
          </h1>

          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            No lengthy emails. No back and forth. Just a quick 30 minute call
            to understand what you need and whether I am the right fit to
            build it.
          </p>

        </div>
      </section>


      {/* What to expect */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">
            What happens in the call?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

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
                className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 text-center"
              >

                <div className="text-3xl font-bold text-amber-200 mb-3">
                  {item.step}
                </div>

                <h3 className="font-semibold text-amber-900 mb-2 text-sm">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Calendly Section */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">

            {/* Calendly Header */}
            <div className="p-8 text-center">

              <div className="text-4xl mb-4">
                ☕
              </div>

              <h2 className="text-2xl font-bold text-amber-900 mb-3">
                Pick a time that works for you.
              </h2>

              <p className="text-gray-500 text-sm">
                Choose a convenient time and let's talk about your project.
              </p>

            </div>


            {/* Calendly Inline Widget */}
            <div className="w-full">

              <InlineWidget
                url="https://calendly.com/d/dtgd-ztb-mkb"
                styles={{
                  height: "700px",
                  minWidth: "320px",
                }}
              />

            </div>


            {/* Email */}
            <div className="text-center p-8">

              <p className="text-gray-400 text-xs">
                Prefer email instead?{" "}

                <a
                  href="mailto:sivasankaranit44@gmail.com"
                  className="text-amber-700 font-medium hover:underline"
                >
                  sivasankaranit44@gmail.com
                </a>

              </p>

            </div>

          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 px-6 bg-amber-900 text-center mt-20">

        <p className="text-amber-200 text-sm">
          2026 Code and Coffee. Built by Sivasankaran
        </p>

      </footer>

    </div>
  );
}
