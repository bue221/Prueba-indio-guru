import { Stack, Paper, Typography, Button, Box } from "@mui/material";
import React from "react";
import SwipeableTextMobileStepper from "../viewerImages";
import mock from "utility/mock-api.json";

const CardProject = ({
  Nombre,
  Ciudad,
  AreaDesde,
  AreaHasta,
  Precio,
  logo,
  BonoCasa,
  galeria,
}: typeof mock.Proyectos[0]) => {
  const formatter = new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
    minimumFractionDigits: 0,
  });
  return (
    <Stack
      alignItems="center"
      justifyItems="center"
      sx={{
        maxWidth: "389px",
        minWidth: "330px",
      }}
    >
      <Paper
        sx={{
          position: "relative",
          maxWidth: "389px",
          minWidth: "330px",
          borderRadius: "26px 26px 0px 0px",
          border: "solid 1px #FFCC01",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={{
            position: "absolute",
            backgroundColor: "primary.main",
            borderRadius: "19px 0px 0px 19px",
            zIndex: 10,
            top: "2em",
            right: 0,
            width: "186px",
            py: "4px",
            px: "12px",
          }}
        >
          <Box
            component="img"
            src="/assets/Recursos web/bonodehasta.png"
            width="20px"
            height="22px"
          />
          <Typography lineHeight="initial">
            <strong>Bono de hasta </strong> {formatter.format(BonoCasa)}
          </Typography>
        </Stack>
        <SwipeableTextMobileStepper images={galeria} />
        <Stack py="43px" px="22px" gap={1} position="relative">
          <Box
            sx={{
              background: "white",
              width: 54,
              height: 54,
              borderRadius: "50%",
              position: "absolute",
              margin: "0px auto",
              left: 0,
              right: 0,
              top: "-1.5em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              // mt: "-2em",
              zIndex: 10,
            }}
          >
            <Box
              component="img"
              src="/assets/Recursos web/casa.png"
              width="20px"
              height="20px"
            />
            <Typography fontSize="16px">{Ciudad}</Typography>
          </Box>
          <Typography>
            <strong>Precio desde:</strong>{" "}
            {formatter.format(Number(Precio) || 0)}
          </Typography>
          <Typography>
            <strong>Área:</strong> {`${AreaDesde}m2 - ${AreaHasta}m2`}
          </Typography>
        </Stack>
        <Box
          component="img"
          src={`/assets/imagesProjects/${logo}`}
          width="71px"
          height="71px"
          sx={{ position: "absolute", bottom: 0, right: "13px" }}
        />
      </Paper>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: "20px", color: "#FFCC01", width: "283px" }}
      >
        SOLICITAR COTIZACIÓN
      </Button>
    </Stack>
  );
};

export default CardProject;
