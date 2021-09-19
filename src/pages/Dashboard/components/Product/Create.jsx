import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../../../components/Button/Button";
import Input from "../../../Auth/components/Input";
import { createProduct } from "../../../../api/product";

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

const initialState = () => ({
  name: "",
  slug: "",
  price: "",
  discount: 0,
  image: "",
  content: "",
});

const Create = ({ shopId, closeForm }) => {
  const [form, setForm] = useState(initialState());
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, shopId);
    dispatch(createProduct({ ...form, shopId }));
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
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="slug"
            label="Slug"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="price"
            label="Price"
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="discount"
            label="Discount"
            onChange={handleInputChange}
          />
        </div>
        <ImgHolder>
          <img
            src={form.image}
            alt="upload"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.velprom.hr/attachment/thumbnail/5cef9a0c6b782/0445-za-kolace-zatvorena-natur.jpg?mode=auto&q=60";
              setForm({
                ...form,
                image:
                  "https://www.velprom.hr/attachment/thumbnail/5cef9a0c6b782/0445-za-kolace-zatvorena-natur.jpg?mode=auto&q=60",
              });
            }}
          />
        </ImgHolder>
      </FormUpper>
      <Textarea
        name="content"
        rows="5"
        placeholder="Enter about product..."
        onChange={handleInputChange}
      />
      <div style={{ textAlign: "right" }}>
        <Button type="subtle" text="Cancel" onClick={closeForm} />
        <Button type="submit" text="Add product" />
      </div>
    </form>
  );
};

Create.propTypes = {
  shopId: PropTypes.string.isRequired,
  closeForm: PropTypes.func.isRequired,
};

export default Create;
