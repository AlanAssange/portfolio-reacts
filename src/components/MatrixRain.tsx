import React, { useEffect, useRef } from "react";

class Symbol {
  characters: string =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  x: number;
  y: number;
  fontSize: number;
  canvasHeight: number;
  text: string = "A";

  constructor(x: number, y: number, fontSize: number, canvasHeight: number) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
  }

  draw(context: CanvasRenderingContext2D, context2: CanvasRenderingContext2D) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length),
    );
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    context2.fillText(
      this.text,
      this.x * this.fontSize,
      this.y * this.fontSize,
    );
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97) {
      this.y = 0;
    } else {
      this.y += 0.9;
    }
  }
}

class Effect {
  fontSize: number = 16;
  canvasWidth: number;
  canvasHeight: number;
  columns: number;
  symbols: Symbol[] = [];

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.columns = this.canvasWidth / this.fontSize;
    this.initialize();
  }

  private initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }

  resize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
}

const MatrixRain: React.FC = () => {
  const canvas1Ref = useRef<HTMLCanvasElement | null>(null);
  const canvas2Ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas1 = canvas1Ref.current;
    const canvas2 = canvas2Ref.current;

    if (!canvas1 || !canvas2) return;

    const ctx1 = canvas1.getContext("2d");
    const ctx2 = canvas2.getContext("2d");

    if (!ctx1 || !ctx2) return;

    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;

    const effect = new Effect(canvas1.width, canvas1.height);
    let lastTime = 0;
    const fps = 60;
    const nextFrame = 1000 / fps;
    let timer = 0;

    const animate = (timeStamp: number) => {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      if (timer > nextFrame) {
        ctx1.textAlign = "center";
        ctx1.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
        ctx1.font = `${effect.fontSize}px monospace`;
        // ctx1.fillStyle = '#0aff0a';
        ctx1.fillStyle = " #850aff";
        ctx2.textAlign = "center";
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx2.font = `${effect.fontSize}px monospace`;
        ctx2.fillStyle = "white";

        effect.symbols.forEach((symbol) => symbol.draw(ctx1, ctx2));
        timer = 0;
      } else {
        timer += deltaTime;
      }
      requestAnimationFrame(animate);
    };

    animate(0);

    const handleResize = () => {
      canvas1.width = window.innerWidth;
      canvas1.height = window.innerHeight;
      canvas2.width = window.innerWidth;
      canvas2.height = window.innerHeight;
      effect.resize(canvas1.width, canvas1.height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvas1Ref}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      />
      <canvas
        ref={canvas2Ref}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
      />
    </>
  );
};

export default MatrixRain;
