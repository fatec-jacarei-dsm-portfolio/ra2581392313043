import React, { useEffect, useRef } from "react";
import { Point } from "../../types";
import { gsap } from "gsap";

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const target = useRef<Point>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    originX: 0,
    originY: 0,
  });
  const animateHeaderRef = useRef(true);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const points: Point[] = [];

    if (canvas && ctx) {
      canvas.width = width;
      canvas.height = height;

      const initHeader = () => {
        for (let x = 0; x < width; x += width / 20) {
          for (let y = 0; y < height; y += height / 20) {
            const px = x + (Math.random() * width) / 20;
            const py = y + (Math.random() * height) / 20;
            const p: Point = { x: px, originX: px, y: py, originY: py };
            points.push(p);
          }
        }

        points.forEach((p1) => {
          const closest: Point[] = [];
          points.forEach((p2) => {
            if (p1 !== p2) {
              if (closest.length < 5) {
                closest.push(p2);
              } else {
                for (let k = 0; k < 5; k++) {
                  if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                    closest[k] = p2;
                    break;
                  }
                }
              }
            }
          });
          p1.closest = closest;
        });

        points.forEach((point) => {
          point.circle = new Circle(
            point,
            2 + Math.random() * 2,
            "rgba(255,255,255,0.3)"
          );
        });
      };

      const getDistance = (p1: Point, p2: Point): number => {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
      };

      class Circle {
        pos: Point;
        radius: number;
        color: string;
        active?: number;

        constructor(pos: Point, rad: number, color: string) {
          this.pos = pos;
          this.radius = rad;
          this.color = color;
        }

        draw = () => {
          if (!this.active || !ctx) return;
          ctx.beginPath();
          ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = `rgba(156,217,249,${this.active})`;
          ctx.fill();
        };
      }

      const drawLines = (p: Point) => {
        if (!p.active || !ctx) return;
        p.closest?.forEach((closestPoint) => {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(closestPoint.x, closestPoint.y);
          ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
          ctx.stroke();
        });
      };

      const animate = () => {
        if (animateHeaderRef.current) {
          ctx.clearRect(0, 0, width, height);
          points.forEach((point) => {
            const distance = getDistance(target.current, point);
            if (distance < 4000) {
              point.active = 0.3;
              point.circle!.active = 0.6;
            } else if (distance < 20000) {
              point.active = 0.1;
              point.circle!.active = 0.3;
            } else if (distance < 40000) {
              point.active = 0.02;
              point.circle!.active = 0.1;
            } else {
              point.active = 0;
              point.circle!.active = 0;
            }

            drawLines(point);
            point.circle!.draw();
          });
        }
        requestAnimationFrame(animate);
      };

      const shiftPoint = (p: Point) => {
        gsap.to(p, {
          duration: 1 + 1 * Math.random(),
          x: p.originX - 50 + Math.random() * 100,
          y: p.originY - 50 + Math.random() * 100,
          ease: "circ.inOut",
          onComplete: function () {
            shiftPoint(p);
          },
        });
      };

      const initAnimation = () => {
        animate();
        points.forEach((point) => {
          shiftPoint(point);
        });
      };

      initHeader();
      initAnimation();
    }

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const mouseMove = (e: MouseEvent) => {
      target.current.x =
        e.pageX ||
        e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
      target.current.y =
        e.pageY ||
        e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
    };

    const scrollCheck = () => {
      const height = window.innerHeight;
      animateHeaderRef.current = document.body.scrollTop <= height;
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="demo-canvas"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></canvas>
  );
};

export default AnimatedBackground;
