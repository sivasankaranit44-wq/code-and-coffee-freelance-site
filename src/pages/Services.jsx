import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: "🚀",
      title: "Landing Page",
      desc: "A high converting, fully responsive landing page that makes your first impression count. Perfect for businesses, startups, and product launches.",
      features: [
        "Custom design",
        "Mobile responsive",
        "Contact form integration",
        "Deployed and ready to go",
      ],
    },
    {
      icon: "🎨",
      title: "Portfolio Website",
      desc: "A clean, professional portfolio that showcases your work and gets you noticed by the right people.",
      features: [
        "Up to 5 pages",
        "Project showcase section",
        "Contact form",
        "Deployed on Vercel",
      ],
    },
    {
      icon: "⚛️",
      title: "React Web App",
      desc: "A functional, interactive web application built with React for your specific business need. Fast, clean, and scalable.",
      features: [
        "Custom React components",
        "API integration",
        "State management",
        "Full deployment",
      ],
    },
    {
      icon: "🔗",
      title: "REST API Development",
      desc: "A clean, secure, and well structured backend API built with Node.js and Express to power your frontend or mobile app.",
      features: [
        "Node.js and Express setup",
        "MongoDB database design",
        "JWT authentication",
        "API documentation",
      ],
    },
    {
      icon: "⚙️",
      title: "Full Stack MERN App",
      desc: "End to end development from the UI the user sees to the database that powers it. Complete product built from scratch.",
      features: [
        "React frontend",
        "Node.js and Express backend",
        "MongoDB database",
        "Authentication and deployment",
      ],
    },
    {
      icon: "🛒",
      title: "E-commerce Platform",
      desc: "A complete online store for your business with product listings, cart, and payment gateway integration.",
      features: [
        "Product listing and categories",
        "Shopping cart",
        "Payment gateway integration",
        "Order management",
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
            What I can build for you.
          </h1>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            From a simple landing page to a complete full stack application. Every project gets the same attention with clean code, fast delivery, and honest communication.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-amber-600 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/bookacall"
                className="block text-center bg-amber-700 hover:bg-amber-800 text-white text-xs font-medium py-2.5 rounded-lg transition"
              >
                Book a Free Call
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-sm leading-relaxed">
            Not sure which service you need? No problem.{" "}
            <Link to="/book-a-call" className="text-amber-700 font-medium hover:underline">
              Book a free 15 minute call
            </Link>{" "}
            and we will figure it out together. No commitment needed.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-amber-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to build something?
          </h2>
          <p className="text-amber-100 text-sm mb-8">
            Let's have a quick conversation and get started.
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