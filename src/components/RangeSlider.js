import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

function valuetext(value) {
  return `year ${value}`;
}

export default function RangeSlider({ min, max, value, name, handleSliderChange }) {
  return (
    <div className="RangeSlider">
      <Typography id="range-slider" gutterBottom>
        Years
      </Typography>
      <Slider
        value={value}
        min={min}
        max={max}
        onChange={handleSliderChange(name)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}