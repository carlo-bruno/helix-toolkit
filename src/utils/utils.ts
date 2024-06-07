import type { FormEvent } from "react";

export const parseHlxFile = (e: FormEvent) => {
  e.preventDefault();
  const file = (e.target as HTMLFormElement).fileInput.files[0];

  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target!.result;
    const presetObject = JSON.parse(text as string);
    console.log(presetObject);

    const patchName = presetObject.data.meta.name;
    const dsp0 = getBlocksFromDSP(presetObject.data.tone.dsp0);
    // const dsp1 = getBlocksFromDSP(presetObject.data.tone.dsp1);

    dsp0.topology = presetObject.data.tone.global["@topology0"] || "";
    // dsp1.topology = presetObject.data.tone.global["@topology1"] || "";

    console.log({ patchName, dsp0 });
    // TODO: DSP 1
    // TODO: Snapshots
    // TODO: Footswitches
  };
  reader.readAsText(file);
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