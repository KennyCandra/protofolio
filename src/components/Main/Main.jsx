import "./Main.css";
import img from "../../assets/images/1.jpg";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

const Main = () => {
  const [active, setActive] = useState("all");

  const buttons = [
    { id: 1, name: "All Projects", className: "all" },
    { id: 2, name: "HTML & CSS", className: "html" },
    { id: 3, name: "JavaScript", className: "js" },
    { id: 4, name: "React", className: "react" },
  ];

  const myProjects = [
    { ProjectTitle: "react", Category: ["react"] },
    { ProjectTitle: "html", Category: ["html"] },
    { ProjectTitle: "js + react", Category: ["js", "react"] },
    { ProjectTitle: "react", Category: ["react"] },
  ];
  const [arr, setArr] = useState(myProjects);

  const handleClick = (item) => {
    setActive(item);

    if (item === "all") return setArr(myProjects);
    else {
      const newArr = myProjects.filter((i) => {
        const smallArr = i.Category.filter((myItem) => {
          return myItem === item;
        });
        return smallArr[0] === item;
      });
      setArr(newArr);
    }
  };

  return (
    <main className="flex ">
      <section className="LeftSide flex">
        {buttons.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.className)}
            className={item.className === active ? "active" : ""}
          >
            {item.name}
          </button>
        ))}
      </section>

      <section className="RightSide flex">
        {arr.map((item) => (
          <article className="card" style={{ width: "266px" }} key={1}>
            <img src={img} width={264} />
            <div className="box">
              <h1 className="title">{item.ProjectTitle}</h1>
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
