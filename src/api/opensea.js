export const API_ROOT = "https://api.opensea.io/api/v1/";

export const getCollectionDetails = (address) => {
  const options = { method: "GET", headers: {} };

  return fetch(`${API_ROOT}asset_contract/${address}`, options)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => console.error(err));
};
