import React from 'react';
import { Item, Label } from './StatisticsItem.styled';

export interface IData {
  id: string;
  label: string;
  percentage: number;
}

export const StatisticsItem: React.FC<Pick<IData, 'label' | 'percentage'>> = ({
  label,
  percentage,
}) => {
  return (
    <Item className="item">
      <Label className="label">{label}</Label>
      <span className="percentage">{percentage}%</span>
    </Item>
  );
};
