import React from 'react';
import { LucideIcon } from 'lucide-react';
import styles from '../app/page.module.css';

interface ContentSection {
    title: string;
    description: string | React.ReactNode;
    icon?: LucideIcon;
    imageAlt?: string;
}

interface ToolContentProps {
    title: string;
    intro: string;
    sections: ContentSection[];
}

const ToolContent: React.FC<ToolContentProps> = ({ title, intro, sections }) => {
    return (
        <section className={styles.toolContentWrapper}>
            <div className={styles.contentHeader}>
                <h2>{title}</h2>
                <p>{intro}</p>
            </div>

            <div className={styles.zigZagContainer}>
                {sections.map((section, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className={`${styles.zigZagRow} ${isEven ? styles.rowNormal : styles.rowReverse}`}>

                            <div className={styles.textContent}>
                                <h3>{section.title}</h3>
                                <div className={styles.textBody}>
                                    {typeof section.description === 'string' ? <p>{section.description}</p> : section.description}
                                </div>
                            </div>

                            <div className={styles.visualContent}>
                                <div className={styles.visualCard}>
                                    {section.icon && <section.icon size={64} strokeWidth={1.5} />}
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ToolContent;
