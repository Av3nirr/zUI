import React from "react";
import { textColor, fontsModifier } from "../assets/Fonts";
import isDefined from "./isDefined";
import arrowRight from "../assets/badges/arrowRight.svg";
import arrowLeft from "../assets/badges/arrowLeft.svg";
import arrowTop from "../assets/badges/arrowTop.svg";
import arrowBottom from "../assets/badges/arrowBottom.svg";

const parseText = (text: string): string[] => {
  return text.split("\n");
};

const formatString = (text: string) => {
  const lines = parseText(text);
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      <span dangerouslySetInnerHTML={{ __html: formatMD(line) }} />
      {index < lines.length - 1 && <br />}
    </React.Fragment>
  ));
};

const formatMD = (text: string): string => {
  let everColoring = false;
  let currentColor = "";
  let finalText = "";
  if (text) {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "~") {
        let INFO = "";
        i++;
        while (text[i] !== "~") {
          INFO += text[i];
          i++;
        }
        if (isDefined(textColor[INFO])) {
          currentColor = textColor[INFO];
          if (!everColoring) {
            finalText += `<span style="color: ${currentColor}">`;
            everColoring = true;
          } else {
            finalText += `</span><span style="color: ${currentColor}">`;
          }
        } else if (isDefined(fontsModifier[INFO])) {
          currentColor = fontsModifier[INFO];
          if (!everColoring) {
            finalText += `<span style="${currentColor}">`;
            everColoring = true;
          } else {
            finalText += `</span><span style="${currentColor}">`;
          }
        }
      } else if (text[i] === "→") {
        finalText += `<img src="${arrowRight}" class="zUI-Badge" />`;
      } else if (text[i] === "↓") {
        finalText += `<img src="${arrowBottom}" class="zUI-Badge" />`;
      } else if (text[i] === "←") {
        finalText += `<img src="${arrowLeft}" class="zUI-Badge" />`;
      } else if (text[i] === "↑") {
        finalText += `<img src="${arrowTop}" class="zUI-Badge" />`;
      } else {
        finalText += text[i];
      }
    }
  }
  if (everColoring) {
    finalText += "</span>";
  }
  return finalText;
};

export default formatString;
