import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getUsEggPrices = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/csv`);
    return data;
  } catch (e) {
    console.log('error in request');
  }
};
const getInternationalEggPrices = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/eggs`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export { getInternationalEggPrices, getUsEggPrices };
