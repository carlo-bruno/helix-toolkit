import EffectBlock from "./EffectBlock";

// Same width as Path
export default function DSPBlocks({ dsp }: any) {
  let effectBlocks = dsp?.blocks?.map((block: any, index: number) => {
    return <EffectBlock block={block} key={index} />;
  });

  return (
    <div className="w-full h-full grid grid-cols-10 grid-rows-2 justify-items-center items-center z-10">
      {effectBlocks}
    </div>
  );
}
