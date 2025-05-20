export interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest?: Point[];
  active?: number;
  circle?: Circle;
}

export interface Circle {
  pos: Point;
  radius: number;
  color: string;
  active?: number;
  draw: () => void;
}
