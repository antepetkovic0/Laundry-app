import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../../../components/Button/Button";
import Input from "../../../Auth/components/Input";
import { createProduct, editProduct } from "../../../../api/product";

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

const Form = ({ initialState, shopId, closeForm, isEditMode }) => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    setForm(initialState);
  }, [isEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, shopId);
    if (isEditMode) {
      const { id, ...rest } = form;
      dispatch(editProduct(form.id, { ...rest, shopId }));
    } else {
      dispatch(createProduct({ ...form, shopId }));
    }
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
            type="text"
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
        value={form.content}
        onChange={handleInputChange}
      />
      <div style={{ textAlign: "right" }}>
        <Button type="subtle" text="Cancel" onClick={closeForm} />
        <Button type="submit" text="Submit product" />
      </div>
    </form>
  );
};

Form.propTypes = {
  initialState: PropTypes.shape.isRequired,
  shopId: PropTypes.string.isRequired,
  closeForm: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
};

export default Form;
