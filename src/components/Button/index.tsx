import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  title: string;
}

export const Button = ({ title, ...props }: ButtonProps) => (
  <ButtonContainer {...props}>{title}</ButtonContainer>
);
