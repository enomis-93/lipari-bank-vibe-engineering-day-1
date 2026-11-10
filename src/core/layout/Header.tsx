import type { RefObject } from 'react';
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
      <a className={styles.brand} href="#dashboard">
        LipariBank
      </a>
      <span className={styles.label}>Area personale</span>
    </header>
  );
}
