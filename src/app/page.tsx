"use client";

import { type FormEvent } from "react";
import PresetViewer from "@/components/Helix/PresetViewer";
import { usePresetStore } from "@/store/presetStore";
import { parseHlxFile } from "@/utils/utils";

export default function Home() {
  const { preset, setPreset } = usePresetStore((state) => state);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const file = (e.target as HTMLFormElement).fileInput.files[0];

    const presetObject = await parseHlxFile(file);
    setPreset(presetObject);
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-12 w-full">
      <form
        className="h-10 w-3/4 flex flex-row items-center justify-center m-4 bg-gray-500"
        action=""
        onSubmit={handleFormSubmit}
      >
        <input
          type="file"
          name="fileInput"
          id="fileInput"
          accept=".hlx"
          required
        />
        <button type="submit">Upload</button>
      </form>
      <h2>{preset ? `Preset name: ${preset.presetName}` : ""}</h2>
      <PresetViewer />
    </main>
  );
}
