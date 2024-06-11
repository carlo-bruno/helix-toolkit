import { getEffectCategory } from "@/utils/utils";
import Image from "next/image";

export default function EffectBlock({ block }: any) {
  console.log("🔥 EffectBlock", block);

  const { categoryShortName, color, image, modelName } = getEffectCategory(
    block["@model"],
  );

  console.log("🔥 EffectBlock", { categoryShortName, color, image, modelName });

  return (
    <div
      className="w-12 h-12 border-[3px] rounded-lg box-content overflow-hidden border-[#989898] flex justify-center items-center"
      style={{ borderColor: color }}
    >
      <Image
        src={"/hx_assets/icons_category/" + image}
        width={48}
        height={48}
        alt={categoryShortName}
        // style={{ transform: "translateY(-3rem)" }}
      />
      {/* <span>{`${categoryShortName}`}</span> */}
    </div>
  );
}
