import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { generateCountriesData } from "@nivo/generators";
import { colors } from "../constants";

const Bar = () => (
  <ResponsiveBar
    margin={{
      top: 30,
      right: 10,
      bottom: 30,
      left: 1.5,
    }}
    padding={0.2}
    data={generateCountriesData(["rock", "jazz", "hip-hop", "reggae", "folk"], {
      size: 9,
    })}
    indexBy="country"
    enableGridX={false}
    enableGridY={false}
    keys={["rock", "jazz", "hip-hop", "reggae", "folk"]}
    colors={colors}
    axisBottom={null}
    axisLeft={null}
    borderWidth={0}
    borderColor="#000"
    enableLabel={true}
    labelSkipHeight={24}
    isInteractive={false}
    animate={true}
  />
);

export default Bar;
