import { ButtonTypeUnion } from "src/types";

type ButtonProps = {
  type?: ButtonTypeUnion;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  className = "",
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
