import Logo from "./Logo";

export default function SideBar() {
  return (
    <div className="w-72 bg-slate-500 min-h-screen shrink-0">
      <Logo />
      <p> Controller View</p>
      <p> Preset Diff</p>
      <p>Block Pastebin</p>
      <p>Tuner</p>
    </div>
  );
}
