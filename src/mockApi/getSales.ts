import sales from "./response.json";

export interface ISale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface ISales {
  title: string;
  subtitle: string;
  sales: ISale[];
  image: string;
  tags: string[];
}

export const getSales = () => {
  return new Promise<{ data: ISales }>((resolve) =>
    setTimeout(() => resolve({ data: sales[0] }), 500)
  );
};
