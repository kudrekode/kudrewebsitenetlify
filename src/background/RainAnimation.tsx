import React, { useEffect, useRef } from 'react';
import './RainAnimation.css';

const RainAnimation: React.FC = () => {
  const canvas1Ref = useRef<HTMLCanvasElement>(null);
  const canvas2Ref = useRef<HTMLCanvasElement>(null);
  const canvas3Ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas1 = canvas1Ref.current;
    const canvas2 = canvas2Ref.current;
    const canvas3 = canvas3Ref.current;
    
    if (!canvas1 || !canvas2 || !canvas3) return;

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctx3 = canvas3.getContext('2d');
    
    if (!ctx1 || !ctx2 || !ctx3) return;

    const rainthroughnum = 200;
    const speedRainTrough = 25;
    const rainnum = 200;
    let w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
    let h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;

    const random = (min: number, max: number) => Math.random() * (max - min + 1) + min;

    let RainTrough: Array<{
      x: number;
      y: number;
      length: number;
      opacity: number;
      xs: number;
      ys: number;
    }> = [];

    let rain: Array<{
      x: number;
      y: number;
      l: number;
      xs: number;
      ys: number;
    }> = [];

    let lightning: Array<{
      x: number;
      y: number;
      xRange: number;
      yRange: number;
      path: Array<{ x: number; y: number }>;
      pathLimit: number;
    }> = [];

    let lightTimeCurrent = 0;
    let lightTimeTotal = 0;

    const createRainTrough = () => {
      for (let i = 0; i < rainthroughnum; i++) {
        RainTrough[i] = {
          x: random(0, w),
          y: random(0, h),
          length: Math.floor(random(1, 830)),
          opacity: Math.random() * 0.2,
          xs: random(-2, 2),
          ys: random(10, 20)
        };
      }
    };

    const createRain = () => {
      for (let i = 0; i < rainnum; i++) {
        rain[i] = {
          x: Math.random() * w,
          y: Math.random() * h,
          l: Math.random() * 1,
          xs: -4 + Math.random() * 4 + 2,
          ys: Math.random() * 10 + 10
        };
      }
    };

    const createLightning = () => {
      const x = random(100, w - 100);
      const y = random(0, h / 4);

      const createCount = random(1, 1);
      for (let i = 0; i < createCount; i++) {
        lightning.push({
          x,
          y,
          xRange: random(5, 30),
          yRange: random(10, 25),
          path: [{ x, y }],
          pathLimit: random(40, 55)
        });
      }
    };

    const drawRainTrough = (i: number) => {
      ctx1.beginPath();
      const grd = ctx1.createLinearGradient(0, RainTrough[i].y, 0, RainTrough[i].y + RainTrough[i].length);
      grd.addColorStop(0, "rgba(255,255,255,0)");
      grd.addColorStop(1, `rgba(255,255,255,${RainTrough[i].opacity})`);

      ctx1.fillStyle = grd;
      ctx1.fillRect(RainTrough[i].x, RainTrough[i].y, 1, RainTrough[i].length);
      ctx1.fill();
    };

    const drawRain = (i: number) => {
      ctx2.beginPath();
      ctx2.moveTo(rain[i].x, rain[i].y);
      ctx2.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys);
      ctx2.strokeStyle = 'rgba(174,194,224,0.5)';
      ctx2.lineWidth = 1;
      ctx2.lineCap = 'round';
      ctx2.stroke();
    };

    const drawLightning = () => {
      for (let i = 0; i < lightning.length; i++) {
        const light = lightning[i];

        light.path.push({
          x: light.path[light.path.length - 1].x + (random(0, light.xRange) - (light.xRange / 2)),
          y: light.path[light.path.length - 1].y + random(0, light.yRange)
        });

        if (light.path.length > light.pathLimit) {
          lightning.splice(i, 1);
          i--;
          continue;
        }

        ctx3.strokeStyle = 'rgba(255, 255, 255, .1)';
        ctx3.lineWidth = 3;
        if (random(0, 15) === 0) {
          ctx3.lineWidth = 6;
        }
        if (random(0, 30) === 0) {
          ctx3.lineWidth = 8;
        }

        ctx3.beginPath();
        ctx3.moveTo(light.x, light.y);
        for (const pc of light.path) {
          ctx3.lineTo(pc.x, pc.y);
        }
        if (Math.floor(random(0, 30)) === 1) {
          ctx3.fillStyle = `rgba(255, 255, 255, ${random(1, 3) / 100})`;
          ctx3.fillRect(0, 0, w, h);
        }
        ctx3.lineJoin = 'miter';
        ctx3.stroke();
      }
    };

    const animateRainTrough = () => {
      ctx1.clearRect(0, 0, w, h);
      for (let i = 0; i < rainthroughnum; i++) {
        if (RainTrough[i].y >= h) {
          RainTrough[i].y = h - RainTrough[i].y - RainTrough[i].length * 5;
        } else {
          RainTrough[i].y += speedRainTrough;
        }
        drawRainTrough(i);
      }
    };

    const animateRain = () => {
      ctx2.clearRect(0, 0, w, h);
      for (let i = 0; i < rainnum; i++) {
        rain[i].x += rain[i].xs;
        rain[i].y += rain[i].ys;
        if (rain[i].x > w || rain[i].y > h) {
          rain[i].x = Math.random() * w;
          rain[i].y = -20;
        }
        drawRain(i);
      }
    };

    const animateLightning = () => {
      ctx3.globalCompositeOperation = 'destination-out';
      ctx3.fillStyle = `rgba(0,0,0,${random(1, 30) / 100})`;
      ctx3.fillRect(0, 0, w, h);
      ctx3.globalCompositeOperation = 'source-over';

      lightTimeCurrent++;
      if (lightTimeCurrent >= lightTimeTotal) {
        createLightning();
        lightTimeCurrent = 0;
        lightTimeTotal = random(100, 200);
      }
      drawLightning();
    };

    const init = () => {
      createRainTrough();
      createRain();
    };

    const handleResize = () => {
      w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
      h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;
      init();
    };

    init();
    window.addEventListener('resize', handleResize);

    const animate = () => {
      animateRainTrough();
      animateRain();
      animateLightning();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="background">
      <canvas ref={canvas1Ref} id="canvas1"></canvas>
      <canvas ref={canvas2Ref} id="canvas2"></canvas>
      <canvas ref={canvas3Ref} id="canvas3"></canvas>
    </div>
  );
};

export default RainAnimation;