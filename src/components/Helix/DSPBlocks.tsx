import EffectBlock from "./EffectBlock";
import IOBlock from "./IOBlock";

// Same width as Path
export default function DSPBlocks({ dsp }: any) {
  console.log("🔥 DSPBlocks", dsp);

  let effectBlocks = dsp?.blocks?.map((block: any, index: number) => {
    return <EffectBlock block={block} key={index} />;
  });

  return (
    <div className="w-full h-full grid grid-cols-10 grid-rows-2 justify-items-center items-center z-10">
      <IOBlock block={dsp?.inputA} />
      {dsp?.inputB["@input"] ? (
        <IOBlock block={dsp?.inputB} type={"inputB"} />
      ) : null}

      {effectBlocks}

      <IOBlock block={dsp?.outputA} type={"outputA"} />
      {dsp?.outputB["@output"] ? (
        <IOBlock block={dsp?.outputB} type={"outputB"} />
      ) : null}
    </div>
  );
}
