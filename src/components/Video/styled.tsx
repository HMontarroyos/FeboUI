import styled from "styled-components";

interface VideoProps {
  width: string;
  height: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Video = styled.video<VideoProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: block;
`;
