import React from "react";
import { Box, Paper } from "@mui/material";

export default function ButtonMUI(){
    return (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={0} />
          <Paper />
          <Paper elevation={3} />
        </Box>
    )
  }