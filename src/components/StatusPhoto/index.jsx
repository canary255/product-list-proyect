import { Button } from "../Button";

export const StatusPhoto = ({ photoName, dispatch, type }) => {
  return (
    <label htmlFor="photo">
      <p>{photoName}</p>
      <Button
        type="button"
        className="red"
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
