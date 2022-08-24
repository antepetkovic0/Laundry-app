import React from "react";
import PropTypes from "prop-types";

import { useInput } from "../../../../hooks/useInput";
import Button from "../../../core/Button/Button";
import InputField from "../../../shared/fields/InputField/InputField";
import TextAreaField from "../../../shared/fields/TextAreaField/TextAreaField";

const ShopForm = ({ data, onSubmit, formSubmitting }) => {
  const [name, { handleInputChange: handleNameChange }] = useInput(data.name);
  const [slug, { handleInputChange: handleSlugChange }] = useInput(data.slug);
  const [address, { handleInputChange: handleAddressChange }] = useInput(
    data.address
  );
  const [image, { handleInputChange: handleImageChange }] = useInput(
    data.image
  );
  const [about, { handleInputChange: handleAboutChange }] = useInput(
    data.about
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, slug, address, image, about });
  };

  return (
    <form className="shop-form" onSubmit={handleSubmit}>
      <InputField
        name="name"
        type="text"
        label="Shop name"
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
        name="address"
        type="text"
        label="Address"
        value={address}
        onChange={handleAddressChange}
      />
      <InputField
        name="image"
        type="text"
        label="Image"
        value={image}
        onChange={handleImageChange}
      />
      <div className="shop-form__upload-box">
        <img
          className="shop-form__upload-image"
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
        value={about}
        onChange={handleAboutChange}
      />
      <Button text="Save changes" isLoading={formSubmitting} fullWidth />
    </form>
  );
};

ShopForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
  formSubmitting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ShopForm;
