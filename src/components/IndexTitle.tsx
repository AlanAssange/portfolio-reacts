import { useEffect } from "react";

const IndexTitle = () => {
  useEffect(() => {
    const titleText = "ALAN CAÑELLAS ";
    let index = 0;

    const interval = setInterval(() => {
      document.title = titleText.slice(index) + titleText.slice(0, index);
      index = (index + 1) % titleText.length;
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default IndexTitle;