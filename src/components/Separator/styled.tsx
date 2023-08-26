import styled from "styled-components";

interface Props {
  spacing: number;
  horizontal?: boolean;
}

export const Separator = styled.div<Props>`
  padding: 0;
  margin: 0;
  height: ${(props) => props.horizontal ? "0px" : `${props.spacing}px`};
  width: ${(props) => props.horizontal ? `${props.spacing}px` : "0px"};
  display: ${(props) => props.horizontal ? "inline-block": "block"};
`;
