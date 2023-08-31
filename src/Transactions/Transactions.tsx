interface IData {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

interface ITransactions {
  items: IData[];
}

export const Transactions: React.FC<ITransactions> = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, amount, currency, type }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
