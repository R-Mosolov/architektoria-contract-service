import Image from 'next/image';
import { PUBLIC_SERVER_HOST } from "@/constants/endpoints";
import styles from "./Product.module.css";
import { PlusIcon } from "@/assets";

export const Product = ({
  title = 'Без названия',
  price = 'Без цены',
  alt = 'Изображение товара',
  src,
}) => {
  return (
    <div>
      {src
        ? (
          <div>
            <img className={styles.image} alt={alt} src={PUBLIC_SERVER_HOST + src} />
            <Image
              className={styles.add}
              src={PlusIcon}
              alt="Иконка добавления"
            />
          </div>
        ) : (
          <div className="no-image">
            <p>Нет изображения</p>
            <Image
              className={styles['add-without-img']}
              src={PlusIcon}
              alt="Иконка добавления"
            />
          </div>
        )}
      <h3>{title}</h3>
      <div>
        <span className="new-price">{price}</span>
        <span className="old-price">{price}</span>
      </div>
    </div>
  );
};