import styled from "styled-components";

export const Wrapper = styled.div<{
    small?: boolean
}>`
    width: ${p => !p.small ? '140px' : '64px'};
    height: ${p => !p.small ? '140px' : '64px'};
    position: relative;

    & * {
        ${p => p.small ? 'animation: none!important;' : ''}
    }
`

export const Cloudy = styled.div`
    & img {
        position: absolute;
        
        &:first-child {
            width: 95%;
            bottom: 12%;
            z-index: 1;
            animation: floatCloudSun1 3s infinite linear;
        }
        &:nth-child(2) {
            width: 54%;
            bottom: 28%;
            right: -15%;
            animation: floatCloudSun2 5s infinite linear;
        }

        @keyframes floatCloudSun1 {
            0% {
                left: 0px;
            }
            50% {
                left: 5px;
            }
            100% {
                left: 0px;
            }
        }

        @keyframes floatCloudSun2 {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(100deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
    }
`

export const CloudClean = styled.div`
    & img {
        position: absolute;
        
        &:first-child {
            width: 95%;
            bottom: 12%;
            z-index: 1;
            animation: floatCloudClean1 3s infinite linear;
        }
        &:nth-child(2) {
            width: 75%;
            bottom: 28%;
            right: -15%;
            animation: floatCloudClean2 3s infinite linear;
        }
    }

    @keyframes floatCloudClean1 {
        0% {
            left: 0px;
        }
        50% {
            left: 5px;
        }
        100% {
            left: 0px;
        }
    }

    @keyframes floatCloudClean2 {
        0% {
            bottom: 45px;
        }
        50% {
            bottom: 28%;
        }
        100% {
            bottom: 45px;
        }
    }
`

export const Sun = styled.div`
    & img {
        width: 94%;
        animation: floatCloudSun2 5s infinite linear;
        
        @keyframes floatCloudSun2 {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(100deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
    }
`

export const Rain = styled.div`
    & img {
        position: absolute;
        
        &:first-child {
            width: 95%;
            top: 10%;
            z-index: 1;
            animation: floatCloudRain1 3s infinite linear;
        }
        &:nth-child(2) {
            width: 28%;
            top: 69%;
            right: 19%;
            animation: floatCloudRain2 3s infinite linear;
        }
        &:nth-child(3) {
            width: 28%;
            top: 72%;
            right: 51%;
            animation: floatCloudRain3 2s infinite linear;
        }
    }

    @keyframes floatCloudRain1 {
        0% {
            right: 0px;
        }
        50% {
            right: 5px;
        }
        100% {
            right: 0px;
        }
    }
    
    @keyframes floatCloudRain2 {
        0% {
            top: 100px;
        }
        50% {
            top: 95px;
        }
        100% {
            top: 100px;
        }
    }
    
    @keyframes floatCloudRain3 {
        0% {
            top: 105px;
        }
        50% {
            top: 100px;
        }
        100% {
            top: 105px;
        }
    }
`

export const Ray = styled.div`
    & img {
        position: absolute;
        
        &:first-child {
            width: 95%;
            top: 10%;
            z-index: 1;
            animation: floatCloudRain1 3s infinite linear;
        }
        &:nth-child(2) {
            width: 11%;
            top: 70%;
            right: 25%;
            animation: floatCloudRain2 3s infinite linear;
        }
        &:nth-child(3) {
            width: 11%;
            top: 70%;
            right: 45%;
            animation: floatCloudRain3 2s infinite linear;
        }
        &:nth-child(4) {
            width: 11%;
            top: 70%;
            right: 65%;
            animation: floatCloudRain2 3s infinite linear;
        }
    }

    @keyframes floatCloudRain1 {
        0% {
            right: 0px;
        }
        50% {
            right: 5px;
        }
        100% {
            right: 0px;
        }
    }
    
    @keyframes floatCloudRain2 {
        0% {
            top: 100px;
        }
        50% {
            top: 95px;
        }
        100% {
            top: 100px;
        }
    }
    
    @keyframes floatCloudRain3 {
        0% {
            top: 105px;
        }
        50% {
            top: 100px;
        }
        100% {
            top: 105px;
        }
    }
`