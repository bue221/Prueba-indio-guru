import React from "react";
import { Stack, Paper, Typography, Button, Box } from "@mui/material";

import mock from "utility/mock-api.json";
import { formatterCop } from "utility/formatCurrency";
import { useStyles } from "./styles";
import SliderImages from "components/ViewerImages";

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
  const styles = useStyles();

  return (
    <Stack alignItems="center" justifyItems="center" sx={styles.cardContainer}>
      <Paper sx={styles.cardPaper}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={styles.cardImg}
        >
          <Box
            component="img"
            src="/assets/Recursos web/bonodehasta.png"
            width="20px"
            height="22px"
          />
          <Typography lineHeight="initial">
            <strong>Bono de hasta </strong> {formatterCop.format(BonoCasa)}
          </Typography>
        </Stack>
        <SliderImages images={galeria} />
        <Stack py="43px" px="22px" gap={1} position="relative">
          <Box sx={styles.cardCircleHouse}>
            <Box
              component="img"
              src="/assets/Recursos web/casa.png"
              width="20px"
              height="20px"
            />
            <Typography fontSize="16px">{Ciudad}</Typography>
          </Box>
          <Stack direction="row" gap={1} alignItems="center">
            <Box
              component="img"
              width={16}
              height={12}
              src="/assets/Recursos web/valor.png"
            />
            <Typography>
              <strong>Precio desde:</strong>{" "}
              {formatterCop.format(Number(Precio) || 0)}
            </Typography>
          </Stack>
          <Stack direction="row" gap={1} alignItems="center">
            <Box
              component="img"
              width={16}
              height={16}
              src="/assets/Recursos web/area.png"
            />
            <Typography>
              <strong>Área:</strong> {`${AreaDesde}m2 - ${AreaHasta}m2`}
            </Typography>
          </Stack>
        </Stack>
        <Box
          component="img"
          src={`/assets/imagesProjects/${logo}`}
          width="71px"
          height="71px"
          position="absolute"
          bottom={0}
          right="13px"
        />
      </Paper>
      <Button variant="contained" color="secondary" sx={styles.requestBtn}>
        SOLICITAR COTIZACIÓN
      </Button>
    </Stack>
  );
};

export default CardProject;
