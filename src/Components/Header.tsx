import "../App.scss";

let buttons: { name: string }[] = [
  { name: "Home" },
  { name: "Experience" },
  { name: "Contact me" },
];

export default function Header() {
  return (
    <div className="header">
      {buttons.map((val: { name: string }) => (
        <button>{val.name}</button>
      ))}
    </div>
  );
}
