import { Button } from "../Button";

export const StatusPhoto = ({ photoName, dispatch, type }) => {
  return (
    <label htmlFor="photo">
      {photoName}
      <Button
        type="button"
        onClick={(e) => {
          dispatch({
            type: type,
            payload: undefined,
          });
        }}
      >
        Borrar foto
      </Button>
    </label>
  );
};
