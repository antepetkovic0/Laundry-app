import React, { useState } from "react";
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

const ShopForm = ({ data, onSubmit, formSubmitting }) => {
  const { name, slug, price, discount, image, content } = data;
  const [form, setForm] = useState({
    name,
    slug,
    price,
    discount,
    image,
    content,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form style={{ padding: "1rem 0" }} onSubmit={handleSubmit}>
      <FormUpper>
        <div>
          <Input
            type="text"
            name="name"
            label="Product Name"
            value={form.name}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="slug"
            label="Slug"
            value={form.slug}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="price"
            label="Price"
            value={form.price}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="discount"
            label="Discount"
            value={form.discount}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="image"
            label="Image URL"
            value={form.image}
            onChange={handleInputChange}
          />
        </div>
        <ImgHolder>
          <img
            src={form.image}
            alt="upload"
            onError={(e) => {
              e.target.onerror = null;
            }}
          />
        </ImgHolder>
      </FormUpper>
      <Textarea
        name="content"
        rows="5"
        placeholder="Enter about product..."
        value={form.content}
        onChange={handleInputChange}
      />
      <div style={{ textAlign: "right" }}>
        <Button type="submit" text="Save changes" isLoading={formSubmitting} />
      </div>
    </form>
  );
};

ShopForm.propTypes = {
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

export default ShopForm;
