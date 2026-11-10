import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styles from './AppShell.module.css';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const { hash, key } = useLocation();

  useLayoutEffect(() => {
    if (!hash || hash === '#dashboard') {
      mainRef.current?.scrollTo({ top: 0 });
    } else {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, key]);

  return (
    <div
      className={styles.shell}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && sidebarOpen) {
          setSidebarOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <Header
        menuButtonRef={menuButtonRef}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((open) => !open)}
      />
      <div className={styles.body}>
        <Sidebar open={sidebarOpen} onNavigate={() => setSidebarOpen(false)} />
        <main className={styles.main} id="dashboard" ref={mainRef} tabIndex={0}>
          <div className={styles.content}>{children}</div>
        </main>
      </div>
    </div>
  );
}
