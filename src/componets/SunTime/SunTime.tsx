import { mdiSunClockOutline } from "@mdi/js"
import Icon from "@mdi/react"
import React, { useEffect, useState } from "react"
import * as ST from './SunTime.styles'

export default function SunTime() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <ST.Wrapper>
        <ST.Title>
            <Icon
                path={mdiSunClockOutline}
                color="#DAD8F7"
                size="24px"
            />
            <h3>Horário do sol</h3>
        </ST.Title>

        <ST.Chart>
            <ST.CurrentTime>{currentTime}</ST.CurrentTime>

            <ST.Circle>
                <ST.Border>
                    <ST.Ball />
                </ST.Border>
            </ST.Circle>
            <ST.Time>
                <span>06:12</span>
                <span>18:52</span>
            </ST.Time>
        </ST.Chart>
    </ST.Wrapper>
}