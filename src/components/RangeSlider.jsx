import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";
import Box from "@material-ui/core/Box";

export default function RangeSlider({
  min,
  max,
  value,
  name,
  handleSliderChange
}) {
  const labelName = name.charAt(0).toUpperCase() + name.substring(1);
  return (
    <div className="RangeSlider">
      {labelName}:{" "}
      <Slider
        value={value}
        min={min}
        max={max}
        onChange={handleSliderChange(name)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <div className="values">
        <Box display="flex" justifyContent="space-between" m={1}>
          <Box>{value[0]}</Box>
          <Box> {value[1]}</Box>
        </Box>
      </div>
    </div>
  );
}
