// An enum with all the types of actions to use in our reducer
export const FormActionKind = {
  PRODUCT_NAME: "PRODUCT_NAME",
  PRICE: "PRICE",
  PHOTO: "PHOTO",
}


export function reducerForm(state, action) {
  const { type, payload } = action;
  switch (type) {
    case FormActionKind.PRODUCT_NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    case FormActionKind.PRICE: {
      return {
        ...state,
        price: payload,
      };
    }
    case FormActionKind.PHOTO: {
      return {
        ...state,
        photo: payload,
      };
    }
    default:
      return state;
  }
}
