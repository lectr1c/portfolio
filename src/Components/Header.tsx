import "../App.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef, useState } from "react";

let buttons: { name: string }[] = [
  { name: "Home" },
  { name: "Experience" },
  { name: "Contact me" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);

  function onNavClick() {
    dropDownRef.current.classList.remove("dropDownNavHidden");
    if (!open) {
      setOpen(true);
      line1Ref.current.classList.add("line1animate");
      line2Ref.current.classList.add("line2animate");
      line3Ref.current.classList.add("line3animate");
      line1Ref.current.classList.remove("line1deanimate");
      line2Ref.current.classList.remove("line2deanimate");
      line3Ref.current.classList.remove("line3deanimate");

      dropDownRef.current.classList.remove("dropDownNavHide");
    }

    if (open) {
      setOpen(false);
      line1Ref.current.classList.remove("line1animate");
      line2Ref.current.classList.remove("line2animate");
      line3Ref.current.classList.remove("line3animate");
      line1Ref.current.classList.add("line1deanimate");
      line2Ref.current.classList.add("line2deanimate");
      line3Ref.current.classList.add("line3deanimate");

      dropDownRef.current.classList.add("dropDownNavHide");
    }
  }

  return (
    <div>
      <div className="header">
        <div>
          {buttons.map((val: { name: string }) => (
            <button>{val.name}</button>
          ))}
        </div>
      </div>

      <div className="dropdown">
        <div onClick={() => onNavClick()} className="hamburger">
          <div className="line1" ref={line1Ref}></div>
          <div className="line2" ref={line2Ref}></div>
          <div className="line3" ref={line3Ref}></div>
        </div>
        <div ref={dropDownRef} className="dropDownNav dropDownNavHidden">
          {buttons.map((val: { name: string }) => (
            <button>{val.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
