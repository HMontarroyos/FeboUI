import styled from "styled-components";

interface Props {
  color?: string;
  bold?: boolean;
}

export const Container = styled.div`

`;

export const TextPrice = styled.p<Partial<Props>>`
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: ${(props) => props.bold && "bold"};
  color: ${(props) => props.color};
  text-align: center;
`;
