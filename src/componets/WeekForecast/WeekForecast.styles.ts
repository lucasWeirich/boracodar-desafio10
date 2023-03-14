import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 38px;

    &>div {
        width: 92px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background: radial-gradient(#8d85fa, transparent);
        }

        & div {
            margin: 0 auto;
        }
    }

    @media (max-width: 1200px) {
        padding: 38px 20px;
    }

    @media (max-width: 550px) {
        display: flex;
        flex-wrap: wrap;
    }
`

export const Week = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #DAD8F7;
    text-align: center;
`

export const GrausAux = styled.h4`
    display: flex;
    font-size: 16px;
    font-weight: bold;

    & span {
        margin-left: 4px;
        color: #DAD8F7;
    }    
`