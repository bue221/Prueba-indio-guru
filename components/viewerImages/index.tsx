import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

function ViewerImages({ images }: { images: string[] }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, position: "relative" }}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images?.length === 0 ? (
          <Box
            key={0}
            component="img"
            height={255}
            display="block"
            maxWidth={400}
            overflow="hidden"
            width="100%"
            borderRadius="26px 26px 0px 0px"
            src="/assets/imagesProjects/boreal-galeria-3.jpg"
            alt={"alcala-render-1.jpg"}
          />
        ) : (
          images?.map((img, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  height={255}
                  display="block"
                  maxWidth={400}
                  overflow="hidden"
                  width="100%"
                  borderRadius="26px 26px 0px 0px"
                  src={`/assets/imagesProjects/${img}`}
                  alt={img}
                />
              ) : null}
            </div>
          ))
        )}
      </SwipeableViews>
      <Box color="#FFFFFF">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          left={2}
          top={0}
          bottom={0}
          margin="0px auto"
          zIndex={100}
        >
          <Button onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight fontSize="large" />
            ) : (
              <KeyboardArrowLeft fontSize="large" />
            )}
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          right={2}
          top={0}
          bottom={0}
          margin="0px auto"
          zIndex={100}
        >
          <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft fontSize="large" />
            ) : (
              <KeyboardArrowRight fontSize="large" />
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ViewerImages;
