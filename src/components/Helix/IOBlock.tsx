import { getEffectCategory } from "@/utils/utils";
import Image from "next/image";

// ? Is this better than having a separate InputBlock and OutputBlock component?
export default function IOBlock({ block, type = "inputA" }: any) {
  // TODO: input/output image

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
      <div
        className="w-10 h-10 rounded-full border-[3px] 
    border-[#989898]"
      >
        <Image
          src={"/hx_assets/icons_category/FX_HX_Category_None.png"}
          width={48}
          height={48}
          alt={""}
        />
      </div>
    </div>
  );
}
