import Icon from "@mdi/react"
import { mdiMapMarker } from "@mdi/js";
import React, { useEffect, useState } from "react"
import SpecialIcons from "../SpecialIcons/SpecialIcons"
import * as T from './Temperature.styles'
import Statistics from "../Statistics/Statistics";
import { dataForecastProps, FAKE_API, StatisticProps } from "../../FAKE_API";

interface TemperatureProps {
    idForecast: number
}

export default function Temperature({ idForecast }: TemperatureProps) {

    function fakeRequest(id: number) {
        return FAKE_API.filter((data) => data.id === id)
    }

    const [responseAPI, setResponseAPI] = useState<dataForecastProps[]>(fakeRequest(idForecast))

    useEffect(() => {
        setResponseAPI(fakeRequest(idForecast))
    }, [idForecast])

    return <T.Wrapper>
        <span className="Week">{responseAPI[0].week}</span>
        <T.Icon>
            <SpecialIcons type={responseAPI[0].forecast} />
        </T.Icon>
        <T.Locations>
            <Icon
                path={mdiMapMarker}
                color="#C2BFF4"
                size="20px"
            />
            Rio do Sul, SC
        </T.Locations>

        <T.Temperature>
            <T.GrausMoment>
                {responseAPI[0].temperature.moment}
            </T.GrausMoment>

            <T.GrausAux>
                {responseAPI[0].temperature.max}°
                <span>{responseAPI[0].temperature.min}°</span>
            </T.GrausAux>
        </T.Temperature>
        <T.Statistic>
            {
                responseAPI[0].statistic.map((info: StatisticProps) => (
                    <Statistics key={info.id}
                        icon={info.icon}
                        label={info.label}
                        value={info.value}
                        unitOfMeasure={info.unitOfMeasure}
                    />
                ))
            }
        </T.Statistic>
    </T.Wrapper>
}