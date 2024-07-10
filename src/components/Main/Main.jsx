import "./Main.css";
import img from "../../assets/images/1.jpg";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Main = () => {
  const buttons = [
    { id: 1, name: "All Projects" },
    { id: 2, name: "HTML & CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" },
  ];
  return (
    <main className="flex ">
      <section className="LeftSide flex">
        {buttons.map((item) => (
          <button key={item.id}>{item.name}</button>
        ))}
      </section>

      <section className="RightSide flex">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <article className="card" style={{ width: "266px" }} key={1}>
            <img src={img} width={264} />
            <div className="box">
              <h1 className="title">Landing Page</h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                tempore dolor in, accusantium laudantium accusamus.
              </p>
              <div className="icons flex">
                <div className="icon flex">
                  <FaXTwitter style={{ color: "var(--subtitle)" }} />
                  <FaLinkedin style={{ color: "var(--subtitle)" }} />
                </div>
                <a href="#">Read More</a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
