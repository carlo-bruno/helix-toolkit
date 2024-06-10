import EffectBlock from "./EffectBlock";

// Same width as Path
export default function DSPBlocks({ dsp }: any) {
  let effectBlocks = dsp?.blocks?.map((block: any, index: number) => {
    return <EffectBlock block={block} key={index} />;
  });

  return (
    <div className="w-full h-full flex flex-row gap-1 justify-between">
      {effectBlocks}
    </div>
  );
}
