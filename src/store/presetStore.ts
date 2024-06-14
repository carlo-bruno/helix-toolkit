import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

export interface Preset {
  presetName: string;
  dsp0: any;
}

interface PresetState {
  preset: Preset;
  setPreset: (preset: Preset) => void;
}

export const usePresetStore = create<PresetState>()(
  persist(
    (set) => ({
      preset: {} as Preset,
      setPreset: (preset: Preset) => set(() => ({ preset })),
    }),
    {
      name: 'preset-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
