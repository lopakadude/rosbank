import styles from './styles.module.css';
import Navtab from '../../components/Navtab';
import Filter from '../../components/Filter';
import { useState } from 'react';

export default function Content() {
  const [activeTab, setActiveTab] = useState('general');
  return (
    <section className={styles.section}>
      <h1 className={styles.section__title}>Ревью команды</h1>
      <Navtab
        tabsList={[
          { nameRU: 'Общая', nameState: 'general' },
          { nameRU: 'Развитие команды', nameState: 'growth' },
          { nameRU: 'Вовлеченность команды', nameState: 'engagement' },
          { nameRU: 'Комплектация команды', nameState: 'equipment' },
        ]}
        setState={setActiveTab}
        state={activeTab}
      />
      <Filter activeTab = {activeTab}/>
      {activeTab === 'general' && (
        <div className={styles.section__content}>Общая</div>
      )}
      {activeTab === 'growth' && (
        <div className={styles.section__content}>Развитие команды</div>
      )}
      {activeTab === 'engagement' && (
        <div className={styles.section__content}>Вовлеченность команды</div>
      )}
      {activeTab === 'equipment' && (
        <div className={styles.section__content}>Комплектация команды</div>
      )}
    </section>
  );
}
