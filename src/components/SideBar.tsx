import Logo from "./Logo";

export default function SideBar() {
  return (
    <div className="w-64 bg-slate-500 min-h-screen shrink-0 px-4">
      <Logo />
      <p> Footswitch View</p>
      <p> Preset Diff</p>
      <p>Block Pastebin</p>
      <p>Tuner</p>
    </div>
  );
}
