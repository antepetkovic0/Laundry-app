import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { ROLES } from "../../../constants/roles";
import { showDialog } from "../../../store/actions/dialog";
import { DIALOG_TYPE } from "../../../utils/constants";
import Button from "../../core/Button/Button";
import Icon from "../../core/Icon/Icon";
import Tag from "../../core/Tag/Tag";

import CaretBackLink from "../../shared/navigations/CaretBackLink/CaretBackLink";
import DeleteProductDialog from "./DeleteProductDialog/DeleteProductDialog";

const SpecificProduct = () => {
  // TODO change slug to shopSlug
  const { slug: shopSlug, productSlug } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const { title } = useSelector((state) => state.profile.role);

  const shops = useSelector((state) => state.shops.list);
  const shop = shops?.find((item) => item.slug === shopSlug);

  const products = useSelector((state) => state.products?.[shop.id]?.list);
  const product = products.find((p) => p.slug === productSlug);

  const productAlreadyInCart = useSelector((state) => state.cart?.[product.id]);

  const handleOpenDeleteDialog = () => {
    dispatch(
      showDialog(DIALOG_TYPE.PRODUCT_DELETE, {
        shopId: shop.id,
        productId: product.id,
      })
    );
  };

  const handleEditNavigate = () => {
    history.push(`/app/shops/${shopSlug}/edit?productSlug=${productSlug}`);
  };

  return (
    <>
      <CaretBackLink href={`/app/shops/${shopSlug}`} title="Product details" />
      <div className="product">
        <img className="product__image" src={product.image} alt="Product" />
        <div className="product__name">
          <span>{product.name}</span>
          {title === ROLES.SERVICE && (
            <div className="product__actions">
              <div
                className="action-icon-item"
                role="button"
                tabIndex="0"
                onClick={handleEditNavigate}
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    handleEditNavigate();
                  }
                }}
              >
                <Icon name="edit" />
              </div>
              <div
                className="action-icon-item"
                role="button"
                tabIndex="0"
                onClick={handleOpenDeleteDialog}
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    handleOpenDeleteDialog();
                  }
                }}
              >
                <Icon name="delete" />
              </div>
            </div>
          )}
        </div>
        <div className="product__discount">
          <Tag text={`Save ${product.discount}%`} appearance="DANGER" />
        </div>
        <div className="product__information">
          <h3>Information</h3>
          <div className="product__information-text">{product.content}</div>
        </div>
        <div className="product__footer-box">
          <div className="product__price">
            <span className="product__dollar">$</span>
            {product.price}
          </div>
          {title === ROLES.USER && (
            <div className="product__cart">
              <Button
                text={productAlreadyInCart ? "Already in cart" : "Add to cart"}
              />
            </div>
          )}
        </div>
      </div>
      <DeleteProductDialog />
    </>
  );
};

export default SpecificProduct;
