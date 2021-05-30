const DOMAIN_NAME = `https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1`;
const PRODUCT_API_URL = `${DOMAIN_NAME}/products`;

export function getProductList(url = PRODUCT_API_URL) {
  return fetch(url)
    .then((res) => res.json())
}
