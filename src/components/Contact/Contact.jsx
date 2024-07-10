import { FaRegEnvelope } from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="title flex">
        <span className="icon">
            <FaRegEnvelope />
        </span>
        Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div className="flex box">
        <form className=" flex ">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="flex">
            <label htmlFor="message">Your Message:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
        <div className="animation">animation</div>
      </div>
    </section>
  );
};

export default Contact;
