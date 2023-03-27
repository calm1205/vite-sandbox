import { ReactNode } from "react"
import styled from "styled-components"

type Button = {
  children: ReactNode
}

export const Button: React.FC<Button> = ({ children }) => (
  <StyledButton>{children}</StyledButton>
)

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: aqua;
  border: 1px solid gray;
  color: black;
  cursor: pointer;
`
