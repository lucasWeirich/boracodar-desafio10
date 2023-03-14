import React from "react"
import * as SI from './SpecialIcons.styles'

export interface SpecialIconsProps {
    type: 'cloudy' | 'cloudClean' | 'sun' | 'rain' | 'ray'
    small?: boolean
}

const cloudy = <SI.Cloudy>
    <img src="../src/assets/images/icons/weather/clean.png" alt="" />
    <img src="../src/assets/images/icons/weather/sun.png" alt="" />
</SI.Cloudy>

const cloudClean = <SI.CloudClean>
    <img src="../src/assets/images/icons/weather/clean.png" alt="" />
    <img src="../src/assets/images/icons/weather/cloudy.png" alt="" />
</SI.CloudClean>

const sun = <SI.Sun>
    <img src="../src/assets/images/icons/weather/sun.png" alt="" />
</SI.Sun>

const rain = <SI.Rain>
    <img src="../src/assets/images/icons/weather/clean.png" alt="" />
    <img src="../src/assets/images/icons/weather/rain.png" alt="" />
    <img src="../src/assets/images/icons/weather/rain.png" alt="" />
</SI.Rain>

const ray = <SI.Ray>
    <img src="../src/assets/images/icons/weather/cloudy.png" alt="" />
    <img src="../src/assets/images/icons/weather/ray.png" alt="" />
    <img src="../src/assets/images/icons/weather/ray.png" alt="" />
    <img src="../src/assets/images/icons/weather/ray.png" alt="" />
</SI.Ray>

export default function SpecialIcons({ type, small }: SpecialIconsProps) {

    const GroupIcon = ({
        'cloudy': () => cloudy,
        'cloudClean': () => cloudClean,
        'sun': () => sun,
        'rain': () => rain,
        'ray': () => ray
    }[type])

    return <SI.Wrapper small={small}>
        {
            GroupIcon &&
            <GroupIcon />
        }
    </SI.Wrapper>
}