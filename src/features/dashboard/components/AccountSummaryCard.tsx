import type { Account } from '@/types/banking';
import { formatCurrency } from '@/shared/formatters';
import styles from './AccountSummaryCard.module.css';

interface AccountSummaryCardProps {
  account: Account;
}

export function AccountSummaryCard({ account }: AccountSummaryCardProps) {
  const truncatedIban = `${account.iban.slice(0, 4)}…${account.iban.slice(-4)}`;

  return (
    <article className={styles.card} aria-label={`Conto ${account.name}`}>
      <div className={styles.heading}>
        <h2 className={styles.name}>{account.name}</h2>
        <span className={styles.type}>{account.type}</span>
      </div>
      <p className={styles.iban}>
        <span className={styles.label}>IBAN</span>
        <span title={account.iban}>{truncatedIban}</span>
      </p>
      <p className={styles.balanceLabel}>Saldo</p>
      <p className={styles.balance}>{formatCurrency(account.balance)}</p>
    </article>
  );
}
