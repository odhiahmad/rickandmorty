import APIKit from './index';

export const getCharacter = async page => {
  try {
    const response = await APIKit({
      method: 'GET',
      url: 'character?page=' + page,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const getCharacterDetail = async id => {
  try {
    const response = await APIKit({
      method: 'GET',
      url: `character/${id}`,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
