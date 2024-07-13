import { useEffect, useState } from "react";
import "./Header.css";
import { IoClose , IoMoon , IoSunny  , IoMenu } from "react-icons/io5";


const Header = () => {

  const [showModal , setShowModal] = useState(false)
  const [theme , setTheme] = useState("dark")

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const handleClick = () => {
    setShowModal(!showModal)
    console.log(showModal)
  }

  const links = [
    {
      id: 1,
      link: "Home",
      src : 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
    },
    {
      id: 2,
      link: "About",
      src : 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
    },
    {
      id: 3,
      link: "Portfolio",
      src : 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
    },
    {
      id: 4,
      link: "Contact",
      src : 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
    },
  ];
  return (
    <header className="flex">
       <div className="large"/>
        <div className="small">
          <button className="menu" onClick={handleClick}><IoMenu /></button>
        </div>
        <ul className="flex">
          {links.map((link) => (
            <li key={link.id}><a href={link.src}>{link.link}</a></li>
          ))}
        </ul>
      
      <button className="moon" onClick={toggleTheme}>{theme === 'dark' ? <IoMoon/> : <IoSunny />} </button>

      {showModal &&<div className="fixed">
          <ul className="modal">
            <li>
              <button onClick={handleClick} className="close">
                <IoClose/>
              </button>
            </li>
            {links.map((link) => (
              <li key={link.id}><a href={link.src}>{link.link}</a></li>
            ))}
          </ul>
      </div>}
    </header>
  );
};

export default Header;
