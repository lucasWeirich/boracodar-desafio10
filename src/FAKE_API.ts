export interface StatisticProps {
    id: number;
    icon: string;
    label: string;
    value: number;
    unitOfMeasure: string;
}

export interface airQualityProps {
    status: string,
    number: number,
    description: Array<{
        label: string,
        value: number
    }>
}

export interface dataForecastProps {
    id: number,
    week: string,
    forecast: 'cloudy' | 'cloudClean' | 'sun' | 'rain' | 'ray',
    temperature: {
        moment: number,
        max: number,
        min: number
    },
    statistic: Array<StatisticProps>
    airQuality: airQualityProps
}

export const FAKE_API: dataForecastProps[] = [
    {
        id: 1,
        week: 'Hoje',
        forecast: 'cloudy',
        temperature: {
            moment: 18,
            max: 22,
            min: 16
        },
        statistic: [
            {
                id: 1,
                icon: 'vento',
                label: 'Vento',
                value: 17,
                unitOfMeasure: 'km/h'
            },
            {
                id: 2,
                icon: 'umidade',
                label: 'Umidade',
                value: 31,
                unitOfMeasure: '%'
            },
            {
                id: 3,
                icon: 'chuva',
                label: 'Chuva',
                value: 10,
                unitOfMeasure: '%'
            },
        ],
        airQuality: {
            status: 'Boa',
            number: 21,
            description: [
                {
                    label: 'PM2.5',
                    value: 12.9
                },
                {
                    label: 'PM10',
                    value: 12.9
                },
                {
                    label: 'SO2',
                    value: 2.1
                },
                {
                    label: 'NO2',
                    value: 1.4
                },
                {
                    label: 'O3',
                    value: 21.2
                },
                {
                    label: 'O3',
                    value: 0.7
                },
            ]
        }
    },
    {
        id: 2,
        week: 'Amanhã',
        forecast: 'cloudy',
        temperature: {
            moment: 20,
            max: 21,
            min: 16
        },
        statistic: [
            {
                id: 1,
                icon: 'vento',
                label: 'Vento',
                value: 5,
                unitOfMeasure: 'km/h'
            },
            {
                id: 2,
                icon: 'umidade',
                label: 'Umidade',
                value: 63,
                unitOfMeasure: '%'
            },
            {
                id: 3,
                icon: 'chuva',
                label: 'Chuva',
                value: 2,
                unitOfMeasure: '%'
            },
        ],
        airQuality: {
            status: 'Média',
            number: 17,
            description: [
                {
                    label: 'PM2.5',
                    value: 22.9
                },
                {
                    label: 'PM10',
                    value: 18.9
                },
                {
                    label: 'SO2',
                    value: 2.6
                },
                {
                    label: 'NO2',
                    value: 0.9
                },
                {
                    label: 'O3',
                    value: 20.2
                },
                {
                    label: 'O3',
                    value: 0.1
                },
            ]
        }
    },
    {
        id: 3,
        week: 'Sexta-Feira',
        forecast: 'sun',
        temperature: {
            moment: 24,
            max: 28,
            min: 20
        },
        statistic: [
            {
                id: 1,
                icon: 'vento',
                label: 'Vento',
                value: 23,
                unitOfMeasure: 'km/h'
            },
            {
                id: 2,
                icon: 'umidade',
                label: 'Umidade',
                value: 4,
                unitOfMeasure: '%'
            },
        ],
        airQuality: {
            status: 'Ótima',
            number: 31,
            description: [
                {
                    label: 'PM2.5',
                    value: 8.9
                },
                {
                    label: 'PM10',
                    value: 8.9
                },
                {
                    label: 'SO2',
                    value: 4.1
                },
                {
                    label: 'NO2',
                    value: 2.4
                },
                {
                    label: 'O3',
                    value: 19.2
                },
                {
                    label: 'O3',
                    value: 1.7
                },
            ]
        }
    },
    {
        id: 4,
        week: 'Sábado',
        forecast: 'rain',
        temperature: {
            moment: 25,
            max: 25,
            min: 21
        },
        statistic: [
            {
                id: 1,
                icon: 'vento',
                label: 'Vento',
                value: 17,
                unitOfMeasure: 'km/h'
            },
            {
                id: 2,
                icon: 'umidade',
                label: 'Umidade',
                value: 89,
                unitOfMeasure: '%'
            },
            {
                id: 3,
                icon: 'chuva',
                label: 'Chuva',
                value: 92,
                unitOfMeasure: '%'
            },
        ],
        airQuality: {
            status: 'Boa',
            number: 33,
            description: [
                {
                    label: 'PM2.5',
                    value: 22.9
                },
                {
                    label: 'PM10',
                    value: 22.9
                },
                {
                    label: 'O3',
                    value: 5.2
                },
                {
                    label: 'O3',
                    value: 1.1
                },
            ]
        }
    },
    {
        id: 5,
        week: 'Domingo',
        forecast: 'ray',
        temperature: {
            moment: 14,
            max: 20,
            min: 14
        },
        statistic: [
            {
                id: 1,
                icon: 'vento',
                label: 'Vento',
                value: 67,
                unitOfMeasure: 'km/h'
            },
            {
                id: 2,
                icon: 'umidade',
                label: 'Umidade',
                value: 77,
                unitOfMeasure: '%'
            },
            {
                id: 3,
                icon: 'chuva',
                label: 'Chuva',
                value: 99,
                unitOfMeasure: '%'
            },
        ],
        airQuality: {
            status: 'Média',
            number: 16,
            description: [
                {
                    label: 'PM2.5',
                    value: 6.9
                },
                {
                    label: 'PM10',
                    value: 11.9
                },
                {
                    label: 'SO2',
                    value: 9.2
                },
                {
                    label: 'NO2',
                    value: 2.0
                },
                {
                    label: 'O3',
                    value: 19.2
                },
            ]
        }
    },
    {
        id: 6,
        week: 'Segunda-Feira',
        forecast: 'cloudClean',
        temperature: {
            moment: 19,
            max: 24,
            min: 19
        },
        statistic: [
            {
                id: 1,
                icon: 'vento',
                label: 'Vento',
                value: 5,
                unitOfMeasure: 'km/h'
            },
            {
                id: 3,
                icon: 'chuva',
                label: 'Chuva',
                value: 1,
                unitOfMeasure: '%'
            },
        ],
        airQuality: {
            status: 'Boa',
            number: 21,
            description: [
                {
                    label: 'PM10',
                    value: 19.9
                },
                {
                    label: 'SO2',
                    value: 2.9
                },
                {
                    label: 'NO2',
                    value: 1.9
                },
                {
                    label: 'O3',
                    value: 19.2
                },
                {
                    label: 'O3',
                    value: 1.2
                },
            ]
        }
    }
]