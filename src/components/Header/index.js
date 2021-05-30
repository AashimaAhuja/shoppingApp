import React, { useCallback, useState, useMemo } from "react";
import "./style.css";

const Header = ({ visibleProducts, testShowLikeditems }) => {
  const [showLikedItems, setShowLikedItems] = useState(testShowLikeditems || false);
  const onToggleLikedItems = useCallback(() => {
    setShowLikedItems((showLikedItems) => !showLikedItems);
  }, []);
  const likedProducts = useMemo(
    () => visibleProducts.filter(({ isLiked }) => isLiked),
    [visibleProducts]
  );

  return (
    <header className="app-header">
      <div className="likes-count" onClick={onToggleLikedItems}>
        <span>Likes {likedProducts.length}</span>
        <dl className={`liked-items ${showLikedItems ? " active" : ""}`}>
          {likedProducts.map(({ name, id }) => (
            <dt key={id}>{name}</dt>
          ))}
        </dl>
      </div>
    </header>
  );
};

export default Header;
