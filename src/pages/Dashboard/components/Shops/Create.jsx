import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createShop } from "../../../../api/shop";
import Button from "../../../../components/Button/Button";
import Back from "../../../../components/Link/Back";
import Input from "../../../Auth/components/Input";

const initialState = () => ({
  name: "",
  slug: "",
  address: "",
  image: "",
  about: "",
});

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

const Create = () => {
  const [form, setForm] = useState(() => initialState());
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("blaba");
    console.log(form);
    dispatch(createShop(form));
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const isValid = isValidForm();
  //   if (!isValid) {
  //     alert("passwords dont match");
  //     return;
  //   }

  //   try {
  //     const { data } = await auth(form);
  //     if (data.message) {
  //       toastMessage(data.message, TOAST_TYPE.SUCCESS);
  //     } else {
  //       // localStorage.setItem("isAuth", true);
  //       // dispatch(setUserProfile(data));
  //       history.push(`/dashboard`);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     toastMessage(err.response.data.error.message, TOAST_TYPE.ERROR);
  //   }
  // };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Back to="/dashboard/shops" title="Create new shop" />
      <form style={{ padding: "1rem 0" }} onSubmit={handleSubmit}>
        <FormUpper>
          <div>
            <Input
              type="text"
              name="name"
              label="Shop Name"
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
              name="address"
              label="Address"
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="image"
              label="Image URL"
              onChange={handleInputChange}
            />
          </div>
          <ImgHolder>
            <img
              src={form.image}
              // onLoad={handleImageLoaded}
              alt="upload"
              onError={(e) => {
                // handleImageErr();
                e.target.onerror = null;
                e.target.src =
                  "https://cdn.icon-icons.com/icons2/1706/PNG/512/3986701-online-shop-store-store-icon_112278.png";
                setForm({
                  ...form,
                  image:
                    "https://cdn.icon-icons.com/icons2/1706/PNG/512/3986701-online-shop-store-store-icon_112278.png",
                });
              }}
            />
          </ImgHolder>
        </FormUpper>
        <Textarea
          name="about"
          rows="5"
          placeholder="Enter about shop..."
          onChange={handleInputChange}
        />
        <div style={{ textAlign: "right" }}>
          <Button type="submit" text="Create shop" />
        </div>
      </form>
    </div>
  );
};

export default Create;
