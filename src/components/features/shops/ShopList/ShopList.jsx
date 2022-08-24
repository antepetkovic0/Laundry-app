import React from "react";
import PropTypes from "prop-types";

import EmptyMessage from "../../../shared/messages/EmptyMessage/EmptyMessage";
import ShopCard from "../ShopCard/ShopCard";
import DeleteShopDialog from "../DeleteShopDialog/DeleteShopDialog";

const ShopList = ({ shops }) => {
  if (!shops.length) return <EmptyMessage />;

  return (
    <div className="shops__list">
      {shops.map((shop) => (
        <ShopCard key={shop.id} shop={shop} />
      ))}
      <DeleteShopDialog />
    </div>
  );
};

ShopList.propTypes = {
  shops: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default ShopList;
