import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Textarea = styled.textarea`
  margin: 1.6rem 0;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid hsl(0, 0%, 80%);
  resize: none;
  display: block;
  width: 100%;

  &:focus {
    outline-color: #2684ff;
  }
`;

export const ImgHolder = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: inherit;
  }
`;

const FormUpper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShopForm = ({ formData, onInputChange, onSubmit, isSubmitting }) => {
  const { name, slug, address, image, about } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form style={{ padding: "1rem 0" }} onSubmit={handleSubmit}>
      <FormUpper>
        <div>
          <Input
            type="text"
            name="name"
            label="Shop Name"
            value={name}
            onChange={onInputChange}
          />
          <Input
            type="text"
            name="slug"
            label="Slug"
            value={slug}
            onChange={onInputChange}
          />
          <Input
            type="text"
            name="address"
            label="Address"
            value={address}
            onChange={onInputChange}
          />
          <Input
            type="text"
            name="image"
            label="Image URL"
            value={image}
            onChange={onInputChange}
          />
        </div>
        <ImgHolder>
          <img
            src={image}
            alt="upload"
            onError={(e) => {
              e.target.onerror = null;
              // e.target.src =
              //   "https://cdn.icon-icons.com/icons2/1706/PNG/512/3986701-online-shop-store-store-icon_112278.png";
              // setForm({
              //   ...form,
              //   image:
              //     "https://cdn.icon-icons.com/icons2/1706/PNG/512/3986701-online-shop-store-store-icon_112278.png",
              // });
            }}
          />
        </ImgHolder>
      </FormUpper>
      <Textarea
        name="about"
        rows="5"
        placeholder="Enter about shop..."
        value={about}
        onChange={onInputChange}
      />
      <div style={{ textAlign: "right" }}>
        <Button type="submit" text="Create shop" isLoading={isSubmitting} />
      </div>
    </form>
  );
};

ShopForm.propTypes = {
  formData: PropTypes.exact({
    name: PropTypes.string,
    slug: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ShopForm;
