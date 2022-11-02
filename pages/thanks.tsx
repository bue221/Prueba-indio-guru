import React from "react";
import { Stack, Box, Grid, Typography, Button } from "@mui/material";
import Footer from "components/Footer";
import WhatsappButton from "components/WhatsappButton";
import { useRouter } from "next/router";

const ThanksPage = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack px={{ xs: "10px", lg: "95px" }}>
        <Stack
          sx={{
            height: { xs: "100%", lg: "100vh" },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
          }}
        >
          <Grid
            container
            height="100%"
            direction={{ xs: "column-reverse", lg: "row" }}
          >
            <Grid item xs={12} lg={5}>
              <Stack
                gap="22px"
                height="100%"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Box
                  width="100%"
                  component="img"
                  src="/assets/Recursos web/img_registroexitoso.png"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={7} height="100%">
              <Stack
                gap="22px"
                height="100%"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  component="img"
                  width={150}
                  src="/assets/Recursos web/casafestamarillo.png"
                />
                <Typography fontSize="30px" fontWeight={800} textAlign="center">
                  ¡TUS DATOS SE HAN REGISTRADO EXITOSAMENTE!
                </Typography>
                <Typography textAlign="center">
                  Conoce mas sobre Amarilo y descubre grandes tips que te
                  ayudaran en el proceso que hoy inicias con nosotros
                </Typography>
                <Button
                  variant="contained"
                  onClick={router.back}
                  sx={{ width: "221px" }}
                >
                  REGRESAR
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
      <Footer />
      <WhatsappButton />
    </Stack>
  );
};

export default ThanksPage;
