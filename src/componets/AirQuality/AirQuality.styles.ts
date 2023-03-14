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

export const Moment = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4px;

    & span {
        font-size: 18px;
        font-weight: bold;
        color: #87EBCD;
    }

    & h4 {
        font-size: 40px;
        font-weight: bold;
        color: #E7E6FB;
    }
`

export const Info = styled.div`
    display: flex;
    gap: 16px;

    & div {
        display: flex;
        align-items: center;
        flex-direction: column;

        & span {
            font-size: 14px;
            font-weight: bold;
            color: #87EBCD;
        }

        & h4 {
            font-size: 12px;
            font-weight: 400;
            color: #E7E6FB;
        }
    }
`