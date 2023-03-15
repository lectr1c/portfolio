import { useEffect, useRef, useState } from "react";
import "../App.scss";
import ExperienceTitle from "../Components/ExperienceTitle";
import HeroPanel from "../assets/heroPanel.svg";
import { BsCloudDownloadFill } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="Hero">
      <div>
        <div>
          <h1>
            Hello, I'm Razzaq<div className="underline"></div>
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
