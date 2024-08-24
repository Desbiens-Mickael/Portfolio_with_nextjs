import anime from "animejs";
import { useTheme } from "next-themes";
import React, { useEffect, useCallback } from "react";

interface GridProps {
  gridWidth: number;
  gridHeight: number;
}

const DotGrid: React.FC<GridProps> = ({ gridWidth, gridHeight }) => {
  const { theme } = useTheme();
  const opacityDeg: number = theme === "light" ? 0.2 : 0.5;

  const handleDot = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | number) => {
      let index: number;

      // Vérification si 'e' est un numéro
      if (typeof e === "number") {
        index = e;
      } else {
        const target = e.target as HTMLElement;
        index = parseInt(target.dataset.index as string);
      }

      anime({
        targets: ".dot-point",
        scale: [
          { value: 1.35, easing: "easeOutSine", duration: 250 },
          { value: 1, easing: "easeInOutQuad", duration: 500 },
        ],
        translateY: [
          { value: -30, easing: "easeOutSine", duration: 250 },
          { value: 0, easing: "easeInOutQuad", duration: 500 },
        ],
        opacity: [
          { value: 1, easing: "easeOutSine", duration: 250 },
          { value: opacityDeg, easing: "easeInOutQuad", duration: 500 },
        ],
        delay: anime.stagger(100, { grid: [gridWidth, gridHeight], from: index }),
        complete: () => {
          document.querySelectorAll(".dot-point").forEach((el) => {
            (el as HTMLElement).style.opacity = "";
            (el as HTMLElement).style.transform = "";
          });
        },
      });
    },
    [gridWidth, gridHeight, opacityDeg]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleDot(150);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      anime.remove(".dot-point");
    };
  }, [gridHeight, gridWidth, handleDot]);

  const dots = [];
  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
      const index = i * gridWidth + j;
      dots.push(
        <div
          onClick={handleDot}
          key={`${i}-${j}`}
          className="group cursor-crosshair rounded-md p-2 transition-colors hover:bg-slate-600"
          data-index={index.toString()} // Convertir l'index en string pour l'attribut data-index
        >
          <div
            className="dot-point w-2 h-2 rounded-full bg-gradient-to-b from-slate-900 to-slate-400 opacity-20 dark:opacity-50 group-hover:!opacity-100 group-hover:from-slate-700 group-hover:to-primary"
            data-index={index.toString()}
          />
        </div>
      );
    }
  }

  return (
    <div style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }} className="grid">
      {dots}
    </div>
  );
};

export default DotGrid;
