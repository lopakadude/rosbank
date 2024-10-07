import styles from './styles.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import{ useState } from 'react';
import arrowDown from '../../assets/images/menubar/arrowDown.svg';


export default function Filter({ activeTab } : {activeTab: string}) {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [isOpenTeams, setIsOpenTeams] = useState(false);
  const [isOpenСompetence, setIsOpenСompetence] = useState(false);
  const [isOpenSkills, setIsOpenSkills] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenGrades, setIsOpenGrades] = useState(false);

  return (
    <section className={styles.section}>
      <h1 className={styles.section__title}>Ревью команды</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={styles.menu__list}>
          <li
            className={styles.menu__group}
            onMouseLeave={() => {
              setIsOpenTeams(false);
            }}
          >
            <p
              className={styles.menu__groupName}
              onMouseEnter={() => {
                setIsOpenTeams(true);
              }}
            >
              Выберите команду: Все
            </p>
            <ul
              className={`${styles.menu__groupList} ${
                isOpenTeams ? styles.menu__groupList_active : ''
              }`}
            >
              <li className={styles.menu__item}>Участники</li>
              <li className={styles.menu__item}>Специальности</li>
              <li
                className={`${styles.menu__item} ${styles.menu__item_active}`}
              >
                Ревью команды
              </li>
              <li className={styles.menu__item}>Запросы на обучение</li>
            </ul>
            <button
              className={styles.menu__arrowButton}
              onClick={() => {
                setIsOpenTeams(!isOpenTeams);
              }}
            >
              <img
                className={`${styles.menu__arrow} ${
                  isOpenTeams ? styles.menu__arrow_active : ''
                }`}
                src={arrowDown}
                alt="arrow"
              />
            </button>
          </li>
          <li
            className={styles.menu__group}
            onMouseLeave={() => {
              setIsOpenСompetence(false);
            }}
          >
            <p
              className={styles.menu__groupName}
              onMouseEnter={() => {
                setIsOpenСompetence(true);
              }}
            >
              Выберите компетенцию: Все{' '}
            </p>
            <ul
              className={`${styles.menu__groupList} ${
                isOpenСompetence ? styles.menu__groupList_active : ''
              }`}
            >
              <li className={styles.menu__item}>Участники</li>
              <li className={styles.menu__item}>Специальности</li>
              <li
                className={`${styles.menu__item} ${styles.menu__item_active}`}
              >
                Ревью команды
              </li>
              <li className={styles.menu__item}>Запросы на обучение</li>
            </ul>
            <button
              className={styles.menu__arrowButton}
              onClick={() => {
                setIsOpenСompetence(!isOpenСompetence);
              }}
            >
              <img
                className={`${styles.menu__arrow} ${
                  isOpenСompetence ? styles.menu__arrow_active : ''
                }`}
                src={arrowDown}
                alt="arrow"
              />
            </button>
          </li>
          <li
            className={styles.menu__group}
            onMouseLeave={() => {
              setIsOpenSkills(false);
            }}
          >
            <p
              className={styles.menu__groupName}
              onMouseEnter={() => {
                setIsOpenSkills(true);
              }}
            >
              Выберите навык: Все
            </p>
            <ul
              className={`${styles.menu__groupList} ${
                isOpenSkills ? styles.menu__groupList_active : ''
              }`}
            >
              <li className={styles.menu__item}>Участники</li>
              <li className={styles.menu__item}>Специальности</li>
              <li
                className={`${styles.menu__item} ${styles.menu__item_active}`}
              >
                Ревью команды
              </li>
              <li className={styles.menu__item}>Запросы на обучение</li>
            </ul>
            <button
              className={styles.menu__arrowButton}
              onClick={() => {
                setIsOpenSkills(!isOpenSkills);
              }}
            >
              <img
                className={`${styles.menu__arrow} ${
                  isOpenSkills ? styles.menu__arrow_active : ''
                }`}
                src={arrowDown}
                alt="arrow"
              />
            </button>
          </li>
          {activeTab !== 'equipment' && (
            <li
              className={styles.menu__group}
              onMouseLeave={() => {
                setIsOpenDate(false);
              }}
            >
              <p
                className={styles.menu__groupName}
                onMouseEnter={() => {
                  setIsOpenDate(true);
                }}
              >
                Выберите дату: Сегодня
              </p>
              <ul
                className={`${styles.menu__groupList} ${
                  isOpenDate ? styles.menu__groupList_active : ''
                }`}
              >
                <li className={styles.menu__item}>Участники</li>
                <li className={styles.menu__item}>Специальности</li>
                <li
                  className={`${styles.menu__item} ${styles.menu__item_active}`}
                >
                  Ревью команды
                </li>
                <li className={styles.menu__item}>Запросы на обучение</li>
              </ul>
              <button
                className={styles.menu__arrowButton}
                onClick={() => {
                  setIsOpenDate(!isOpenDate);
                }}
              >
                <img
                  className={`${styles.menu__arrow} ${
                    isOpenDate ? styles.menu__arrow_active : ''
                  }`}
                  src={arrowDown}
                  alt="arrow"
                />
              </button>
            </li>
          )}
          <li
            className={styles.menu__group}
            onMouseLeave={() => {
              setIsOpenGrades(false);
            }}
          >
            <p
              className={styles.menu__groupName}
              onMouseEnter={() => {
                setIsOpenGrades(true);
              }}
            >
              Выберите грейд: Все
            </p>
            <ul
              className={`${styles.menu__groupList} ${
                isOpenGrades ? styles.menu__groupList_active : ''
              }`}
            >
              <li className={styles.menu__item}>Участники</li>
              <li className={styles.menu__item}>Специальности</li>
              <li
                className={`${styles.menu__item} ${styles.menu__item_active}`}
              >
                Ревью команды
              </li>
              <li className={styles.menu__item}>Запросы на обучение</li>
            </ul>
            <button
              className={styles.menu__arrowButton}
              onClick={() => {
                setIsOpenGrades(!isOpenGrades);
              }}
            >
              <img
                className={`${styles.menu__arrow} ${
                  isOpenGrades ? styles.menu__arrow_active : ''
                }`}
                src={arrowDown}
                alt="arrow"
              />
            </button>
          </li>
        </ul>
      </form>
    </section>
  );
}
