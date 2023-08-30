import { StatisticsItem, IData } from './StatisticsItem';

interface Statistics {
  title?: string;
  stats: IData[];
}

export const Statistics: React.FC<Statistics> = ({ title, stats }) => {
  return (
    <section className="statistics">
      {{ title } && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem id={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
