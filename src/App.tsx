import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MatrixRain from "./components/MatrixRain";
import owlLogo from "./assets/img/americanowl.png";
import "./App.css";
import { Box, Stack, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <MatrixRain />
      </div>
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Stack gap={6} align="center">
          <Image
            src={owlLogo}
            alt="Owl Logo"
            boxSize="80px"
            filter="invert(1)"
            mb={-2}
          />
          <Text fontSize="3xl" fontWeight="bold" zIndex="1" color="white">
            Alan Javier Cañellas
          </Text>

          <Stack gap={4} direction="row" zIndex="1">
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                px={6}
                _hover={{ bg: "purple.700" }}
              >
                Portfolio
              </Button>
            </Link>
            <Link to="/playground">
              <Button
                size="lg"
                variant="outline"
                px={6}
                _hover={{ bg: "purple.700" }}
              >
                Playground
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default App;
