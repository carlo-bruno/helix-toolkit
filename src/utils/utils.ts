import { type Preset } from "@/store/presetStore";
import hxModelCatalog from "../../public/hx_assets/HX_ModelCatalog.json";

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

export const getEffectCategory = (searchId: string): ParsedEffectBlock => {
  // TODO: find a better way than nested loops

  for (const category of hxModelCatalog.categories) {
    if (!category.subcategories) continue;

    for (const subcategory of category.subcategories) {
      const model = subcategory.models.find((model: any) => model.id === searchId);
      if (model) {
        return {
          categoryName: category.name,
          categoryShortName: category.shortName,
          color: `#${category.color.substring(2)}`, // remove 0x
          image: category.image.replace(/_%3/g, ""), // quickfix for send/return
          //@ts-ignore
          modelName: model.name,
          //@ts-ignore
          params: model.params,
        };
      }
    }
  }
  return {} as ParsedEffectBlock; // TODO: return default block props
};

interface ParsedEffectBlock {
  categoryName: string;
  categoryShortName: string;
  color: string;
  image: string;
  modelName: string;
  params: any;
}



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