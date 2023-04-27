import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { 
  LeftArrowIcon, 
  LogoImg,
} from '../assets';
import Image from 'next/image';
import { Footer, PageHead, Product } from '@/components';
import { getProduct } from '@/services';
import styles from '../styles/Home.module.css';
import detailsStyles from '../styles/ProductDetails.module.css';
import Link from 'next/link';

const ProductDetails = () => {
  const router = useRouter();
  const { tab } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    getProduct(setData, 'olimpiya', tab);
  }, [tab]);

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
          <span>Кровать Олимпия</span>
        </h1>
        <nav>
          <ul className={detailsStyles['properties__menu']}>
            <Link href="/products?tab=materials" style={{ textDecoration: 'none' }}>
              <li className={
                `${detailsStyles['properties__item']} ${
                  tab === 'materials' && detailsStyles['properties__item_active']
                }`
              }>Обивка</li>
            </Link>
            <Link href="/products?tab=sizes" style={{ textDecoration: 'none' }}>
              <li className={
                `${detailsStyles['properties__item']} ${
                  tab === 'sizes' && detailsStyles['properties__item_active']
                }`
              }>Размер</li>
            </Link>
            <Link href="/products?tab=base" style={{ textDecoration: 'none' }}>
              <li className={
                `${detailsStyles['properties__item']} ${
                  tab === 'base' && detailsStyles['properties__item_active']
                }`
              }>Основание</li>
            </Link>
            <Link href="/products?tab=options" style={{ textDecoration: 'none' }}>
              <li className={
                `${detailsStyles['properties__item']} ${
                  tab === 'options' && detailsStyles['properties__item_active']
                }`
              }>Доп. опции</li>
            </Link>
          </ul>
        </nav>
        {tab === 'materials' && <h2>Рогожка премиум</h2>}
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

export default ProductDetails;