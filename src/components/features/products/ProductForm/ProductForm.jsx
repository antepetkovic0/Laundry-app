import React from "react";
import PropTypes from "prop-types";

import { useInput } from "../../../../hooks/useInput";
import InputField from "../../../shared/fields/InputField/InputField";
import TextAreaField from "../../../shared/fields/TextAreaField/TextAreaField";
import Button from "../../../core/Button/Button";

const ProductForm = ({ data, onSubmit, formSubmitting }) => {
  const [name, { handleInputChange: handleNameChange }] = useInput(data.name);
  const [slug, { handleInputChange: handleSlugChange }] = useInput(data.slug);
  const [price, { handleInputChange: handlePriceChange }] = useInput(
    data.price
  );
  const [discount, { handleInputChange: handleDiscountChange }] = useInput(
    data.discount
  );
  const [image, { handleInputChange: handleImageChange }] = useInput(
    data.image
  );
  const [content, { handleInputChange: handleContentChange }] = useInput(
    data.content
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, slug, price, discount, image, content });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <InputField
        name="name"
        type="text"
        label="Name"
        value={name}
        onChange={handleNameChange}
      />
      <InputField
        name="slug"
        type="text"
        label="Slug"
        value={slug}
        onChange={handleSlugChange}
      />

      <InputField
        name="price"
        type="number"
        label="Price"
        value={price}
        onChange={handlePriceChange}
      />
      <InputField
        name="discount"
        type="number"
        label="Discount"
        value={discount}
        onChange={handleDiscountChange}
      />
      <InputField
        name="image"
        type="text"
        label="Image"
        value={image}
        onChange={handleImageChange}
      />
      <div className="product-form__upload-box">
        <img
          className="product-form__upload-image"
          src={image}
          alt="Upload"
          onError={(e) => {
            e.target.onerror = null;
          }}
        />
      </div>
      <TextAreaField
        name="about"
        label="About"
        value={content}
        onChange={handleContentChange}
      />
      <Button text="Save changes" isLoading={formSubmitting} fullWidth />
    </form>
  );
};

ProductForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    price: PropTypes.string,
    discount: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  formSubmitting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
