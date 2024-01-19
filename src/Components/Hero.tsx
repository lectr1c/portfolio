import { useEffect, useRef, useState } from "react";
import "../Styles/Hero.scss";
import ExperienceTitle from "./ExperienceTitle";
import HeroPanel from "../assets/heroPanel.svg";
import { BsCloudDownloadFill } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="Hero">
      <div>
        <div>
          <h1 className="underline">
            Hello, I'm Razzaq
          </h1>
        </div>
        <ExperienceTitle />
        <div className="actionBtns">
          <button>
            <BsCloudDownloadFill className="icon" /> Get CV
          </button>
        </div>
      </div>
      <div>
        <img src={HeroPanel} />
      </div>
    </section>
  );
}
