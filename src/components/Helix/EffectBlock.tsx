import { getEffectCategory } from "@/utils/utils";
import Image from "next/image";

export default function EffectBlock({ block }: any) {
  console.log("🔥 EffectBlock", block);

  const { categoryShortName, color, image, modelName } = getEffectCategory(
    block["@model"],
  );

  console.log("🔥 EffectBlock", { categoryShortName, color, image, modelName });

  const column = block["@position"] + 2;
  const row = block["@path"] + 1;

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full"
      style={{ gridColumn: column, gridRow: row }}
    >
      <div
        className="w-12 h-12 border-[3px] rounded-lg box-content overflow-hidden border-[#989898]"
        style={{ borderColor: color }}
      >
        <Image
          src={"/hx_assets/icons_category/" + image}
          width={48}
          height={48}
          alt={categoryShortName}
          // style={{ transform: "translateY(-3rem)" }} // TODO: add logic for Send/Return
        />
      </div>
      <p className="text-xs mt-1">{`${categoryShortName}`}</p>
    </div>
  );
}
