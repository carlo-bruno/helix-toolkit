/**
 * DSP Container -> displays 1 dsp
 * @param dsp Parsed DSP object
 * children: DSPBlocks, Path both will get the {dsp}
 * Path will be displayed under DSPBlock
 */

import DSPBlocks from "./DSPBlocks";
import DSPPath from "./DSPPath";

// width: 128px * 7 = 896px
// height: w / 20% = 180px                     18% | 161px looks good too

export default function DSPContainer({ dsp }: any) {
  return (
    <div className="w-[896px] h-[180px] bg-black  relative">
      <DSPBlocks dsp={dsp} />
      <DSPPath dsp={dsp} />
    </div>
  );
}
