export default function DSPPath({ dsp }: any) {
  const START_X = 54;
  const END_X = 606;

  const TOP_Y = 25;
  const MID_Y = 65;
  const BOTTOM_Y = 91;

  const hasPathB = dsp?.topology.includes("B");
  const hasSplit = dsp?.topology.includes("S");
  const hasJoin = dsp?.topology.includes("J");

  const splitPosition = dsp?.split["@position"] || 0; // int, represents block position
  const joinPosition = dsp?.join["@position"] || 0; // int, represents block position

  const splitStart_X =
    66 * splitPosition -
    (splitPosition === joinPosition && hasSplit && hasJoin ? 4 : 0);
  const joinStart_X =
    66 * joinPosition +
    (splitPosition === joinPosition && hasSplit && hasJoin ? 4 : 0);

  const pathB_end_X =
    END_X +
    (splitPosition === joinPosition && hasSplit && hasJoin && joinPosition === 8
      ? 4
      : 0);
  const pathB_start_X =
    START_X -
    (splitPosition === joinPosition &&
    hasSplit &&
    hasJoin &&
    splitPosition === 0
      ? 4
      : 0);

  return (
    <div className="w-full h-full overflow-hidden absolute top-0 left-0">
      <svg viewBox="0 0 660 130" preserveAspectRatio="none">
        {/* Path A */}
        <path
          stroke="#989898"
          strokeWidth="2.5"
          d={`
              M${START_X} ${TOP_Y}
              L${END_X} ${TOP_Y}
            `}
        ></path>
        {/* Split line */}
        {hasSplit && hasPathB && (
          <path
            stroke="#989898"
            strokeWidth="2.5"
            fill="none"
            d={`
                M${66 + splitStart_X - 7} ${TOP_Y}
                A7 7 0 0 1 ${66 + splitStart_X} 32
                L${66 + splitStart_X} 58

                ${
                  // if splitPosition is 0, don't add half line to middle
                  splitPosition !== 0
                    ? `
                      A7 7 0 0 1 ${66 + splitStart_X - 7} ${MID_Y}
                      L${66 + splitStart_X - 7} ${MID_Y}
                      L73 ${MID_Y}
                      A7 7 0 0 0 66 72
                      `
                    : ""
                }

                L${pathB_start_X + 12} 80
                L${pathB_start_X + 12} 84
                A7 7 0 0 0 ${pathB_start_X + 12 + 7} ${BOTTOM_Y}
              `}
          ></path>
        )}

        {/* Join line */}
        {hasPathB && hasJoin && (
          <path
            stroke="#989898"
            strokeWidth="2.5"
            fill="none"
            d={`
                M${66 + joinStart_X + 7} ${TOP_Y}
                A7 7 0 0 0 ${66 + joinStart_X} 32
                L${66 + joinStart_X} 58
                ${
                  // if joinPosition is 8, don't add half line to middle
                  joinPosition !== 8
                    ? `
                      A7 7 0 0 0 ${66 + joinStart_X + 7} ${MID_Y}
                      L${66 + joinStart_X + 7} ${MID_Y}
                      L587 ${MID_Y}
                      A7 7 0 0 1 594 72
                    `
                    : ""
                }
                L${pathB_end_X - 12} 72
                L${pathB_end_X - 12} 84
                A7 7 0 0 1 ${pathB_end_X - 12 - 7} ${BOTTOM_Y}
              `}
          ></path>
        )}

        {/* Path B */}
        {hasPathB && (
          <path
            stroke="#989898"
            strokeWidth="2.5"
            d={`
              M${pathB_start_X + (hasSplit ? 19 : 0)} ${BOTTOM_Y}
              L${pathB_end_X - (hasJoin ? 19 : 0)} ${BOTTOM_Y}
          `}
          ></path>
        )}
      </svg>
    </div>
  );
}

// Credit: James Orts https://hxview.netlify.app/
