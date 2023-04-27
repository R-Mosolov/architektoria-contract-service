import { useState, useEffect, useMemo } from 'react';
import { 
  LeftArrowIcon, 
  LogoImg,
} from '../assets';
import Image from 'next/image';
import { Footer, PageHead, Product } from '@/components';
import { getProductsList } from '@/services';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getProductsList(setData);
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <>
      <PageHead />
      <main>
        <header>
          <Image
            className={styles.logo}
            src={LogoImg}
            alt="Лого"
          />
        </header>
        <h1>
          <span>
            <Image
              className={styles.logo}
              src={LeftArrowIcon}
              alt="Иконка возврата"
            />
          </span>
          <span>Кровати</span>
        </h1>
        <ul className={styles.list}>
          {memoizedData?.map(({
            title,
            image,
            price,
          }, index) => <li key={index} className={styles.item}>
            <Product
              title={title}
              src={image}
              price={price}
            />
          </li>)}
        </ul>
        <Footer />
      </main>
    </>
  )
};

export default Home;