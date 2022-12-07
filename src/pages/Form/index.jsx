import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import React, { useCallback, useReducer, useState } from "react";
import { FormActionKind, reducerForm } from "./reducer";
import { UploadPhoto } from "../../components/UploadButton";
import { StatusPhoto } from "../../components/StatusPhoto";
import { Navigate } from "react-router-dom";

const initialState = {
  name: "",
  price: "",
  photo: undefined,
};

export const Form = () => {
  const [state, dispatch] = useReducer(reducerForm, initialState);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", state.name);
      formData.append("price", state.price);
      if (state.photo) formData.append("file", state.photo);
      const response = await fetch("http://localhost:3000/createProduct", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        //wait for 1 sec
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Producto añadido correctamente");
        setRedirect(true);
      }
      if (response.status === 400 || response.status === 500) {
        alert(
          "Los datos introducidos no son correctos, por favor: \n" +
            "1. Asegúrate de que el nombre del producto no esté vacío \n" +
            "2. Asegúrate de que el precio sea un número positivo \n" +
            "3. Asegúrate de que la foto no sea superior a 2MB"
        );
      }
    },
    [state]
  );

  if (redirect) {
    return <Navigate replace to="/" />;
  }

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
        <Button className="green" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
};
