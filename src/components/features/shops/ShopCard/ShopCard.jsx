import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { showDialog } from "../../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../../constants/dialogType";
import { ROLES } from "../../../../constants/roles";
import Icon from "../../../core/Icon/Icon";
import AnchorLink from "../../../core/AnchorLink/AnchorLink";

const ShopCard = ({ shop }) => {
  const { id, name, slug, address, image, about } = shop;
  const { title } = useSelector((state) => state.profile.role);

  const dispatch = useDispatch();

  const handleOpenDeleteDialog = () => {
    dispatch(
      showDialog(DIALOG_TYPE.SHOP_DELETE, {
        shopId: id,
      })
    );
  };

  return (
    <div className="shop-card">
      <div className="shop-card__content">
        <img className="shop-card__image" src={image} alt="Shop" />
        <div className="shop-card__description">
          <h4 className="shop-card__name">{name}</h4>
          <p>{address}</p>
          <p>{about}</p>
        </div>
      </div>
      <div className="shop-card__actions">
        {title === ROLES.SERVICE && (
          <>
            <div className="action-icon-item">
              <AnchorLink href={`/app/shops/edit?slug=${slug}`}>
                <Icon name="edit" />
              </AnchorLink>
            </div>
            <div
              className="action-icon-item"
              role="button"
              tabIndex="0"
              onClick={() => handleOpenDeleteDialog()}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  handleOpenDeleteDialog();
                }
              }}
            >
              <Icon name="delete" />
            </div>
          </>
        )}
        <div className="action-icon-item">
          <AnchorLink href={`/app/shops/${slug}`}>
            <Icon name="next" />
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  shop: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
};

export default ShopCard;
