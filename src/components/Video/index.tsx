import React, { useEffect, useState } from "react";
import * as S from "./styled";

interface VideoProps {
  src: string | File;
  width: string;
  height: string;
  autoPlay?: boolean;
  muted?: boolean;
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
}: VideoProps): JSX.Element {
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof src === "string") {
      if (src.includes("youtube.com")) {
        const videoID = src.split("v=")[1];
        setVideoSrc(`https://www.youtube.com/embed/${videoID}`);
      } else {
        setVideoSrc(src);
      }
    } else if (src instanceof File) {
      const videoURL = URL.createObjectURL(src);
      setVideoSrc(videoURL);
    }
  }, [src]);

  return (
    <S.Container>
      {videoSrc && (
        <S.Video
          width={width}
          height={height}
          autoPlay={autoPlay}
          controls={controls}
          loop={loop}
          poster={videoSrc}
          muted={muted}
        >
          <source src={videoSrc || ""} type="video/mp4" />
        </S.Video>
      )}
    </S.Container>
  );
}

export default Video;
