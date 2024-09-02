import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { FC } from "react";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

const Gauge: FC = () => {
  const size = 100;
  return (
    <GaugeContainer
      width={size}
      height={size}
      startAngle={-110}
      endAngle={110}
      value={90}
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer />
    </GaugeContainer>
  );
};

export { Gauge };
