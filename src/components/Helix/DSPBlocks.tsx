import EffectBlock from "./EffectBlock";
import InputBlock from "./InputBlock";

// Same width as Path
export default function DSPBlocks({ dsp }: any) {
  // console.log("🔥 DSPBlocks", dsp);

  let effectBlocks = dsp?.blocks?.map((block: any, index: number) => {
    return <EffectBlock block={block} key={index} />;
  });

  return (
    <div className="w-full h-full grid grid-cols-10 grid-rows-2 justify-items-center items-center z-10">
      <InputBlock block={dsp?.inputA} />
      {dsp?.inputB["@input"] ? (
        <InputBlock block={dsp?.inputB} isInputB />
      ) : null}
      {effectBlocks}
    </div>
  );
}
