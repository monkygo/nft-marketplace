export const API_ROOT = "https://api.looksrare.org/api/v1/";

export const getCollections = async (address) => {
  const response = await fetch(`${API_ROOT}/collections?address=${address}`);
  const json = await response.json();
  return json;
};

export const getTop15ListingRewardsCollections = async () => {
  const options = { method: "GET", headers: { accept: "application/json" } };
  const response = await fetch(
    "https://api.looksrare.org/api/v1/collections/listing-rewards",
    options
  );
  const json = await response.json();
  return json.data.map((collection) => collection);
};
