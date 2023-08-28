import React from "react";
import * as S from "./styled";

interface VideoProps {
  src: string;
  width: string;
  height: string;
  autoPlay?: boolean;
  muted?: boolean;
  thumbnail?: string;
  controls: boolean;
  loop?: boolean;
}

function Video({
  src,
  autoPlay,
  muted,
  width,
  height,
  controls,
  loop,
  thumbnail,
}: VideoProps): JSX.Element {
  return (
    <S.Container>
      <S.Video
        width={width}
        height={height}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        poster={thumbnail}
        muted={muted}
      >
        <source src={src} type="video/mp4" />
      </S.Video>
    </S.Container>
  );
}

export default Video;
