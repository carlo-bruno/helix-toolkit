import { type Preset } from "@/store/presetStore";

export const parseHlxFile = (file: File): Promise<Preset> => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(reader.error);
    };

    reader.onload = (e) => {
      const text = e.target!.result;
      const presetObject = JSON.parse(text as string);

      // Destructuring the data
      const presetName = presetObject.data.meta.name;
      const dsp0 = getBlocksFromDSP(presetObject.data.tone.dsp0);
      // const dsp1 = getBlocksFromDSP(presetObject.data.tone.dsp1);

      dsp0.topology = presetObject.data.tone.global["@topology0"] || "";
      // dsp1.topology = presetObject.data.tone.global["@topology1"] || "";

      // TODO: DSP 1
      // TODO: Snapshots
      // TODO: Footswitches
      resolve({ presetName, dsp0 });
    };
    reader.readAsText(file);
  });
};

const getBlocksFromDSP = (dsp: any): ParsedDSP => {
  const { inputA, inputB, outputA, outputB, split, join } = dsp;
  const blocks = [];

  for (const key in dsp) {
    if (key.includes("block")) {
      blocks.push(dsp[key]);
    }
  }

  return { blocks, inputA, inputB, outputA, outputB, split, join };
};

// TODO: move types
interface ParsedDSP {
  blocks: any[];
  inputA: any;
  inputB: any;
  outputA: any;
  outputB: any;
  split: any;
  join: any;
  topology?: string;
}