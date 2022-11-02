import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CustomSelect from "components/CustomSelect";
import Footer from "components/Footer";
import WhatsappButton from "components/WhatsappButton";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import CardProject from "../components/CardProject";

import mock from "../utility/mock-api.json";

const Home: NextPage = () => {
  //state
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<typeof mock.Proyectos>(
    mock.Proyectos
  );
  const [form, setForm] = useState({
    ciudades: " ",
    precios: " ",
    areas: " ",
    tipos: " ",
  });
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // filters values
  const ciudades = mock.Proyectos.map((i) => i.FiltroCiudad).filter(
    (i, index) => mock.Proyectos.map((i) => i.FiltroCiudad).indexOf(i) === index
  );
  const precios = mock.Proyectos.map((i) => i.FiltroPrecio).filter(
    (i, index) => mock.Proyectos.map((i) => i.FiltroPrecio).indexOf(i) === index
  );
  const areas = mock.Proyectos.map((i) => i.FiltroArea).filter(
    (i, index) => mock.Proyectos.map((i) => i.FiltroArea).indexOf(i) === index
  );
  const tipos = mock.Proyectos.map((i) => i.TipoProyecto).filter(
    (i, index) => mock.Proyectos.map((i) => i.TipoProyecto).indexOf(i) === index
  );
  //logic
  const router = useRouter();

  const handleSearch = () => {
    let data = mock.Proyectos;

    if (form.ciudades !== " ") {
      data = data.filter((i) => i.FiltroCiudad === form.ciudades);
    }
    if (form.tipos !== " ") {
      data = data.filter((i) => i.TipoProyecto === form.tipos);
    }
    if (form.precios !== " ") {
      data = data.filter((i) => i.FiltroPrecio === form.precios);
    }
    if (form.areas !== " ") {
      data = data.filter((i) => i.FiltroArea === form.areas);
    }
    router.replace({
      query: {
        ...router.query,
        area: form.areas !== " " ? form.areas : "",
        precio: form.precios !== " " ? form.precios : "",
        tipo: form.tipos !== " " ? form.tipos : "",
        ciudad: form.ciudades !== " " ? form.ciudades : "",
      },
    });

    setProjects(data);
  };

  // logic url params
  useEffect(() => {
    if (router && router.query) {
      const { area, precio, tipo, ciudad } = router.query;
      if (area || precio || tipo || ciudad) {
        let data = mock.Proyectos;
        console.log(data, area, precio, tipo, ciudad);
        if (ciudad && ciudad !== "") {
          data = data.filter((i) => i.FiltroCiudad === ciudad);
        }
        if (tipo && tipo !== "") {
          data = data.filter((i) => i.TipoProyecto === tipo);
        }
        if (precio && precio !== "") {
          data = data.filter((i) => i.FiltroPrecio === precio);
        }
        if (area && area !== "") {
          data = data.filter((i) => i.FiltroArea === area);
        }
        setForm({
          ...form,
          areas: area !== "" ? (area as string) : " ",
          precios: precio !== "" ? (precio as string) : " ",
          ciudades: ciudad !== "" ? (ciudad as string) : " ",
          tipos: tipo !== "" ? (tipo as string) : " ",
        });
        setProjects(data);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

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
            <CustomSelect
              name="ciudades"
              onChange={handleChange}
              value={form.ciudades}
              iconStart="ciudad.png"
              items={ciudades}
              label="Ciudad"
            />
            <CustomSelect
              name="tipos"
              onChange={handleChange}
              value={form.tipos}
              iconStart="tipo.png"
              items={tipos}
              label="Tipo"
            />
          </Stack>
          <Stack gap={2}>
            <CustomSelect
              name="areas"
              onChange={handleChange}
              value={form.areas}
              iconStart="area.png"
              items={areas}
              label="Área"
            />
            <CustomSelect
              name="precios"
              value={form.precios}
              onChange={handleChange}
              iconStart="valor.png"
              items={precios}
              label="Valor"
            />
          </Stack>
        </Stack>
        <Button
          onClick={handleSearch}
          variant="contained"
          color="primary"
          sx={{ width: "221px   " }}
        >
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
        {projects.map((i, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.2, transitionDuration: "0.5s" }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <CardProject
              {...i}
              setOpen={(nombre: string) => {
                setOpen(true);
                console.log(nombre);
              }}
            />
          </motion.div>
        ))}
      </Stack>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <Stack height="70vh" width="100%" position="relative">
          <Grid container height="100%">
            <Grid item xs={6} sx={{ background: "white", height: "100%" }}>
              <Stack
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                height="100%"
                gap={2}
                position="relative"
              >
                <Box
                  width={220}
                  component="img"
                  src="/assets/Recursos web/casafestamarillo.png"
                />
                <Typography fontSize={20}>
                  COMPLETA YA ESTE FORMULARIO PARA SOLICITAR INFORMACIÓN DEL
                  <strong>INMUEBLE DE TUS SUEÑOS</strong>.
                </Typography>
                <Box
                  position="absolute"
                  bottom="2em"
                  right="0px"
                  sx={{
                    background: "#FFCC01",
                    borderRadius: "36px 0px 0px 36px",
                    py: "20px",
                    px: "10px",
                  }}
                >
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Box
                      component="img"
                      src="/assets/Recursos web/telefono.png"
                      width={20}
                    />
                    <Typography fontSize="20px">601 6340000</Typography>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6} sx={{ background: "#FFCC01", height: "100%" }}>
              <Stack
                px="50px"
                py="34px"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Stack gap={2} mb={2}>
                  <TextField />
                  <TextField />
                  <TextField />
                  <TextField />
                  <TextField />
                </Stack>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ color: "primary.main" }}
                  onClick={() => router.push("/thanks")}
                >
                  Solicitar
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", top: 0, right: 0, color: "black" }}
          >
            <Close fontSize="large" />
          </IconButton>
        </Stack>
      </Dialog>
      <Footer />
      <WhatsappButton />
    </Stack>
  );
};

export default Home;
