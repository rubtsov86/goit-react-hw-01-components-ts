import React from 'react';

export interface IData {
  id: string;
  label: string;
  percentage: number;
}

export const StatisticsItem: React.FC<IData> = ({ id, label, percentage }) => {
  return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
