import { getEffectCategory } from "@/utils/utils";
import Image from "next/image";

export default function InputBlock({ block, isInputB }: any) {
  // TODO: input image

  return (
    <div
      className="flex flex-col items-center w-full h-full z-10 pt-[14px] pl-[16px]"
      style={isInputB ? { gridColumn: 1, gridRow: 2 } : {}}
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
