import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { generateProgrammingLanguageStats } from "@nivo/generators";
import { colors } from "../constants";

const Pie = () => (
  <ResponsivePie
    margin={{
      top: 30,
      right: 1.5,
      bottom: 30,
      left: 1.5,
    }}
    data={generateProgrammingLanguageStats(true, 9).map((d) => ({
      id: d.label,
      ...d,
    }))}
    colors={colors}
    innerRadius={0.5}
    enableRadialLabels={true}
    borderWidth={0}
    cornerRadius={2}
    borderColor="#000"
    slicesLabelsSkipAngle={10}
    animate={true}
    isInteractive={false}
  />
);

export default Pie;
