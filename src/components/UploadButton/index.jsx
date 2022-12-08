export const UploadPhoto = ({ dispatch, type }) => {
  return (
    <label htmlFor="photo">
      <i className="fa fa-2x fa-camera"></i>
      Por favor, seleccione una foto a subir.
      <input
        id="photo"
        type="file"
        name="file"
        accept="image/jpeg, image/jpg, image/png"
        onChange={(e) => {
          dispatch({
            type: type,
            payload: e.currentTarget ? e.currentTarget.files[0] : null,
          });
        }}
      />
    </label>
  );
};
