import type { Movement } from '@/types/banking';
import { formatCurrency, formatDate } from '@/shared/formatters';
import styles from './MovementRow.module.css';

interface MovementRowProps {
  movement: Movement;
}

export function MovementRow({ movement }: MovementRowProps) {
  const amountClass =
    movement.amount > 0 ? styles.income : movement.amount < 0 ? styles.expense : styles.neutral;
  const sign = movement.amount > 0 ? '+' : movement.amount < 0 ? '−' : '';

  return (
    <li className={styles.row}>
      <div className={styles.details}>
        <p className={styles.description}>{movement.description}</p>
        <time className={styles.date} dateTime={movement.date}>
          {formatDate(movement.date)}
        </time>
      </div>
      <span className={styles.category}>{movement.category}</span>
      <span className={`${styles.amount} ${amountClass}`}>
        <span className={styles.visuallyHidden}>
          {movement.amount > 0 ? 'Entrata' : movement.amount < 0 ? 'Uscita' : 'Importo'}:
        </span>
        {sign}
        {formatCurrency(Math.abs(movement.amount))}
      </span>
    </li>
  );
}
