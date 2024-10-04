import styles from './styles.module.css';
import arrowDown from '../../assets/images/menubar/arrowDown.svg';
import { useState } from 'react';

export default function MenuList() {
  const [isOpenManage, setIsOpenManage] = useState(true);
  const [isOpenFreelancers, setIsOpenFreelancers] = useState(false);
  return (
    <div className={styles.menu}>
      <p className={styles.menu__title}>Команды</p>
      <ul className={styles.menu__list}>
        <li className={styles.menu__group}>
          <p className={styles.menu__groupName}>Product Management</p>
          <ul
            className={`${styles.menu__groupList} ${
              isOpenManage ? styles.menu__groupList_active : ''
            }`}
          >
            <li className={styles.menu__item}>Участники</li>
            <li className={styles.menu__item}>Специальности</li>
            <li className={`${styles.menu__item} ${styles.menu__item_active}`}>Ревью команды</li>
            <li className={styles.menu__item}>Запросы на обучение</li>
          </ul>
          <button
            className={styles.menu__arrowButton}
            onClick={() => {
              setIsOpenManage(!isOpenManage);
            }}
          >
            <img
              className={`${styles.menu__arrow} ${
                isOpenManage ? styles.menu__arrow_active : ''
              }`}
              src={arrowDown}
              alt="arrow"
            />
          </button>
        </li>
        <li className={styles.menu__group}>
          <p className={styles.menu__groupName}>Дизайнеры на фрилансе</p>
          <button
            className={styles.menu__arrowButton}
            onClick={() => {
              setIsOpenFreelancers(!isOpenFreelancers);
            }}
          >
            <img
              className={`${styles.menu__arrow} ${
                isOpenFreelancers ? styles.menu__arrow_active : ''
              }`}
              src={arrowDown}
              alt="arrow"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
