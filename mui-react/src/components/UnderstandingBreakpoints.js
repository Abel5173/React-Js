import { StayPrimaryLandscape } from "@mui/icons-material";
import { Box } from "@mui/system";
import React from 'react'
export default function MuiLearning(){
  return (
    <Box sx={{
      border: 5,
      borderColor: 'rgba(0,0,24,0.75)',
      bgcolor: 'rgba(220,30,24,0.35)',
      borderRadius: 2,
      width: 100,
      height: 100,
      m: 10,
      color: 'primary.main'
    }}>
      Hello World!!
    </Box>
  )
}