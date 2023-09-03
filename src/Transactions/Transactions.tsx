import { TH, TD, TR } from './Transactions.styled';

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
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, amount, currency, type }) => (
          <TR key={id}>
            <TD>{type}</TD>
            <TD>{amount}</TD>
            <TD>{currency}</TD>
          </TR>
        ))}
      </tbody>
    </table>
  );
};
