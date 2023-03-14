import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
    height: 60px;
    display: flex;
    align-content: center;
    flex-wrap: wrap-reverse;
    gap: 12px;
    border-radius: 6px;
    padding: 12px 16px;
    background-color: ${transparentize(0.4, '#6660C8')};

    & svg {
        opacity: 0.6;
    }

    @media (max-width: 1200px) {
        padding: 5px 10px;
    }
`

export const Label = styled.h3 `
    font-size: 12px;
    color: #E7E6FB;
`

export const Description = styled.h4 `
    font-size: 18px;
    font-weight: bold;
    color: #E7E6FB;

    & span {
        font-size: 14px;
        font-weight: 400;
    }

    @media (max-width: 1200px) {
        font-size: 14px;

        & span {
            font-size: 12px;
        }
    }
`