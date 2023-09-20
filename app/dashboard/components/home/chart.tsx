"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("../charts/steam").then((mod) => mod.Steam), {
  ssr: false,
});
function ChartHome() {
  return <Chart />;
}

export default ChartHome;
