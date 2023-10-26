import styled from "styled-components";

interface Props {
  color?: string;
  bold?: boolean;
  fontSize?: number;
  strike?: boolean;
}

export const Container = styled.div``;

export const TextPrice = styled.p<Partial<Props>>`
  padding: 0;
  margin: 0;
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: ${(props) => props.bold && "bold"};
  color: ${(props) => (props.strike ? "grey" : props.color)}; 
  text-align: center;
  text-decoration: ${(props) => props.strike && "line-through"}; 
`;
