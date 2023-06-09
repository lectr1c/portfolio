import { useEffect, useRef, useState } from "react";
import "../Styles/Hero.scss";

export default function ExperienceTitle() {
  let titles = ["Full-Stack Development", "Algorithm Design", "React.js"];

  var expRef = useRef<HTMLHeadingElement>(null);
  var [expIndex, setExpIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setExpIndex(expIndex + 1);
      if (expIndex >= titles.length - 1) setExpIndex(0);
    }, 2000);
  }, [expIndex]);

  return (
    <>
      <h2>Experience in </h2>
      <h2 key={expIndex} className="fadeInText experienceTitle" ref={expRef}>
        {titles[expIndex]}
      </h2>
    </>
  );
}
