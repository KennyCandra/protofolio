import { FaRegEnvelope } from "react-icons/fa6";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import contactUs from "../../../public/animation/Animation - 1720834803907.json";
import doneAnimation from "../../../public/animation/Animation - done.json";
import Lottie from "lottie-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mldrdjvp");
  return (
    <section
      className="contact flex"
      style={{ justifyContent: "space-between" }}
    >
      <div>
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
          <form className=" flex" onSubmit={handleSubmit}>
            <div className="flex">
              <label htmlFor="email">Email Address:</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
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
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
            {state.succeeded && (
              <div className="flex">
               <Lottie
               animationData={doneAnimation}
               loop={false}
               style={{ width: "50px", height: "50px" , marginTop : "1rem" , marginRight : "1rem"}}
               />
              <h1 style={{ color: "white", marginTop: "1rem" }}>
                Your Message has been Sent Succesfully
              </h1>
               </div>
            )}
          </form>
        </div>
      </div>
      <div className="animation">
        <Lottie
          animationData={contactUs}
          loop={true}
          style={{ width: "1000px", height: "500px" }}
        />
      </div>
    </section>
  );
};

export default Contact;
