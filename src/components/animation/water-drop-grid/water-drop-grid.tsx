import DotGrid from "./dot-grid";

export type GridProps = {
  gridWidth: number;
  gridHeight: number;
};

const WaterDropGrid = ({ gridWidth, gridHeight }: GridProps) => {
  return (
    <div className="hidden md:grid absolute top-3 bottom-3 right-14 z-0 place-content-center bg-background px-8">
      <DotGrid gridWidth={gridWidth} gridHeight={gridHeight} />
    </div>
  );
};

export default WaterDropGrid;
