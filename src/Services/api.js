import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const apiKey = '39833580-35c77e6472e2da9ea800f27de';

export const fetchPics = async () => {
  try {
    const { data } = await axios.get('/?', 'images', {
      params: {
        key: apiKey,
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};
