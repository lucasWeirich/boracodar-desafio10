import React, { useEffect } from "react"
import Icon from "@mdi/react"
import * as S from './Statistics.styles'
import { mdiInformation, mdiWaterPercent, mdiWeatherDust, mdiWeatherPouring } from "@mdi/js"

export interface StatisticsProps {
    label: string
    value: number
    unitOfMeasure: string
    icon: 'vento' | 'umidade' | 'chuva' | string
}

export default function Statistics(props: StatisticsProps) {

    function GetIcon() {
        switch (props.icon) {
            case 'vento':
                return mdiWeatherDust
            case 'umidade':
                return mdiWaterPercent
            case 'chuva':
                return mdiWeatherPouring
            default:
                return mdiInformation
        }
    }
    const IconStatistic = GetIcon();


    return <S.Wrapper>
        <Icon
            path={IconStatistic}
            color="#fff"
            size='32px'
        />
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <S.Label>{props.label}</S.Label>
            <S.Description>{props.value} <span>{props.unitOfMeasure}</span></S.Description>
        </div>
    </S.Wrapper>
}