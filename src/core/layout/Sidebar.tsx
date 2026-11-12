import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const menuItems = [
  { label: 'Dashboard', to: '/', end: true },
  { label: 'Conti', to: '/accounts' },
  { label: 'Investimenti', to: '/investments' },
  { label: 'Polizze', to: '/polizze' },
  { label: 'Admin', to: '/admin' },
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
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={'end' in item && item.end}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                onClick={onNavigate}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
