export default function EffectBlock({ block }: any) {
  console.log("🔥 EffectBlock", block);
  return (
    <div className="w-20 h-20 bg-blue-500">
      <p>{`${block["@model"]}`}</p>
    </div>
  );
}
