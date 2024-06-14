import { getIOBlockData } from "@/utils/utils";
import Image from "next/image";

// ? Is this better than having a separate InputBlock and OutputBlock component?
export default function IOBlock({ block, type = "inputA" }: any) {
  // TODO: input/output image
  console.log("🔥 IOBlock", block);
  if (!block) return null;

  const { image, modelName } = getIOBlockData(block["@model"]);

  let styles = {};
  if (type === "inputA") {
    styles = { gridColumn: 1, gridRow: 1, padding: "14px 0 0 16px" };
  } else if (type === "inputB") {
    styles = { gridColumn: 1, gridRow: 2, padding: "14px 0 0 16px" };
  } else if (type === "outputA") {
    styles = { gridColumn: 10, gridRow: 1, padding: "14px 16px 0 0" };
  } else if (type === "outputB") {
    styles = { gridColumn: 10, gridRow: 2, padding: "14px 16px 0 0" };
  }

  return (
    <div
      className="flex flex-col items-center w-full h-full z-10"
      style={styles}
    >
      <div className="w-10 h-10 rounded-full border-[3px] border-[#989898] overflow-hidden">
        <Image
          src={"/hx_assets/icons_models/" + encodeURIComponent(image)}
          width={46}
          height={46}
          alt={modelName}
          style={{ transform: "translateY(-68px)" }} // TODO: add logic, maybe use pixel instead of rem | 34px
        />
      </div>
    </div>
  );
}
