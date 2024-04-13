import { useDateFormat } from '@vueuse/core';

export default (date) => {
  const formattedDate = useDateFormat(date, 'MM/DD/YYYY')
  return formattedDate.value;
}
