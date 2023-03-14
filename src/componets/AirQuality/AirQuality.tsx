import { mdiLeaf } from "@mdi/js"
import Icon from "@mdi/react"
import React, { useEffect, useState } from "react"
import { airQualityProps, FAKE_API } from "../../FAKE_API"
import * as AQ from './AirQuality.styles'

interface AirQualityProps {
    idForecast: number
}

export default function AirQuality({ idForecast }: AirQualityProps) {

    function fakeRequest(id: number) {
        return FAKE_API.filter((data) => data.id === id)[0].airQuality;
    }

    const [responseAPI, setResponseAPI] = useState<airQualityProps>(fakeRequest(idForecast))

    fakeRequest(1)

    useEffect(() => {
        setResponseAPI(fakeRequest(idForecast))
    }, [idForecast])

    return <AQ.Wrapper>
        <AQ.Title>
            <Icon
                path={mdiLeaf}
                color="#DAD8F7"
                size="24px"
            />
            <h3>Qualidade do ar</h3>
        </AQ.Title>

        <AQ.Moment>
            <span>{responseAPI.status}</span>
            <h4>{responseAPI.number}</h4>
        </AQ.Moment>

        <AQ.Info>
            {
                responseAPI.description.map((item, i) => (
                    <div key={i}>
                        <span>{item.value}</span>
                        <h4>{item.label}</h4>
                    </div>
                ))
            }
        </AQ.Info>
    </AQ.Wrapper>
}