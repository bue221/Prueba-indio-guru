import React from "react";
import { Stack, Grid, Typography, Box } from "@mui/material";
import { useStyles } from "./styled";

const Footer = () => {
  const styles = useStyles();
  return (
    <Stack sx={styles.container}>
      <Grid container p={2}>
        <Grid
          item
          xs={12}
          textAlign={["center", "left"]}
          lg={4}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={200}
            height={170}
            component="img"
            src="/assets/Recursos web/casafestamarillo.png"
          />
          <Stack my={2}>
            <Typography variant="caption" textTransform="capitalize">
              Contact center 601 634 0000
            </Typography>
            <Typography variant="caption" textTransform="capitalize">
              Linea Gratuita 01 8000 122442
            </Typography>
          </Stack>
          <Typography fontWeight={800} mb={2}>
            servicioalcliente@amarillo.com
          </Typography>
          <Typography>Calle 90 # 11A -27, Bogotá - Colombia</Typography>
          <Typography
            color="#00000029"
            variant="caption"
            textTransform="capitalize"
          >
            &#169; Amarrillo 2022
          </Typography>
        </Grid>
        <Grid item xs={0} lg={2} display={{ xs: "none", lg: "grid" }}>
          <Stack gap={1} textAlign="center">
            <Stack mb={2}>
              <Typography textAlign="center" variant="h5" fontWeight={500}>
                Sobre Amarillo
              </Typography>
            </Stack>
            <Typography>Quienes somos</Typography>
            <Typography>Vecinos</Typography>
            <Typography>Informes de sostenibilidad</Typography>
            <Typography>Programa de acompañamiento Social (P.A.S)</Typography>
            <Typography>Linea ética</Typography>
            <Typography>Compra de vivienda desde el exterior</Typography>
            <Typography>Talento Amarillo</Typography>
          </Stack>
        </Grid>
        <Grid item xs={0} lg={2} display={{ xs: "none", lg: "grid" }}>
          <Stack gap={1} textAlign="center">
            <Stack mb={2}>
              <Typography textAlign="center" variant="h5" fontWeight={500}>
                Acceso
              </Typography>
            </Stack>
            <Typography>Proveedores</Typography>
            <Typography>Registrar pedidos</Typography>
          </Stack>
        </Grid>
        <Grid item xs={0} lg={2} display={{ xs: "none", lg: "grid" }}>
          <Stack gap={1} textAlign="center">
            <Stack mb={2}>
              <Typography textAlign="center" variant="h5" fontWeight={500}>
                Legal
              </Typography>
            </Stack>
            <Typography>
              Politica de tratamientos de datos personales
            </Typography>
            <Typography>Reglamentos</Typography>
            <Typography>Manual SSTA</Typography>
            <Typography>Politica SSTA</Typography>
            <Typography>Protocolo de retomas de labores</Typography>
            <Typography>Cartilla de protocolo</Typography>
          </Stack>
        </Grid>
        <Grid item xs={0} lg={2} display={{ xs: "none", lg: "grid" }}>
          <Stack gap={1} textAlign="center">
            <Stack mb={2}>
              <Typography textAlign="center" variant="h5" fontWeight={500}>
                Contáctenos
              </Typography>
            </Stack>
            <Typography>Servicio al cliente</Typography>
            <Typography>Posventa</Typography>
            <Typography>Peticiones quejas y reclamos</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
