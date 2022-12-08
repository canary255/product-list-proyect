export const Button = ({ children = "Button", type, className, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
