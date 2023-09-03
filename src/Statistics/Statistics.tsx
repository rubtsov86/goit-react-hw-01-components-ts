import { StatisticsItem, IData } from '../StatisticsItem/StatisticsItem';
import { StatisticsList, Title, Container } from './Statistics.styled';

interface Statistics {
  title?: string;
  stats: IData[];
}

export const Statistics: React.FC<Statistics> = ({ title, stats }) => {
  return (
    <Container className="statistics">
      {{ title } && <Title className="title">{title}</Title>}

      <StatisticsList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </Container>
  );
};
