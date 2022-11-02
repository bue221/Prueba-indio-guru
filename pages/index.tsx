import { Button, Dialog, Stack, Typography } from "@mui/material";
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
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack height="70vh" width="100vw">
          <h1>Hi</h1>
        </Stack>
      </Dialog>
      <Footer />
      <WhatsappButton />
    </Stack>
  );
};

export default Home;
