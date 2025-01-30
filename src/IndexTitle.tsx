import React, { useState, useEffect } from 'react';

const IndexTitle = () => {
  const name = 'ALAN CAÑELLAS';
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentTitle(name.slice(0, index)); 
      index += 1;
      if (index > name.length) {
        index = 0; 
      }
    }, 300); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = currentTitle;
  }, [currentTitle]);

  return (
    <div>
      <h1>¡Mira el título de la página!</h1>
    </div>
  );
};

export default IndexTitle;