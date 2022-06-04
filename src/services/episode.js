import APIKit from './index';

export const getEpisode = async page => {
  try {
    const response = await APIKit({
      method: 'GET',
      url: 'episode?page=' + page,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
