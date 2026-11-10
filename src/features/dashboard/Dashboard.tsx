import { useDashboard } from '@/hooks/useDashboard';
import { formatCurrency, formatDate } from '@/shared/formatters';
import { StatCard } from '@/shared/ui/StatCard';

export function Dashboard() {
  const { balance, income, expenses, transactions } = useDashboard();

  return (
    <>
      <section className="page-heading" aria-labelledby="dashboard-title">
        <p className="eyebrow">Area personale</p>
        <h1 id="dashboard-title">La tua dashboard</h1>
        <p>Una panoramica delle tue finanze.</p>
        <p className="demo-notice">Dati dimostrativi: nessun conto reale è collegato.</p>
      </section>

      <section className="stats" aria-label="Riepilogo finanziario">
        <StatCard label="Saldo disponibile" value={formatCurrency(balance)} />
        <StatCard label="Entrate del mese" value={formatCurrency(income)} />
        <StatCard label="Uscite del mese" value={formatCurrency(expenses)} />
      </section>

      <section className="panel" aria-labelledby="transactions-title">
        <h2 id="transactions-title">Movimenti recenti</h2>
        {transactions.length === 0 ? (
          <p>Non ci sono movimenti da mostrare.</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th scope="col">Descrizione</th>
                  <th scope="col">Data</th>
                  <th scope="col" className="amount">Importo</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.description}</td>
                    <td>{formatDate(transaction.date)}</td>
                    <td className="amount">{formatCurrency(transaction.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}
