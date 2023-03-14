import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url('../../src/assets/images/bg_temperature.png') no-repeat;
    padding: 32px 16px 16px 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    animation: backgroundFloat 6s infinite linear;
    border-radius: 10px;

    @keyframes backgroundFloat {
        0% {
          background-position-y: 0;
        }
        50% {
            background-position-y: 10px;
        }
        100% {
            background-position-y: 0;
        }
    }

    &:hover .Week {
        top: -50px;
        opacity: 1;
    }

    & .Week {
        font-size: 40px;
        color: #DAD8F7;
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        text-align: center;
        opacity: 0;
        transition: all 0.5s;
    }

    @media (max-width: 1200px) {
        padding: 20px 10px 10px 10px;
    }

    @media (max-width: 1150px) {
        background-size: cover;

        & .Week {
            top: -50px;
            opacity: 1;
        }
    }

    @media (max-width: 550px) {
        min-height: 425px;

        &:hover {
            .Week {
                top: -35px;
            }
        }

        & .Week {
            font-size: 25px;
            top: -35px;
        }
    }
`

export const Icon = styled.div`
    width: 140px;
    height: 140px;
    position: absolute;
    top: -55px;
    left: -55px;

    @media (max-width: 1150px) {
        top: -30px;
        left: 20px;
    }

    @media (max-width: 550px) {
        left: 0px;
    }
`

export const Locations = styled.span`
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #C2BFF4;
    margin-right: 16px;
`

export const Temperature = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`

export const GrausMoment = styled.h2`
    display: flex;
    justify-content: center;
    margin: auto;
    font-size: 88px;
    font-weight: bold;
    color: #fff;
    position: relative;

    &::after {
        content: '°C';
        font-size: 24px;
        font-weight: bold;
        color: #DAD8F7;
        position: absolute;
        top: 15px;
        right: -30px;
    }

    @media (max-width: 550px) {
        font-size: 50px;

        &::after {
            font-size: 16px;
            top: 10px;
            right: -20px;
        }
    }
`
export const GrausAux = styled.h4`
    display: flex;
    margin: auto;
    font-size: 20px;
    font-weight: bold;

    & span {
        margin-left: 8px;
        color: #DAD8F7;
    }    
    
    @media (max-width: 550px) {
        font-size: 14px;
    }
`

export const Statistic = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 8px;

    @media (max-width: 550px) {
        display: flex;
        flex-direction: column;
    }
`