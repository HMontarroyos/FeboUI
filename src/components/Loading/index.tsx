import React from 'react';
import * as S from "./styled";
import { LoadingImage } from "../../assets/images";

interface LoadingProps {
  show: boolean;
}

function Loading({ show }: LoadingProps): JSX.Element {
  return (
    <>
      {show && (
        <S.Container>
          <S.Image src={LoadingImage} alt={"loading"} />
        </S.Container>
      )}
    </>
  );
}

export default Loading;
