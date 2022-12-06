export const Button = ({
  children = "Button",
  type,
  className,
}) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
