import { create } from "zustand";

export interface Preset {
  presetName: string;
  dsp0: any;
}

interface PresetState {
  preset: Preset;
  setPreset: (preset: Preset) => void;
}

export const usePresetStore = create<PresetState>()(
  (set) => ({
    preset: {} as Preset,
    setPreset: (preset: Preset) => set(() => ({ preset })),
  })
);
