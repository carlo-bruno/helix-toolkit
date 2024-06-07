import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center p-4 justify-evenly">
      <Image src="/tools_icon.svg" width={32} height={32} alt={""} />
      <h1 className="text-xl font-bold">Helix Toolkit</h1>
    </div>
  );
}
