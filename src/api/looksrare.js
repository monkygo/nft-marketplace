export const API_ROOT = "https://api.looksrare.org/api/v1/";

export const getCollections = async (address) => {
  const response = await fetch(`${API_ROOT}/collections?address=${address}`);
  const json = await response.json();
  return json;
};
