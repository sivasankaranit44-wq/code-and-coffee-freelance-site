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
    <div className="min-h-screen overflow-hidden bg-[#f7f1e9] text-[#3f2b22]">

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-14">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">

          <span className="mb-6 inline-block rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 shadow-sm backdrop-blur-md">
            Contact
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-amber-950 sm:text-5xl">
            Get in touch.
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500">
            Whether you have a project in mind, a question, or just want to
            say hello. I would love to hear from you.
          </p>

        </div>
      </section>


      {/* Contact Section */}
      <section className="relative px-6 py-10 pb-20">

        <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">

          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center gap-8">

            <div>

              <h2 className="mb-3 text-2xl font-bold text-amber-950">
                Let's talk about your project.
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-gray-500">
                No lengthy emails. No back and forth. Just a quick conversation
                to understand what you need and whether I'm the right fit to
                build it.
              </p>

            </div>


            {/* Contact Details */}
            <div className="space-y-4">

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white/45 p-4 shadow-[0_8px_30px_rgba(91,55,35,0.05)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200/70 bg-amber-100/60 text-xs font-bold text-amber-700">
                  @
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:sivasankaranit44@gmail.com"
                    className="text-sm font-medium text-amber-700 transition hover:text-amber-950 hover:underline"
                  >
                    sivasankaranit44@gmail.com
                  </a>
                </div>

              </div>


              {/* LinkedIn */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white/45 p-4 shadow-[0_8px_30px_rgba(91,55,35,0.05)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200/70 bg-amber-100/60 text-xs font-bold text-amber-700">
                  in
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/sivasankaran-g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-amber-700 transition hover:text-amber-950 hover:underline"
                  >
                    linkedin.com/in/sivasankaran-g
                  </a>
                </div>

              </div>


              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white/45 p-4 shadow-[0_8px_30px_rgba(91,55,35,0.05)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200/70 bg-amber-100/60 text-xs font-bold text-amber-700">
                  IN
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                    Location
                  </p>

                  <p className="text-sm font-medium text-amber-700">
                    Tamil Nadu, India
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Right - Contact Form */}
          <div className="rounded-2xl border border-white/80 bg-white/50 p-6 shadow-[0_12px_40px_rgba(91,55,35,0.07)] backdrop-blur-lg sm:p-8">

            {submitted ? (

              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-amber-200/70 bg-amber-100/60 text-xl font-bold text-amber-700">
                  ✓
                </div>

                <h3 className="mb-2 text-lg font-semibold text-amber-950">
                  Message sent!
                </h3>

                <p className="max-w-sm text-sm leading-relaxed text-gray-500">
                  Thank you for reaching out. I'll get back to you within 24
                  hours.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >

                {/* Name */}
                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Full name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/80 bg-white/60 px-4 py-2.5 text-sm text-gray-700 outline-none backdrop-blur-md transition focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20"
                  />

                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}

                </div>


                {/* Email */}
                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/80 bg-white/60 px-4 py-2.5 text-sm text-gray-700 outline-none backdrop-blur-md transition focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20"
                  />

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}

                </div>


                {/* Service */}
                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    What do you need?
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/80 bg-white/60 px-4 py-2.5 text-sm text-gray-700 outline-none backdrop-blur-md transition focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option value="">Select a service</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="react-app">React Web App</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="other">Other</option>
                  </select>

                  {errors.service && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.service}
                    </p>
                  )}

                </div>


                {/* Message */}
                <div>

                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Tell me about your project
                  </label>

                  <textarea
                    name="message"
                    placeholder="Describe what you need..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full resize-none rounded-lg border border-white/80 bg-white/60 px-4 py-2.5 text-sm text-gray-700 outline-none backdrop-blur-md transition focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20"
                  />

                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-amber-700 py-3 text-sm font-medium text-white shadow-md shadow-amber-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-800 hover:shadow-lg hover:shadow-amber-900/20"
                >
                  <span className="relative z-10">
                    Send Message
                  </span>
                </button>

              </form>

            )}

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
