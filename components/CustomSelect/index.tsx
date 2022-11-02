import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const CustomSelect = ({
  value,
  onChange,
  name,
  iconStart,
  label,
  items,
}: {
  value: string;
  onChange: any;
  name: string;
  iconStart: string;
  label: string;
  items: Array<any>;
}) => {
  return (
    <FormControl sx={{ width: 270 }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        startAdornment={
          <Box
            component="img"
            width={20}
            height={20}
            src={`/assets/Recursos web/${iconStart}`}
            mr={1}
          />
        }
      >
        <MenuItem value=" ">Todos</MenuItem>
        {items.map((i, index) => (
          <MenuItem key={index} value={i}>
            {i}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
