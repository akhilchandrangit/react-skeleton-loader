import React, { useState, ReactNode, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import { DEFAULT_BG, BG_SHADE } from '../config/config';

export type Shape = 'rectangle' | 'circle';

export interface SkeletonLoaderProps {
  width: number | string;
  height: number | string;
  count?: number;
  className?: string;
  wrapperClass?: string;
  color?: string;
  style?: React.CSSProperties;
  shape?: Shape;
  hideAnimation?: boolean;
  hideGradient?: boolean;
}

const Sprinkle = keyframes`
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 140px;
  }
`;

const Node = styled.div`
  display: inline-block;
  width: 140px;
  height: 16px;
  margin-top: 12px;
  border-radius: 4px;
  background-image: -webkit-linear-gradient(left, ${DEFAULT_BG} 0%, ${BG_SHADE} 20%, ${DEFAULT_BG} 40%, ${DEFAULT_BG} 100%);
  background-size: 600px;
  animation: ${Sprinkle} 1.6s infinite linear;
  margin-right: 4px;
`;

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  count = 1,
  width,
  height,
  className = '',
  wrapperClass = '',
  color,
  style,
  shape = 'rectangle',
  hideAnimation = false,
  hideGradient = false,
}) => {
  const [elements, setElements] = useState<ReactNode[] | null>(null);

  useEffect(() => {
    setElements(() => {
      const nodes: ReactNode[] = [];
      const nodeStyle: React.CSSProperties = {
        ...style,
        width,
        height,
      };

      if (shape === 'circle') {
        nodeStyle.borderRadius = '50%';
      }

      if (color) {
        if (hideGradient) {
          nodeStyle.backgroundColor = color;
          nodeStyle.backgroundImage = 'none';
        } else {
          nodeStyle.backgroundImage = `-webkit-linear-gradient(left, ${hexToRgba(color)} 0%, ${hexToRgba(color, 0.8)} 20%, ${hexToRgba(color)} 40%, ${hexToRgba(color)} 100%)`;
        }
      }

      if (hideAnimation) {
        nodeStyle.animationPlayState = 'paused';
      }

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < count; i++) {
        nodes.push(
          <Node
            className={`react-skeleton-loader-item ${className}`}
            style={nodeStyle}
          />
        );
      }

      return nodes;
    });
  }, []);

  return (
    <div className={`react-skeleton-loader ${wrapperClass}`}>
      {elements?.map((element: ReactNode) => (
        <>{element}</>
      ))}
    </div>
  );
};

export default SkeletonLoader;
