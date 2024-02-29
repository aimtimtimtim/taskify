import React from 'react';
import styles from './styles.module.scss'
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.mark}>
                    <span className={styles.topElement}></span>
                    <span className={styles.bottomElement}></span>
                </div>
                <span className={styles.logoText}>createe.</span>
            </div>
            <div className={styles.sidebarContent}>
                <div className={styles.menu}>
                    <p className={`${styles.menuItem} ${styles.active}`}>Calendar</p>
                    <p className={styles.menuItem}>Planned </p>
                </div>
                <span className={styles.version}>Version 1.0</span>
            </div>

        </div>
    );
};

export default Sidebar;
