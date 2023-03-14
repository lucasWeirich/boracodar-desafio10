import React, { useState } from 'react'
import AirQuality from '../../componets/AirQuality/AirQuality'
import ButtonAnimation from '../../componets/ButtonAnimation/ButtonAnimation'
import Card from '../../componets/Card/Card'
import SunTime from '../../componets/SunTime/SunTime'
import Temperature from '../../componets/Temperature/Temperature'
import WeekForecast from '../../componets/WeekForecast/WeekForecast'
import * as P from './Panel.styles'

export default function Panel() {

    const [idForecast, setIdForecast] = useState<number>(1);

    const openWeekForecast = (id: number) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setIdForecast(id)
    };

    return <P.Wrapper>
        <Card height='big'>
            <Temperature idForecast={idForecast} />
        </Card>
        <P.MoreInfo>
            <Card height='small'>
                <AirQuality idForecast={idForecast} />
            </Card>
            <Card height='small'>
                <SunTime />
            </Card>
            <Card height='small'>
                <WeekForecast clickWeekForecast={openWeekForecast} />
            </Card>
        </P.MoreInfo>

        <P.NoAnimation>
            <ButtonAnimation />
        </P.NoAnimation>
    </P.Wrapper>
}