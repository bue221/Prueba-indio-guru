import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Footer from "components/Footer";
import WhatsappButton from "components/WhatsappButton";
import type { NextPage } from "next";
import CardProject from "../components/CardProject";

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
              <InputLabel id="demo-simple-select-label">Ciudad</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Ciudad"
                startAdornment={
                  <Box
                    component="img"
                    width={20}
                    height={20}
                    src="/assets/Recursos web/ciudad.png"
                  />
                }
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tipo"
                startAdornment={
                  <Box
                    component="img"
                    width={20}
                    height={20}
                    src="/assets/Recursos web/tipo.png"
                  />
                }
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack gap={2}>
            <FormControl sx={{ width: 270 }}>
              <InputLabel id="demo-simple-select-label">Área</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="área"
                startAdornment={
                  <Box
                    component="img"
                    width={20}
                    height={20}
                    src="/assets/Recursos web/area.png"
                  />
                }
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Valor</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Valor"
                startAdornment={
                  <Box
                    component="img"
                    width={20}
                    height={20}
                    src="/assets/Recursos web/valor.png"
                  />
                }
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
      <Footer />
      <WhatsappButton />
    </Stack>
  );
};

export default Home;
