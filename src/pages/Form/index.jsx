import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import React, { useCallback, useReducer } from "react";
import { FormActionKind, reducerForm } from "./reducer";
import { UploadPhoto } from "../../components/UploadButton";
import { StatusPhoto } from "../../components/StatusPhoto";

const initialState = {
  name: "",
  price: "",
  photo: undefined,
};

export const Form = () => {
  const [state, dispatch] = useReducer(reducerForm, initialState);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", state.name);
      formData.append("price", state.price);
      if (state.photo) formData.append("file", state.photo);
      fetch("http://localhost:3000/createProduct", {
        method: "POST",
        body: formData,
      });
    },
    [state]
  );

  return (
    <form className="formDecoration" onSubmit={handleSubmit}>
      <h1>Añadir un producto</h1>
      <div className="square">
        <InputField
          label="Nombre del producto"
          id="decorationName"
          onChange={(e) => {
            dispatch({
              type: FormActionKind.PRODUCT_NAME,
              payload: e.target.value,
            });
          }}
          required
        />
        <InputField
          label="Precio"
          id="price"
          onChange={(e) => {
            dispatch({
              type: FormActionKind.PRICE,
              payload: e.target.value,
            });
          }}
          required
        />
        <div className="uploadPhoto">
          {!state.photo ? (
            <UploadPhoto dispatch={dispatch} type={FormActionKind.PHOTO} />
          ) : (
            <StatusPhoto
              dispatch={dispatch}
              photoName={state.photo.name}
              type={FormActionKind.PHOTO}
            />
          )}
        </div>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};
