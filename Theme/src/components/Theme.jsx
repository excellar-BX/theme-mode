import React from "react";
import React, { useEffect, useState } from "react";
import {
  BiSun,
  BiMoon,
  BiDesktop,
} from "react-icons/bi";

const themeInfo = [
  {
    icon: <BiSun />,
    text: "light",
  },
  {
    icon: <BiMoon />,
    text: "dark",
  },
  {
    icon: <BiDesktop />,
    text: "system",
  },
];

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

const Theme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  return (
    <div>
      <div className="theme-btn z-50 flex rounded-xl   text-white fixed top-2 p-2 right-2 mr-4 bg-[#1c0624] w-fit ">
        {themeInfo.map((data) => (
          <div key={data.text}>
            <div
              onClick={() => setTheme(data.text)}
              className={` w-10 bg-[#330c42] ${
                theme === data.text && "text-[#d772ff]"
              }  rounded-xl p-3 mx-1  h-10`}
            >
              {data.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theme;
