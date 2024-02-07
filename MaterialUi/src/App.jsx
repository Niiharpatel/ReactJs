import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function App() {
  const [value, setValue] = useState([0, 0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* <Button variant="contained">Hello world</Button> */}

      <Box sx={{ width: 300 }}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
      <h1>
        Range is: {value[0]}$ - {value[1]}$
      </h1>
    </>
  );
}

export default App;
