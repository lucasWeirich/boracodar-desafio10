import React, { useState } from "react"
import { dataForecastProps, FAKE_API } from "../../FAKE_API"
import SpecialIcons from "../SpecialIcons/SpecialIcons"
import * as WF from './WeekForecast.styles'

interface WeekForecastProps {
    clickWeekForecast: (id: number) => void
}

export default function WeekForecast({ clickWeekForecast }: WeekForecastProps) {
    
    function fakeRequest(id: number) {
        return FAKE_API.filter((data) => data.id !== id)
    }
    
    const [responseAPI, setResponseAPI] = useState<dataForecastProps[]>(fakeRequest(1))

    function handleWeekForecast(id: number) {
        setResponseAPI(fakeRequest(id))
        clickWeekForecast(id)
    }

    return <WF.Wrapper>
        {
            responseAPI.map(data => (
                <div key={data.id} onClick={() => handleWeekForecast(data.id)}>
                    <WF.Week>{data.week}</WF.Week>
                    <SpecialIcons small={true} type={data.forecast} />
                    <WF.GrausAux>
                        {data.temperature.max}° <span>{data.temperature.min}°</span>
                    </WF.GrausAux>
                </div>
            ))
        }
    </WF.Wrapper>
}