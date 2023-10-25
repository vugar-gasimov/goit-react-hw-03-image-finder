import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const apiKey = '39833580-35c77e6472e2da9ea800f27de';

export const fetchPics = async params => {
  const { data } = await axios.get('', {
    params: {
      key: apiKey,
      ...params,
    },
  });
  return data;
};
