import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Available for Freelance Work
          </span>
          <h1 className="text-5xl font-bold text-amber-900 leading-tight mb-6">
            I build websites that <span className="text-amber-600">work</span> and look good doing it.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Hi, I'm Sivasankaran, a Full Stack Developer based in Tamilnadu. I help businesses and individuals build clean, fast, and responsive web applications from scratch.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="bg-amber-700 hover:bg-amber-800 text-white font-medium px-8 py-3 rounded-xl text-sm transition"
            >
              View My Work
            </Link>
            <Link
              to="/book-a-call"
              className="border border-amber-700 text-amber-700 hover:bg-amber-50 font-medium px-8 py-3 rounded-xl text-sm transition"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            What I Do
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            From a simple landing page to a full stack web application I build it all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                icon: "🚀",
                title: "Landing Pages",
                desc: "High converting, fully responsive landing pages that make your first impression count.",
              },
              {
                icon: "🎨",
                title: "Portfolio Websites",
                desc: "Clean, professional portfolios that showcase your work and get you noticed.",
              },
              {
                icon: "⚙️",
                title: "React Web Apps",
                desc: "Functional, interactive web applications built with React for your specific business need.",
              },
              {
                icon: "🔗",
                title: "Full Stack Development",
                desc: "End to end development — from the UI the user sees to the database that powers it.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-amber-50 rounded-2xl p-6 border border-amber-100"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-amber-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Why Work With Me?
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            Not just a developer also someone who understands your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                title: "Communication First",
                desc: "You'll always know what's happening. No radio silence, no surprises.",
              },
              {
                icon: "⚡",
                title: "Fast Delivery",
                desc: "I respect your time and deadlines. Always.",
              },
              {
                icon: "🎯",
                title: "Business Minded",
                desc: "3.5 years in sales taught me to think from the user's perspective first before writing a single line of code.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-amber-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-amber-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-amber-100 text-sm mb-8">
            Let's have a quick 15 minute call and figure out if we're a good fit.
          </p>
          <Link
            to="/bookacall"
            className="inline-block bg-white text-amber-700 font-semibold px-8 py-3 rounded-xl text-sm hover:bg-amber-50 transition"
          >
            Book a Free Call →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-amber-900 text-center">
        <p className="text-amber-200 text-sm">
          © 2026 CodeandCoffee - Built by Sivasankaran
        </p>
      </footer>

    </div>
  );
}