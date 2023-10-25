export interface ChartData {
    type: string;
    chartData: any;
}
  
export interface ChartGridProps {
    pageTitle?: string;
    data: ChartData[];
    options?: ChartOptions;
}

export type ChartOptions = {
  responsive: boolean;
  plugins: {
    legend: {
      position: 'top' | 'bottom' | 'left' | 'right';
    };
    title: {
      display: boolean;
      text: string;
    };
  };
};
