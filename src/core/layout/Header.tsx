import type { RefObject } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

interface HeaderProps {
  menuButtonRef: RefObject<HTMLButtonElement | null>;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Header({ menuButtonRef, sidebarOpen, onToggleSidebar }: HeaderProps) {
  return (
    <header className={styles.header}>
      <button
        className={styles.menuButton}
        ref={menuButtonRef}
        type="button"
        aria-controls="app-navigation"
        aria-expanded={sidebarOpen}
        onClick={onToggleSidebar}
      >
        {sidebarOpen ? 'Chiudi menu' : 'Menu'}
      </button>
      <Link className={styles.brand} to="/">
        🏦 LipariBank
      </Link>
      <div className={styles.user}>
        <span className={styles.userIcon} aria-hidden="true">
          👤
        </span>
        <span aria-label="Utente segnaposto">Utente</span>
      </div>
    </header>
  );
}
