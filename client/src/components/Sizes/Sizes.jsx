import { transformPrice } from "@/utils";
import styles from './Sizes.module.css';

export const Sizes = ({ data, price = 30000 }) => {
  const filterData = (length) => data 
    && data.filter(({ size }) => size?.length === length);

  const renderList = (length) => {
    return filterData(length)?.map(({ size }, index) => {
      const { length, width, percent_price } = size;
      const sign = percent_price < 0 ? '-' : '+'; 
      const coefficient = (percent_price < 0) 
        ? percent_price * -1 
        : percent_price;
      const handledPrice = length === 190 && width === 110
        ? price / 100 * 17
        : price / 100 * coefficient;

      return (
        <div key={index} className={styles.item}>
          <div className={styles['size-container']}>
            <h3>{`${width}x${length}`}</h3>
          </div>
          <span className="size-price">
            {percent_price === 0
              ? 'Без доплаты'
              : `${sign} ${transformPrice(handledPrice)}`}
          </span>
        </div>
      );
    })
  };

  return (
    <div>
      <h2>Длина 190 см</h2>
      <div className={styles.list}>
        {renderList(190)}
      </div>
      <h2>Длина 200 см</h2>
      <div className={styles.list}>
        {renderList(200)}
      </div>
      <h2>Длина 210 см</h2>
      <div className={styles.list}>
        {renderList(210)}
      </div>
    </div>
  );
};