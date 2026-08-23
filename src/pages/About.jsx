import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50">

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            About Me
          </span>
          <h1 className="text-4xl font-bold text-amber-900 leading-tight mb-6">
            The person behind the code.
          </h1>
        </div>
      </section>

 {/* Story */}
<section className="py-10 px-6 bg-white">
  <div className="max-w-3xl mx-auto">
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      I'm Sivasankaran. A Full Stack Developer based in Trichy,Tamil Nadu, India.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      But I wasn't always someone who built things.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      I'm an MBA graduate. Not a computer science engineer. Not someone who grew up dreaming about code. Growing up, through school, through my MBA, I was the quiet one. The introvert sitting in the corner, observing, never the first to speak.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      Then I got my first sales job.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      I still remember the early days. Sitting across from clients who spoke fluent English, confident and polished, while I struggled to form a sentence. I couldn't understand them properly. I couldn't respond the way I wanted to. I Still remember the day I closed my Laptop and just broke down.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      That was the moment.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      I told myself <span className="font-semibold text-amber-700">"I can't be like this anymore. If I'm good, I'll sustain. If I'm not, this profession will kick me out itself."</span>
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      So I chose to get good.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      Over 3.5 years across EdTech and E-commerce, I didn't just learn how to sell. I learned how to listen. How to understand what people actually need, not just what they say they want. I'd sit with clients who'd point at a screen and say "your website has this problem" or "the admin dashboard is missing this feature" and instead of brushing it off, I'd think <span className="font-semibold text-amber-700">why can't someone just fix this?</span>
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      That question kept coming back.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      I was planning to move into SaaS sales but somewhere along the way I got introduced to coding and cybersecurity. Something clicked. I pursued it seriously, completed a cybersecurity internship at a product based company in Chennai, and kept building.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      Today I am not just a developer who learned to code. I am someone who spent years understanding what users actually struggle with and now I build solutions for exactly those problems.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      The introvert who couldn't speak became the salesperson. The salesperson who couldn't stop asking "why can't this be fixed?" became the developer.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed">
      Sales gave me the people skills. Code gave me the tools. <span className="font-semibold text-amber-700">Code and Coffee</span> is where both come together.
    </p>
  </div>
</section>

      {/* Skills */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-900 mb-10 text-center">
            What I work with
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JavaScript",
              "Tailwind CSS",
              "HTML & CSS",
              "Git & GitHub",
              "REST APIs",
              "Vercel",
              "Render",
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-white border border-amber-100 rounded-xl px-4 py-3 text-sm font-medium text-amber-900 text-center shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">
            What I'm currently doing
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: "🤖",
                text: "Building Claira - an AI portfolio catalyst for freshers and career switchers",
              },
              
              {
                icon: "☕",
                text: "Growing Code & Coffee - my freelance stuff",
              },
              {
                icon: "📩",
                text: "Open to freelance projects",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-amber-50 border border-amber-100 rounded-xl p-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-amber-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Let's build something together.
          </h2>
          <p className="text-amber-100 text-sm mb-8">
            If you have a project in mind  big or small - I'd love to hear about it.
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