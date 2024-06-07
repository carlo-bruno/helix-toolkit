"use client";

import PresetViewer from "@/components/Helix/PresetViewer";
import { parseHlxFile } from "@/utils/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 w-full">
      <form
        className="h-10 w-3/4 flex flex-row items-center justify-center m-4 bg-gray-500"
        action=""
        onSubmit={parseHlxFile}
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
      <PresetViewer />
    </main>
  );
}
