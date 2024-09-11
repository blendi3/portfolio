import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Blendi",
          email: form.email,
          to_email: "blendiivanja2@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setLoading(false);

      toast.success("Message successfully sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error.text);

      toast.error("Error sending message.");
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="c-space my-20" id="contact">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
          <img
            src="/assets/terminal.png"
            alt="terminal background"
            className="absolute inset-0 min-h-screen hidden sm:block"
          />

          <div className="contact-container">
            <h3 className="head-text">Let's work together</h3>
            <p className="text-lg text-white-600 mt-3">
              I'm excited to connect with you! Whether you have a project in
              mind, a question, or just want to say hi, feel free to drop me a
              message. I'll get back to you as soon as possible.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="field-input"
                />
              </label>
              <label className="space-y-3">
                <span className="field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="field-input"
                />
              </label>
              <label className="space-y-3">
                <span className="field-label">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message"
                  className="field-input"
                />
              </label>

              <button type="submit" disabled={loading} className="field-btn">
                {loading ? "Sending..." : "Send Message"}

                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="field-btn_arrow"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
