/**
 * DSP Container -> displays 1 dsp block
 * @param dsp Parsed DSP object
 * children: DSPBlocks, Path both will get the {dsp}
 * Path will be displayed under DSPBlock
 */

// width: 128px * 7 = 896px
// height: w / 20% = 180px                     18% | 161px looks good too

export default function DSPContainer({ dsp }: any) {
  return (
    <div className="h-[180px] bg-gray-500 border-2 border-gray-800 w-[896px]">
      <h2>DSP Container</h2>
    </div>
  );
}
