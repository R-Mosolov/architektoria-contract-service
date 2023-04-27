import { PRODUCTS_LIST_ENDPOINT } from '../constants/endpoints';

export const getProduct = async (setData, slug, key) => {
  try {
    const response = await fetch(`${PRODUCTS_LIST_ENDPOINT}/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Что-то пошло не так. Проверьте, запущен ли сервер');
    }

    const result = await response.json();

    return setData(result.properties[key]);
  } catch (error) {
    alert(error);
  } finally {
    // TODO: остановка спиннера
  }
};