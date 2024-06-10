import { usePresetStore } from "@/store/presetStore";
import DSPContainer from "./DSPContainer";

export default function PresetViewer() {
  const preset = usePresetStore((state) => state.preset);

  return (
    <div className="w-[90%] flex flex-col justify-center items-center border-2 border-gray-800 rounded-lg p-4">
      <DSPContainer dsp={preset.dsp0} />
      {/* <DSPContainer dsp={preset.dsp1} /> */}
    </div>
  );
}
