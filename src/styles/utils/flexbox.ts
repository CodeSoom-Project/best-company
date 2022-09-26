import { css } from "styled-components";

function optionAbbreviation(value: string) {
  const flexs: {
    [index: string]: string;
  } = {
    center: "center",
    start: "flex-start",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    value,
  };

  return flexs[value];
}

export function flexbox(jc = "center", ai = "center") {
  return css`
    display: flex;
    justify-content: ${optionAbbreviation(jc)};
    align-items: ${optionAbbreviation(ai)};
  `;
}
