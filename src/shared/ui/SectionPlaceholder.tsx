import styles from './SectionPlaceholder.module.css';

interface SectionPlaceholderProps {
  title: string;
}

export function SectionPlaceholder({ title }: SectionPlaceholderProps) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <p>Questa sezione sarà disponibile prossimamente.</p>
    </section>
  );
}
