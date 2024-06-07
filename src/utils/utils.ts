import type { FormEvent } from "react";

export const parseHlxFile = (e: FormEvent) => {
  e.preventDefault();
  const file = (e.target as HTMLFormElement).fileInput.files[0];

  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target!.result;
    const preset = JSON.parse(text as string);
    console.log(preset);
  };
  reader.readAsText(file);


};