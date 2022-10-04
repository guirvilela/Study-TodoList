import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  height: 173px;

  align-items: center;
  justify-content: center;

  background-color: ${() => theme.colors.gray700};
`;
