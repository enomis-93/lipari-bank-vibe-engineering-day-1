import { formatCurrency } from '@/shared/formatters';
import styles from './StatCard.module.css';

interface StatCardProps {
  label: string;
  value: number;
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.label}>{label}</h2>
      <p className={styles.value}>{formatCurrency(value)}</p>
    </div>
  );
}
