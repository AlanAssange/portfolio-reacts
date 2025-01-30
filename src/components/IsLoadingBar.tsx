import React, { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/react";
import { ProgressBar, ProgressRoot } from "../components/ui/progress";

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <VStack
      position="relative"
      top={0}
      left={0}
      w="100%"
      h="100%"
      justifyContent="center"
      zIndex="8"
    >
      <ProgressRoot size="xs" width="60%" value={progress}>
        <ProgressBar />
      </ProgressRoot>
    </VStack>
  );
};

export default LoadingOverlay;
