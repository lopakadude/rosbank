import styles from './styles.module.css';
import circlesfour from '../../assets/images/menubar/CirclesFour.svg';
import intersect from '../../assets/images/menubar/Intersect.svg';
import team from '../../assets/images/menubar/team.svg';
import nut from '../../assets/images/menubar/Nut.svg';
import avatar from '../../assets/images/menubar/Avatar.jpg';
import info from '../../assets/images/menubar/Info.svg'
export default function Menubar() {
  return (
    <div className={styles.menubar}>
      <div className={styles.menubar__buttons}>
        <button className={styles.menubar__button}>
          <img src={circlesfour} alt="circlesfour" />
        </button>
        <button className={styles.menubar__button}>
          <img src={intersect} alt="intersect" />
        </button>
        <button
          className={`${styles.menubar__button} ${styles.menubar__button_active}`}
        >
          <img src={team} alt="team" />
        </button>
        <button className={styles.menubar__button}>
          <img src={nut} alt="nut" />
        </button>
      </div>
      <div className={styles.menubar__profile}>
        <button className={styles.menubar__button}>
          <img src={avatar} alt="аватар" className={styles.menubar__avatar}/>
        </button>
        <button className={styles.menubar__button}>
          <img src={info} alt="информация" />
        </button>
      </div>
    </div>
  );
}
