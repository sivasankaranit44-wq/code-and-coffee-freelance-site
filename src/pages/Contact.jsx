import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const err = {};

    if (!formData.name.trim()) {
      err.name = "Name is required";
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      err.email = "Enter a valid email";
    }

    if (!formData.service) {
      err.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      err.message = "Message is required";
    }

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-amber-50">

      {/* Hero */}
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Contact
          </span>

          <h1 className="text-4xl font-bold text-amber-900 leading-tight mb-4">
            Get in touch.
          </h1>

          <p className="text-gray-500 text-sm">
            Whether you have a project in mind, a question, or just want to say
            hello. I would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left - Contact Info */}
          <div className="flex flex-col gap-6 justify-center">

            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-2">
                Let's talk about your project.
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed">
                No lengthy emails. No back and forth. Just a quick conversation
                to understand what you need and whether I'm the right fit to
                build it.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
                  📧
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    Email
                  </p>

                  <a
                    href="mailto:sivasankaranit44@gmail.com"
                    className="text-sm text-amber-700 font-medium hover:underline"
                  >
                    sivasankaranit44@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
                  💼
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/sivasankaran-g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-700 font-medium hover:underline"
                  >
                    linkedin.com/in/sivasankaran-g
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
                  🐙
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/Siva918641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-700 font-medium hover:underline"
                  >
                    github.com/Siva918641
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
                  📍
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    Location
                  </p>

                  <p className="text-sm text-amber-700 font-medium">
                    Tamilnadu, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-8">

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">🎉</div>

                <h3 className="font-semibold text-lg text-amber-900 mb-2">
                  Message sent!
                </h3>

                <p className="text-gray-500 text-sm">
                  Thank you for reaching out. I'll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
              >

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What do you need?
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="react-app">React Web App</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="other">Other</option>
                  </select>

                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tell me about your project
                  </label>

                  <textarea
                    name="message"
                    placeholder="Describe what you need..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />

                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 rounded-lg text-sm transition"
                >
                  Send Message
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-amber-900 text-center mt-20">
        <p className="text-amber-200 text-sm">
          © 2026 CodeandCoffee — Built by Sivasankaran
        </p>
      </footer>

    </div>
  );
}