import styles from './styles.module.css';

export default function Navtab({ tabsList, setState, state } :
  {tabsList : {nameRU: string, nameState: string}[];
  setState: (state: string) => void;
  state: string;}
) {

  return (
    <nav className={styles.nav}>
      {tabsList.map((tab) => (
        <button
          key={tab.nameState}
          className={`${styles.nav__button} ${
            state === tab.nameState && styles.nav__button_active
          }`}
          onClick={() => {
            setState(tab.nameState);
          }}
        >
          {tab.nameRU}
        </button>
      ))}
    </nav>
  );
}
