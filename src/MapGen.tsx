import React from "react";
import styled from "styled-components";

const Map = styled.div<{ img: string }>`
  margin: auto;
  border: 1px solid red;
  width: 30rem;
  height: 30rem;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const FloatButton = styled.button<any>`
  border: 1px solid green;
  position: absolute;
  ${({ x, y, width, height }) => `
  left:${x}%;
  top:${y}%;
  width:${width};
  height:${height};
  `}
`;

export const MapGenerator: React.FC<any> = ({
  imgUrl,
  buttons
}: {
  imgUrl: string;
  buttons: any[];
}) => {
  return (
    <Map img={imgUrl}>
      {buttons.map(({ name, ...rest }) => (
        <FloatButton {...rest}>{name}</FloatButton>
      ))}
    </Map>
  );
};
