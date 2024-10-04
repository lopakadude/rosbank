import styles from './styles.module.css';
import Menubar from '../../components/Menubar';
import MenuList from '../../components/MenuList';
import Content from '../../components/Content';

// import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  // const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <Menubar />
      <MenuList />
      <Content />
    </section>
  );
}
