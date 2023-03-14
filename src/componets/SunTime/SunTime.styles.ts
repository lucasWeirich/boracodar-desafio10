import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 16px;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 16px;

    & h3 {
        font-size: 16px;
        font-weight: bold;
        color: #DAD8F7;
    }
`

export const Chart = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`

export const Circle = styled.div`
    width: calc(100% - 32px);
    height: 106px;
    margin: 0 auto;
    border-bottom: solid 1px #F6C833;
    overflow: hidden;

    @media (max-width: 1200px) {
        width: 100%;
        height: 80px;
    }
`
export const Border = styled.div`
    width: 100%;
    height: 190px;
    border-radius: 50%;
    border: dashed 2px #F6C833;
    position: relative;
`

export const Ball = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #F6C833;
    position: absolute;
    top: 0;
    left: 66%;

    &::before {
        content: '';
        width: 100px;
        height: 100px;
        background: linear-gradient(#fbdb6033, #fbdb6000);
        display: flex;
        position: absolute;
        top: 22px;
        left: -77px;
        transform: skewX(10deg);
        rotate: 75deg;
    }
`

export const CurrentTime = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    position: absolute;
`

export const Time = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 12px;

    & span {
        font-size: 12px;
        color: #fff;
    }
`