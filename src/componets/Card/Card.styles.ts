import styled from "styled-components";

export const Wrapper = styled.div<{
    height: 'small' | 'big' 
}>`
    width: 100%;
    height: ${p => p.height === 'small' ? '228px' : '480px'};
    display: flex;
    background-color: #6D67D0;
    border-radius: 10px;

    @media (max-width: 1200px) {
        height: ${p => p.height === 'small' ? '228px' : '472px'};
    }

    @media (max-width: 1150px) {
        max-width: 559px;
        height: auto;
    }
`