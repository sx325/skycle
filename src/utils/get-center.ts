type Position = {
  x: number;
  y: number;
};

export const getCenter = (p1: Position, p2: Position): Position => ({
  x: (p1.x + p2.x) / 2,
  y: (p1.y + p2.y) / 2,
});
