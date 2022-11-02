import React from "react";
import { Box } from "@mui/material";

const WhatsappButton = () => {
  return (
    <Box
      sx={{ cursor: "pointer" }}
      component="img"
      src="/assets/Recursos web/botonflotadowha.png"
      width={{ xs: "68px", lg: "91px" }}
      height={{ xs: "68px", lg: "91px" }}
      position="fixed"
      bottom="31px"
      right="31px"
      zIndex={10}
      onClick={() =>
        window.open(
          "https://wa.me/573052587446?text=Holaaaa%20estoy%20interesado"
        )
      }
    />
  );
};

export default WhatsappButton;
