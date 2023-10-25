import React from 'react';
import { Card } from 'antd';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2';
import { ChartData, ChartGridProps, ChartOptions } from './domain';
import { options as defaultOptions } from './constants';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, BarElement, ArcElement, BarController, LineController, CategoryScale as CategoryScaleController, RadialLinearScale } from 'chart.js';
import HeaderPageProps from '../../layout/headerPage';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, ArcElement, BarController, BarElement, LineController, CategoryScaleController, RadialLinearScale, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

function renderChart(chartData: ChartData, options: ChartOptions) {
  switch (chartData.type) {
    case 'bar':
      return <Bar options={options} data={chartData.chartData} />;
    case 'line':
      return <Line options={options} data={chartData.chartData} />;
    case 'pie':
      return <Pie options={options} data={chartData.chartData} />;
    case 'doughnut':
      return <Doughnut options={options} data={chartData.chartData} />;
    case 'radar':
      return <Radar options={options} data={chartData.chartData} />;
    case 'polararea':
      return <PolarArea options={options} data={chartData.chartData} />;
    case 'bubble':
      return <Bubble options={options} data={chartData.chartData} />;
    case 'scatter':
      return <Scatter options={options} data={chartData.chartData} />;
    default:
      return <div>Gráfico não suportado</div>;
  }
}

const ChartGrid: React.FC<ChartGridProps> = ({ pageTitle, data, options = defaultOptions }) => {
  return (
    <HeaderPageProps title={pageTitle}>
      <div className="chart-grid">
        {data.map((chartData, index) => (
          <div key={index}>
              <Card className="chart-container">
                {renderChart(chartData, options)}
            </Card>
            </div>
        ))}
      </div>
    </HeaderPageProps>
  );
};

export default ChartGrid;
