import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1366px;
    height: 768px;
    margin: auto;
    border-radius: 15px;
    background: url('../src/assets/images/background.png') no-repeat center;
    display: grid;
    grid-template-columns: 480px 578px;
    gap: 32px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1200px) {
        grid-template-columns: 420px 498px;
        gap: 15px;
    }
    
    @media (max-width: 1150px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 60px 20px;
        background-size: cover;
        border-radius: 0;
    }

    @media (max-width: 550px) {
        padding: 60px 10px;
    }
`

export const MoreInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 24px;

    & >* {
        &:nth-child(1) {
            grid-row: 1;
            grid-column: 1;
        }
        &:nth-child(2) {
            grid-row: 1;
            grid-column: 2;
        }
        &:nth-child(3) {
            grid-row: 2;
            grid-column: 1 / span 2;
        }
    }

    @media (max-width: 1200px) {
        gap: 15px;
    }

    @media (max-width: 550px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

export const NoAnimation = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`