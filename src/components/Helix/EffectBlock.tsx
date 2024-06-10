export default function EffectBlock({ block }: any) {
  console.log("🔥 EffectBlock", block);
  return (
    <div className="w-16 h-16 border-[3px] rounded-lg border-[#989898] box-content	">
      {/* <p>{`${block["@model"]}`}</p> */}
    </div>
  );
}
