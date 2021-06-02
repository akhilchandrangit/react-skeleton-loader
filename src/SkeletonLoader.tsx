import React, { useState, ReactNode, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

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
  float: left;
  width: 140px;
  height: 16px;
  margin-top: 12px;
  border-radius: 4px;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
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
