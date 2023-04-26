import { PRODUCTS_LIST_ENDPOINT } from '../constants/endpoints';

export const getProductsList = async (setData) => {
  try {
    const response = await fetch(PRODUCTS_LIST_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Что-то пошло не так. Проверьте, запущен ли сервер');
    }

    const result = await response.json();
    console.log(result);

    return setData(result);
  } catch (error) {
    alert(error);
  } finally {
    // TODO: остановка спиннера
  }
};