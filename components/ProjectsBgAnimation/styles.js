import styled from 'styled-components';

export const ParticlesContainer = styled.div`
    position: absolute;
    width: 100%;
    height: ${({ height }) => height ? `${height}px` : '100%'};
`;