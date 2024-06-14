import Image from "next/image";

export default function Logo({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex items-center py-4 justify-start">
      <Image src="/tools_icon.svg" width={32} height={32} alt={""} />
      {isOpen ? (
        <h1 className="text-xl font-bold ml-2">Helix Toolkit</h1>
      ) : null}
    </div>
  );
}
