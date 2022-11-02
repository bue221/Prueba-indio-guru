import { House } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CardProject from "../components/CardProject";

import styles from "../styles/Home.module.css";
import mock from "../utility/mock-api.json";

const Home: NextPage = () => {
  return (
    <Stack position="relative">
      <Stack
        bgcolor="#FFCC01"
        justifyContent="center"
        alignItems="center"
        pt="26px"
        pb="43px"
      >
        <Box
          component="img"
          src="/assets/Recursos web/casafest2022.png"
          width={179}
          height={142}
          mb="17px"
        />
        <Typography textAlign="center" fontSize="16px">
          LLEGÓ EL <strong>IMPULSO</strong> QUE NECESITABAS PARA CUMPLIR EL
          SUEÑO DE ADQUIRIR <strong>VIVIENDA NUEVA.</strong>
        </Typography>
        <Typography textAlign="center" fontSize="20px" fontWeight={900}>
          DEL 7 AL 31 DE OCTUBRE
        </Typography>
      </Stack>
      <Stack
        px={{ xs: "50px", lg: "120px" }}
        py="43px"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <Typography fontSize="15px" mb={2}>
          Encuentra tu proyecto y aprovecha nuestros grandes bonos
        </Typography>
        <Stack direction={{ xs: "column", lg: "row" }} gap={2} mb={2}>
          <Stack gap={2}>
            <FormControl sx={{ width: 270 }}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                startAdornment={<House />}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack gap={2}>
            <FormControl sx={{ width: 270 }}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Button variant="contained" color="primary" sx={{ width: "221px   " }}>
          Buscar
        </Button>
      </Stack>
      <Stack
        px={{ xs: "12px", lg: "52px" }}
        flexWrap="wrap"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="35px"
      >
        {mock.Proyectos.map((i, index) => (
          <CardProject {...i} key={index} />
        ))}
      </Stack>
      {/* Footer */}
      <Stack
        sx={{
          background: "#F9F9F9",
          px: { xs: "44px", lg: "109px" },
          py: { xs: "10px", lg: "92px" },
          mt: 3,
          zIndex: 11,
        }}
      >
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
      <Box
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
    </Stack>
  );
};

export default Home;
