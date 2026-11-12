import { useDashboard } from '@/hooks/useDashboard';
import { StatCard } from '@/shared/ui/StatCard';
import { AccountSummaryCard } from '@/features/dashboard/components/AccountSummaryCard';
import { MovementRow } from '@/features/dashboard/components/MovementRow';
import styles from './Dashboard.module.css';

export function Dashboard() {
  const { account, balance, income, expenses, transactions } = useDashboard();

  return (
    <>
      <section className={styles.heading} aria-labelledby="dashboard-title">
        <p className={styles.eyebrow}>Area personale</p>
        <h1 id="dashboard-title">La tua dashboard</h1>
        <p>Una panoramica delle tue finanze.</p>
        <p className={styles.demoNotice}>Dati dimostrativi: nessun conto reale è collegato.</p>
      </section>

      <section className={styles.accounts} aria-label="I tuoi conti">
        <AccountSummaryCard account={account} />
      </section>

      <section className={styles.stats} aria-label="Riepilogo finanziario">
        <StatCard label="Saldo disponibile" value={balance} />
        <StatCard label="Entrate del mese" value={income} />
        <StatCard label="Uscite del mese" value={expenses} />
      </section>

      <section className={styles.panel} aria-labelledby="transactions-title">
        <h2 className={styles.panelTitle} id="transactions-title">
          Movimenti recenti
        </h2>
        {transactions.length === 0 ? (
          <p>Non ci sono movimenti da mostrare.</p>
        ) : (
          <ul className={styles.movements}>
            {transactions.map((movement) => (
              <MovementRow key={movement.id} movement={movement} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
