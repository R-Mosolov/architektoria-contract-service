import { 
  ProductsActiveIcon, 
  PromotionsIcon, 
  CalculationsInactiveIcon 
} from '../../assets';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles['menu-item']}
        src={ProductsActiveIcon}
        alt="Иконка изделий"
      />
      <Image
        className={styles['menu-item']}
        src={PromotionsIcon}
        alt="Иконка акций"
      />
      <Image
        className={styles['menu-item']}
        src={CalculationsInactiveIcon}
        alt="Иконка расчетов"
      />
    </footer>
  );
};