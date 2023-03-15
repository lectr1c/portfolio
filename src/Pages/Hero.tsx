import { useEffect, useRef, useState } from "react";
import "../App.css";
import ExperienceTitle from "../Components/ExperienceTitle";

export default function Hero() {
  return (
    <section className="Hero">
      <div>
        <h1>
          Hello, I'm Razzaq<div className="underline"></div>
        </h1>
      </div>
      <ExperienceTitle />
    </section>
  );
}
