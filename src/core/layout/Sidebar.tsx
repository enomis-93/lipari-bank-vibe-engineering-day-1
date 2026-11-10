import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const menuItems = [
  { label: 'Dashboard', hash: '#dashboard' },
  { label: 'Movimenti recenti', hash: '#transactions-title' },
] as const;

interface SidebarProps {
  open: boolean;
  onNavigate: () => void;
}

export function Sidebar({ open, onNavigate }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
      <nav id="app-navigation" aria-label="Navigazione principale">
        <ul className={styles.links}>
          {menuItems.map((item) => (
            <li key={item.hash}>
              <Link to={{ hash: item.hash }} onClick={onNavigate}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
