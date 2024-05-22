import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const sampleData = {
  "topic_0": {
    "data": 0.018,
    "study": 0.014,
    "interface": 0.012,
    "user": 0.012,
    "target": 0.012,
    "interaction": 0.01,
    "technique": 0.01,
    "direction": 0.009,
    "uis": 0.009,
    "significant": 0.009
  },
  "topic_1": {
    "direction": 0.034,
    "effect": 0.032,
    "target": 0.032,
    "touch": 0.027,
    "technique": 0.024,
    "significant": 0.023,
    "app": 0.021,
    "interaction": 0.019,
    "perceived": 0.018,
    "time": 0.018
  },
  "topic_2": {
    "effect": 0.015,
    "perceived": 0.015,
    "vol": 0.014,
    "user": 0.014,
    "mhealth": 0.012,
    "effective": 0.011,
    "design": 0.01,
    "likability": 0.01,
    "system": 0.01,
    "app": 0.01
  },
  "topic_3": {
    "user": 0.019,
    "study": 0.012,
    "design": 0.012,
    "humancomputer": 0.011,
    "interaction": 0.01,
    "effective": 0.01,
    "performance": 0.009,
    "mobile": 0.009,
    "goal": 0.009,
    "health": 0.009
  },
  "topic_4": {
    "mobile": 0.012,
    "task": 0.012,
    "data": 0.01,
    "research": 0.01,
    "type": 0.01,
    "uis": 0.01,
    "adult": 0.01,
    "technique": 0.01,
    "target": 0.009,
    "system": 0.008
  },
  "topic_5": {
    "mean": 0.033,
    "perceived": 0.026,
    "table": 0.015,
    "uis": 0.014,
    "type": 0.013,
    "study": 0.013,
    "usability": 0.013,
    "theory": 0.013,
    "horizontal": 0.01,
    "followed": 0.01
  },
  "topic_6": {
    "system": 0.031,
    "effective": 0.027,
    "perception": 0.016,
    "performance": 0.015,
    "using": 0.015,
    "theory": 0.011,
    "users’": 0.009,
    "usability": 0.009,
    "user": 0.009,
    "based": 0.009
  },
  "topic_7": {
    "data": 0.029,
    "uis": 0.021,
    "user": 0.013,
    "study": 0.013,
    "participant": 0.013,
    "apps": 0.011,
    "four": 0.01,
    "time": 0.01,
    "survey": 0.009,
    "item": 0.009
  },
  "topic_8": {
    "system": 0.035,
    "user": 0.028,
    "performance": 0.019,
    "interaction": 0.018,
    "task": 0.017,
    "time": 0.014,
    "system’s": 0.013,
    "fidelity": 0.011,
    "transparent": 0.011,
    "representation": 0.011
  },
  "topic_9": {
    "system": 0.015,
    "user": 0.015,
    "health": 0.012,
    "dimension": 0.012,
    "target": 0.012,
    "technique": 0.012,
    "effective": 0.01,
    "within": 0.01,
    "information": 0.009,
    "touch": 0.009
  }
};

const topic0 = Object.values(sampleData)[0];
const label0 = Object.keys(topic0);
const probability0 = Object.values(topic0);

const topic1 = Object.values(sampleData)[1];
const label1 = Object.keys(topic0);
const probability1 = Object.values(topic0);

console.log(topic0);

// DO NOT TOUCH
const TopicDistribution = () => {
  const chartData = {
    labels: label0,
    datasets: [
    {
      data: probability0,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ]
    }],
  }

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Topic Distribution",
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default TopicDistribution;