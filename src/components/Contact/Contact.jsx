import { contact } from "../../portfolio";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section id="contact" className="py-16 text-left md:py-24">
      <h2 className="mb-6 text-left text-2xl font-semibold tracking-tight text-[var(--clr-fg-alt)] md:text-3xl">
        Contact
      </h2>
      <p className="mb-6 max-w-lg text-left text-base leading-relaxed text-[var(--clr-fg)]">
        Feel free to email me if you would like to get in touch!
      </p>
      <a href={`mailto:${contact.email}`}>
        <span className="btn btn--outline inline-block">Email me</span>
      </a>
    </section>
  );
};

export default Contact;
