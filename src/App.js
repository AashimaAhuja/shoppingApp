import React, { useState } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import ProductsTitle from "./components/ProductsTitle";
import { getProductList } from "./services/productService";
import "./App.css";

function App({
  testIsLoading,
  testShowSoldItems,
  testVisibleProducts
}) {
  const [productList, setProductList] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(testVisibleProducts ?? []);
  const [showSoldItems, setShowSoldItems] = useState(testShowSoldItems ?? true);
  const [isLoading, setIsLoading] = useState(testIsLoading ?? true);

  React.useEffect(() => {
    getProductList()
      .then(setProductList)
      .catch(console.log("Error occured"))
      .finally(setIsLoading(false));
  }, []);

  React.useEffect(() => {
    if (showSoldItems) {
      setVisibleProducts(productList);
    } else {
      let filteredProducts = visibleProducts.filter((product) => !product.sold);
      setVisibleProducts(filteredProducts);
    }
  }, [productList, showSoldItems, visibleProducts]);

  const onToggleSoldItems = React.useCallback(() => {
    setShowSoldItems((showSoldItems) => !showSoldItems);
  }, []);

  const onProductLike = React.useCallback(
    (id) => {
      let likedProduct = visibleProducts.find((product) => product.id === id);
      likedProduct.isLiked = !likedProduct.isLiked;
      setVisibleProducts([...visibleProducts]);
    },
    [visibleProducts]
  );

  return (
    <div className="App">
      <Header visibleProducts={visibleProducts} />
      {isLoading && <div className='loading'>Loading</div>}
      {!isLoading && visibleProducts.length > 0 && (
        <main>
          <ProductsTitle
            productsCount={visibleProducts.length}
            onToggleSoldItems={onToggleSoldItems}
            showSoldItems={showSoldItems}
          />
          <CardList products={visibleProducts} onProductLike={onProductLike} />
        </main>
      )}
    </div>
  );
}

export default App;
