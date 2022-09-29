import { FunctionComponent, useCallback } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useAppSelector } from "../../app/hooks";
import { salesStatus, selectSales } from "../../slices/sales";
import Loader from "../loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

interface IGraphProps {}

const Graph: FunctionComponent<IGraphProps> = () => {
  const sales = useAppSelector(selectSales);
  const status = useAppSelector(salesStatus);

  const getChartData = useCallback(() => {
    const labels: string[] = [];
    const retailSales: number[] = [];
    const wholesaleSales: number[] = [];
    sales.forEach((sale) => {
      labels.push(sale.weekEnding);
      retailSales.push(sale.retailSales);
      wholesaleSales.push(sale.wholesaleSales);
    });

    return {
      labels,
      datasets: [
        {
          label: "Retail Sales",
          data: retailSales,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          tension: 0.5,
        },
        {
          label: "Wholesale Sales",
          data: wholesaleSales,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          tension: 0.5,
        },
      ],
    };
  }, [sales]);

  if (status !== "idle") {
    return <Loader />;
  }

  return <Line options={options} data={getChartData()} />;
};

export default Graph;
