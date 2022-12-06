import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import React, { useCallback, useReducer } from "react";
import { FormActionKind, reducerForm } from "./reducer";

const initialState = {
  name: "",
  price: "",
  photo: "",
};

export const Form = () => {
  const [state, dispatch] = useReducer(reducerForm, initialState);

  const onUploadImage = useCallback((e) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      dispatch({
        type: FormActionKind.PHOTO,
        payload: file,
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(state);
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
          <label htmlFor="photo">
            <i className="fa fa-2x fa-camera"></i>
            Por favor, seleccione una foto a subir.
            <input
              id="photo"
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              onChange={(e) => {
                dispatch({
                  type: FormActionKind.PHOTO,
                  payload: onUploadImage,
                });
              }}
            />
          </label>
        </div>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};
