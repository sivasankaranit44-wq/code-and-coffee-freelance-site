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
            Stop losing customers to businesses with <span className="text-amber-600">better websites.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            I build custom web applications and websites that solve real business problems — not just look good. If your current tools are slowing you down or your competitors are winning online, let's fix that.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/bookacall"
              className="bg-amber-700 hover:bg-amber-800 text-white font-medium px-8 py-3 rounded-xl text-sm transition"
            >
              Schedule a Free Audit →
            </Link>
            <Link
              to="/portfolio"
              className="border border-amber-700 text-amber-700 hover:bg-amber-100 font-medium px-8 py-3 rounded-xl text-sm transition"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Value Bar */}
      <section className="py-10 px-6 bg-white border-y border-amber-100">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "⚡",
              title: "Faster Execution",
              desc: "Eliminate manual work and slow processes with custom built automation.",
            },
            {
              icon: "📈",
              title: "Measurable Results",
              desc: "Every feature built has a clear business goal — not just a technical checkbox.",
            },
            {
              icon: "🔒",
              title: "Built to Scale",
              desc: "Clean, secure, maintainable code that grows with your business.",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-semibold text-amber-900 text-sm">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Is your business being held back by the wrong tools?
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Most growing businesses hit a wall when their off-the-shelf tools and spreadsheets can no longer keep up. Does any of this sound familiar?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "😓",
                title: "Drowning in Manual Work",
                desc: "Your team spends hours on repetitive tasks — copy pasting data, sending manual follow ups, managing spreadsheets — instead of focusing on what actually grows the business.",
              },
              {
                icon: "📦",
                title: "Outgrown Your Current Tools",
                desc: "The platforms you started with no longer fit how your business actually works. You're paying for features you don't need and missing the ones you do.",
              },
              {
                icon: "🌐",
                title: "Invisible Online",
                desc: "Someone hears about your business, Googles you, and finds nothing — or worse, a outdated website that makes them question your credibility.",
              },
              {
                icon: "📊",
                title: "No Visibility into What's Working",
                desc: "Key business data is scattered across different tools. You're making decisions based on gut feeling because you can't see what's actually happening.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold text-amber-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            What you get when you work with me
          </h2>
          <p className="text-gray-500 text-sm mb-12 max-w-xl mx-auto">
            I don't just write code. I build solutions that solve the exact problem your business is facing right now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                icon: "🌐",
                title: "Business Websites & Landing Pages",
                problem: "No online presence or an outdated website losing you credibility.",
                outcome: "A clean, fast, mobile-ready website that converts visitors into customers.",
              },
              {
                icon: "⚙️",
                title: "Custom Web Applications",
                problem: "Off-the-shelf software doesn't fit your exact workflow.",
                outcome: "A bespoke web app built around how your business actually operates.",
              },
              {
                icon: "🔗",
                title: "Full Stack MERN Development",
                problem: "You need a complete product — frontend, backend, and database.",
                outcome: "End to end development from the UI your users see to the database that powers it.",
              },
              {
                icon: "🛒",
                title: "E-commerce Platforms",
                problem: "Generic platforms limiting your store's potential and charging high fees.",
                outcome: "A custom online store built around your products, your brand, your rules.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-amber-50 rounded-2xl p-6 border border-amber-100"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-amber-900 mb-3">{service.title}</h3>
                <div className="space-y-2">
                  <p className="text-xs text-red-500 font-medium">
                    The Problem: <span className="text-gray-500 font-normal">{service.problem}</span>
                  </p>
                  <p className="text-xs text-green-600 font-medium">
                    The Outcome: <span className="text-gray-500 font-normal">{service.outcome}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Proof of what gets built
            </h2>
            <p className="text-gray-500 text-sm">
              Real projects. Real problems solved. Real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Brewdesk — CRM Dashboard",
                challenge: "Businesses managing customers through spreadsheets and scattered notes, losing track of leads and follow ups.",
                solution: "Built a full stack CRM dashboard with real-time search, advanced filtering, drag and drop reordering, and complete customer management.",
                outcome: "All customer data in one place. Zero missed follow ups. Full visibility into every lead.",
                tag: "Full Stack MERN",
              },
              {
                name: "Brew Invoice — Invoice Generator",
                challenge: "Freelancers and small businesses creating invoices manually in Word or Excel, wasting hours and looking unprofessional.",
                solution: "Built a full stack invoicing platform with PDF generation, automated email delivery, client management, and payment status tracking.",
                outcome: "Invoices sent in minutes. Professional PDF attached automatically. Complete financial visibility.",
                tag: "Full Stack MERN",
              },
              {
                name: "Business Website",
                challenge: "A business with no online presence losing potential customers to competitors who show up on Google.",
                solution: "A clean, fast, mobile responsive website with clear messaging, service pages, and a contact form that actually converts.",
                outcome: "Credible online presence. More inquiries. Customers who find you before they find your competitor.",
                tag: "Web Development",
              },
              {
                name: "Custom Web Application",
                challenge: "A growing business stuck using generic SaaS tools that don't fit their exact workflow, paying for features they don't need.",
                solution: "A bespoke web application built around their specific operations — their process, their data, their rules.",
                outcome: "Eliminated the workarounds. Reduced manual work. A tool that actually fits how the business runs.",
                tag: "Custom Software",
              },
            ].map((study, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm"
              >
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {study.tag}
                </span>
                <h3 className="font-bold text-amber-900 mb-4">{study.name}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-red-500 mb-1">The Challenge</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700 mb-1">The Solution</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-600 mb-1">The Outcome</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            How I work
          </h2>
          <p className="text-gray-500 text-sm mb-12 max-w-xl mx-auto">
            No hidden costs. No technical jargon. No radio silence. Just clear, honest progress from start to finish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We talk about your business, your current pain points, and what success actually looks like for you.",
              },
              {
                step: "02",
                title: "Clear Scope",
                desc: "You get a clear breakdown of what will be built, how long it takes, and what it costs. No surprises.",
              },
              {
                step: "03",
                title: "Build & Show",
                desc: "I build in stages and show you progress regularly so you're never left wondering what's happening.",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "Your product goes live. I hand over everything and stay available for questions and future updates.",
              },
            ].map((step, i) => (
              <div key={i} className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <div className="text-3xl font-bold text-amber-200 mb-3">{step.step}</div>
                <h3 className="font-semibold text-amber-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Why work with me?
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            I'm not your average developer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                title: "Business First",
                desc: "I spent 3.5 years in sales before becoming a developer. I understand what clients actually need — not just what they ask for.",
              },
              {
                icon: "🎯",
                title: "Zero Jargon",
                desc: "You'll always get plain English updates. No technical confusion. You'll always know exactly where things stand.",
              },
              {
                icon: "⚡",
                title: "Reliable Delivery",
                desc: "I respect your time and your deadlines. If something changes, you hear it from me first — not after it's already a problem.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-amber-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-amber-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to stop losing business to better websites?
          </h2>
          <p className="text-amber-100 text-sm mb-3">
            Let's have a free 15 minute call. No sales pitch. Just an honest conversation about your business and whether I can actually help.
          </p>
          <p className="text-amber-200 text-xs mb-8">
            If I can't help — I'll tell you that too.
          </p>
          <Link
            to="/bookacall"
            className="inline-block bg-white text-amber-700 font-semibold px-8 py-3 rounded-xl text-sm hover:bg-amber-50 transition"
          >
            Schedule a Free Audit →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-amber-900 text-center">
        <p className="text-amber-200 text-sm">
          © 2026 Code and Coffee — Built by Sivasankaran
        </p>
      </footer>

    </div>
  );
}