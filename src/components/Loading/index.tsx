import React from 'react';
import * as S from "./styled";

interface LoadingProps {
  show: boolean;
}

function Loading({ show }: LoadingProps): JSX.Element {
  return (
    <>
      {show && (
        <S.Container>
          <h1>Loading ...</h1>
        </S.Container>
      )}
    </>
  );
}

export default Loading;
