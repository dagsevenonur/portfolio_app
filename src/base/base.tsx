import styles from './base.module.scss';

export default function MaxContent({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.maxContent}>
            {children}
        </div>
    )
}

