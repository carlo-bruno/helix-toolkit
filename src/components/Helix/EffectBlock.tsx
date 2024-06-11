import { getEffectCategory } from "@/utils/utils";

export default function EffectBlock({ block }: any) {
  console.log("🔥 EffectBlock", block);

  const { categoryShortName, color, image, modelName } = getEffectCategory(
    block["@model"],
  );

  console.log("🔥 EffectBlock", categoryShortName, color, image, modelName);

  return (
    <div
      className="w-16 h-16 border-[3px] rounded-lg box-content border-[#989898]"
      style={{ borderColor: color }}
    >
      <span>{`${categoryShortName}`}</span>
    </div>
  );
}
