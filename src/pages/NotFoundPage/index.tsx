import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__main}>
        <h1 className={styles.notFound__title}>Упс, не туда свернул!</h1>
        <p className={styles.notFound__description}>
          Этой страницы пока нет, но&nbsp;мы&nbsp;скоро&nbsp;забомбим&nbsp;её для тебя!
        </p>
      </div>
      <div
        className={styles.notFound__buttonToMain}
        onClick={() => navigate('/', { replace: true })}
      >
      </div>
    </section>
  );
}
