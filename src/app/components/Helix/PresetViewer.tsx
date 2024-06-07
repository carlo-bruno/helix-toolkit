import DSPContainer from "./DSPContainer";

export default function PresetViewer() {
  return (
    <div className="w-[90%] flex flex-col justify-center items-center border-2 border-gray-800 rounded-lg p-4">
      <DSPContainer />
      <DSPContainer />
    </div>
  );
}
