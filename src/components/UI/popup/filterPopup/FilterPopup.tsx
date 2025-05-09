import React, { useEffect, useState } from 'react'
import './filterPopup.scss'

type TFilter = {
    id: number,
    icon: any,
    name: string
}

const mainFilters: TFilter[] = [
    {
        id: 1,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g clip-path="url(#clip0_1170_2823)">
                <path d="M31.8885 14.1317L27.1585 9.40175C26.3253 4.31425 21.9555 0.5 16.6562 0.5C11.6458 0.5 7.33238 3.99525 6.25988 8.85175C2.77288 9.47188 0.5 12.2136 0.5 15.6044C0.5 18.4231 2.19675 20.8459 4.625 21.9074V23.1875L5.835 24.3975C6.132 24.6945 6.132 25.1758 5.835 25.4728L4.84775 26.46C4.55075 26.757 4.55075 27.2383 4.84775 27.5353L5.835 28.5225C6.132 28.8195 6.132 29.3008 5.835 29.5978L4.84775 30.585C4.55075 30.882 4.55075 31.3633 4.84775 31.6603L6.19525 33.0078C6.847 33.6595 7.90575 33.6595 8.5575 33.0078L9.52413 32.0411C9.90913 31.6561 10.125 31.1336 10.125 30.5891V21.9101C12.5533 20.8486 14.25 18.4272 14.25 15.6071C14.25 12.4048 12.05 9.73863 9.0855 8.9755C10.0494 5.62463 13.106 3.25275 16.6562 3.25275C20.5324 3.25275 23.7389 6.0055 24.4209 9.70012L19.9865 14.1345C18.9621 15.1575 18.375 16.5751 18.375 18.023V28.0028C18.375 31.036 20.8417 33.5028 23.875 33.5028H28C31.0333 33.5028 33.5 31.036 33.5 28.0028V18.023C33.5 16.5751 32.9129 15.1575 31.8885 14.1345V14.1317ZM7.375 15.6058C6.2365 15.6058 5.3125 14.6818 5.3125 13.5433C5.3125 12.4047 6.2365 11.4808 7.375 11.4808C8.5135 11.4808 9.4375 12.4047 9.4375 13.5433C9.4375 14.6818 8.5135 15.6058 7.375 15.6058Z" fill="#0062F0" />
            </g>
            <defs>
                <clipPath id="clip0_1170_2823">
                    <rect width="33" height="33" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
            </defs>
        </svg>),
        name: 'Аренда жилья'
    },

    {
        id: 2,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g clip-path="url(#clip0_1170_2823)">
                <path d="M31.8885 14.1317L27.1585 9.40175C26.3253 4.31425 21.9555 0.5 16.6562 0.5C11.6458 0.5 7.33238 3.99525 6.25988 8.85175C2.77288 9.47188 0.5 12.2136 0.5 15.6044C0.5 18.4231 2.19675 20.8459 4.625 21.9074V23.1875L5.835 24.3975C6.132 24.6945 6.132 25.1758 5.835 25.4728L4.84775 26.46C4.55075 26.757 4.55075 27.2383 4.84775 27.5353L5.835 28.5225C6.132 28.8195 6.132 29.3008 5.835 29.5978L4.84775 30.585C4.55075 30.882 4.55075 31.3633 4.84775 31.6603L6.19525 33.0078C6.847 33.6595 7.90575 33.6595 8.5575 33.0078L9.52413 32.0411C9.90913 31.6561 10.125 31.1336 10.125 30.5891V21.9101C12.5533 20.8486 14.25 18.4272 14.25 15.6071C14.25 12.4048 12.05 9.73863 9.0855 8.9755C10.0494 5.62463 13.106 3.25275 16.6562 3.25275C20.5324 3.25275 23.7389 6.0055 24.4209 9.70012L19.9865 14.1345C18.9621 15.1575 18.375 16.5751 18.375 18.023V28.0028C18.375 31.036 20.8417 33.5028 23.875 33.5028H28C31.0333 33.5028 33.5 31.036 33.5 28.0028V18.023C33.5 16.5751 32.9129 15.1575 31.8885 14.1345V14.1317ZM7.375 15.6058C6.2365 15.6058 5.3125 14.6818 5.3125 13.5433C5.3125 12.4047 6.2365 11.4808 7.375 11.4808C8.5135 11.4808 9.4375 12.4047 9.4375 13.5433C9.4375 14.6818 8.5135 15.6058 7.375 15.6058Z" fill="#0062F0" />
            </g>
            <defs>
                <clipPath id="clip0_1170_2823">
                    <rect width="33" height="33" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
            </defs>
        </svg>),
        name: 'Москва Сити'
    },

    {
        id: 3,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g clip-path="url(#clip0_1170_2823)">
                <path d="M31.8885 14.1317L27.1585 9.40175C26.3253 4.31425 21.9555 0.5 16.6562 0.5C11.6458 0.5 7.33238 3.99525 6.25988 8.85175C2.77288 9.47188 0.5 12.2136 0.5 15.6044C0.5 18.4231 2.19675 20.8459 4.625 21.9074V23.1875L5.835 24.3975C6.132 24.6945 6.132 25.1758 5.835 25.4728L4.84775 26.46C4.55075 26.757 4.55075 27.2383 4.84775 27.5353L5.835 28.5225C6.132 28.8195 6.132 29.3008 5.835 29.5978L4.84775 30.585C4.55075 30.882 4.55075 31.3633 4.84775 31.6603L6.19525 33.0078C6.847 33.6595 7.90575 33.6595 8.5575 33.0078L9.52413 32.0411C9.90913 31.6561 10.125 31.1336 10.125 30.5891V21.9101C12.5533 20.8486 14.25 18.4272 14.25 15.6071C14.25 12.4048 12.05 9.73863 9.0855 8.9755C10.0494 5.62463 13.106 3.25275 16.6562 3.25275C20.5324 3.25275 23.7389 6.0055 24.4209 9.70012L19.9865 14.1345C18.9621 15.1575 18.375 16.5751 18.375 18.023V28.0028C18.375 31.036 20.8417 33.5028 23.875 33.5028H28C31.0333 33.5028 33.5 31.036 33.5 28.0028V18.023C33.5 16.5751 32.9129 15.1575 31.8885 14.1345V14.1317ZM7.375 15.6058C6.2365 15.6058 5.3125 14.6818 5.3125 13.5433C5.3125 12.4047 6.2365 11.4808 7.375 11.4808C8.5135 11.4808 9.4375 12.4047 9.4375 13.5433C9.4375 14.6818 8.5135 15.6058 7.375 15.6058Z" fill="#0062F0" />
            </g>
            <defs>
                <clipPath id="clip0_1170_2823">
                    <rect width="33" height="33" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
            </defs>
        </svg>),
        name: 'Загородная'
    },

    {
        id: 4,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g clip-path="url(#clip0_1170_2823)">
                <path d="M31.8885 14.1317L27.1585 9.40175C26.3253 4.31425 21.9555 0.5 16.6562 0.5C11.6458 0.5 7.33238 3.99525 6.25988 8.85175C2.77288 9.47188 0.5 12.2136 0.5 15.6044C0.5 18.4231 2.19675 20.8459 4.625 21.9074V23.1875L5.835 24.3975C6.132 24.6945 6.132 25.1758 5.835 25.4728L4.84775 26.46C4.55075 26.757 4.55075 27.2383 4.84775 27.5353L5.835 28.5225C6.132 28.8195 6.132 29.3008 5.835 29.5978L4.84775 30.585C4.55075 30.882 4.55075 31.3633 4.84775 31.6603L6.19525 33.0078C6.847 33.6595 7.90575 33.6595 8.5575 33.0078L9.52413 32.0411C9.90913 31.6561 10.125 31.1336 10.125 30.5891V21.9101C12.5533 20.8486 14.25 18.4272 14.25 15.6071C14.25 12.4048 12.05 9.73863 9.0855 8.9755C10.0494 5.62463 13.106 3.25275 16.6562 3.25275C20.5324 3.25275 23.7389 6.0055 24.4209 9.70012L19.9865 14.1345C18.9621 15.1575 18.375 16.5751 18.375 18.023V28.0028C18.375 31.036 20.8417 33.5028 23.875 33.5028H28C31.0333 33.5028 33.5 31.036 33.5 28.0028V18.023C33.5 16.5751 32.9129 15.1575 31.8885 14.1345V14.1317ZM7.375 15.6058C6.2365 15.6058 5.3125 14.6818 5.3125 13.5433C5.3125 12.4047 6.2365 11.4808 7.375 11.4808C8.5135 11.4808 9.4375 12.4047 9.4375 13.5433C9.4375 14.6818 8.5135 15.6058 7.375 15.6058Z" fill="#0062F0" />
            </g>
            <defs>
                <clipPath id="clip0_1170_2823">
                    <rect width="33" height="33" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
            </defs>
        </svg>),
        name: 'Зарубежная'
    },
]

const commercialFilters: TFilter[] = [
    {
        id: 1,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g clip-path="url(#clip0_1170_2823)">
                <path d="M31.8885 14.1317L27.1585 9.40175C26.3253 4.31425 21.9555 0.5 16.6562 0.5C11.6458 0.5 7.33238 3.99525 6.25988 8.85175C2.77288 9.47188 0.5 12.2136 0.5 15.6044C0.5 18.4231 2.19675 20.8459 4.625 21.9074V23.1875L5.835 24.3975C6.132 24.6945 6.132 25.1758 5.835 25.4728L4.84775 26.46C4.55075 26.757 4.55075 27.2383 4.84775 27.5353L5.835 28.5225C6.132 28.8195 6.132 29.3008 5.835 29.5978L4.84775 30.585C4.55075 30.882 4.55075 31.3633 4.84775 31.6603L6.19525 33.0078C6.847 33.6595 7.90575 33.6595 8.5575 33.0078L9.52413 32.0411C9.90913 31.6561 10.125 31.1336 10.125 30.5891V21.9101C12.5533 20.8486 14.25 18.4272 14.25 15.6071C14.25 12.4048 12.05 9.73863 9.0855 8.9755C10.0494 5.62463 13.106 3.25275 16.6562 3.25275C20.5324 3.25275 23.7389 6.0055 24.4209 9.70012L19.9865 14.1345C18.9621 15.1575 18.375 16.5751 18.375 18.023V28.0028C18.375 31.036 20.8417 33.5028 23.875 33.5028H28C31.0333 33.5028 33.5 31.036 33.5 28.0028V18.023C33.5 16.5751 32.9129 15.1575 31.8885 14.1345V14.1317ZM7.375 15.6058C6.2365 15.6058 5.3125 14.6818 5.3125 13.5433C5.3125 12.4047 6.2365 11.4808 7.375 11.4808C8.5135 11.4808 9.4375 12.4047 9.4375 13.5433C9.4375 14.6818 8.5135 15.6058 7.375 15.6058Z" fill="#0062F0" />
            </g>
            <defs>
                <clipPath id="clip0_1170_2823">
                    <rect width="33" height="33" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
            </defs>
        </svg>),
        name: 'Аренда жилья'
    },

    {
        id: 2,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g clip-path="url(#clip0_1170_2823)">
                <path d="M31.8885 14.1317L27.1585 9.40175C26.3253 4.31425 21.9555 0.5 16.6562 0.5C11.6458 0.5 7.33238 3.99525 6.25988 8.85175C2.77288 9.47188 0.5 12.2136 0.5 15.6044C0.5 18.4231 2.19675 20.8459 4.625 21.9074V23.1875L5.835 24.3975C6.132 24.6945 6.132 25.1758 5.835 25.4728L4.84775 26.46C4.55075 26.757 4.55075 27.2383 4.84775 27.5353L5.835 28.5225C6.132 28.8195 6.132 29.3008 5.835 29.5978L4.84775 30.585C4.55075 30.882 4.55075 31.3633 4.84775 31.6603L6.19525 33.0078C6.847 33.6595 7.90575 33.6595 8.5575 33.0078L9.52413 32.0411C9.90913 31.6561 10.125 31.1336 10.125 30.5891V21.9101C12.5533 20.8486 14.25 18.4272 14.25 15.6071C14.25 12.4048 12.05 9.73863 9.0855 8.9755C10.0494 5.62463 13.106 3.25275 16.6562 3.25275C20.5324 3.25275 23.7389 6.0055 24.4209 9.70012L19.9865 14.1345C18.9621 15.1575 18.375 16.5751 18.375 18.023V28.0028C18.375 31.036 20.8417 33.5028 23.875 33.5028H28C31.0333 33.5028 33.5 31.036 33.5 28.0028V18.023C33.5 16.5751 32.9129 15.1575 31.8885 14.1345V14.1317ZM7.375 15.6058C6.2365 15.6058 5.3125 14.6818 5.3125 13.5433C5.3125 12.4047 6.2365 11.4808 7.375 11.4808C8.5135 11.4808 9.4375 12.4047 9.4375 13.5433C9.4375 14.6818 8.5135 15.6058 7.375 15.6058Z" fill="#0062F0" />
            </g>
            <defs>
                <clipPath id="clip0_1170_2823">
                    <rect width="33" height="33" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
            </defs>
        </svg>),
        name: 'Москва Сити'
    },

    {
        id: 3,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g clip-path="url(#clip0_1170_2823)">
                <path d="M31.8885 14.1317L27.1585 9.40175C26.3253 4.31425 21.9555 0.5 16.6562 0.5C11.6458 0.5 7.33238 3.99525 6.25988 8.85175C2.77288 9.47188 0.5 12.2136 0.5 15.6044C0.5 18.4231 2.19675 20.8459 4.625 21.9074V23.1875L5.835 24.3975C6.132 24.6945 6.132 25.1758 5.835 25.4728L4.84775 26.46C4.55075 26.757 4.55075 27.2383 4.84775 27.5353L5.835 28.5225C6.132 28.8195 6.132 29.3008 5.835 29.5978L4.84775 30.585C4.55075 30.882 4.55075 31.3633 4.84775 31.6603L6.19525 33.0078C6.847 33.6595 7.90575 33.6595 8.5575 33.0078L9.52413 32.0411C9.90913 31.6561 10.125 31.1336 10.125 30.5891V21.9101C12.5533 20.8486 14.25 18.4272 14.25 15.6071C14.25 12.4048 12.05 9.73863 9.0855 8.9755C10.0494 5.62463 13.106 3.25275 16.6562 3.25275C20.5324 3.25275 23.7389 6.0055 24.4209 9.70012L19.9865 14.1345C18.9621 15.1575 18.375 16.5751 18.375 18.023V28.0028C18.375 31.036 20.8417 33.5028 23.875 33.5028H28C31.0333 33.5028 33.5 31.036 33.5 28.0028V18.023C33.5 16.5751 32.9129 15.1575 31.8885 14.1345V14.1317ZM7.375 15.6058C6.2365 15.6058 5.3125 14.6818 5.3125 13.5433C5.3125 12.4047 6.2365 11.4808 7.375 11.4808C8.5135 11.4808 9.4375 12.4047 9.4375 13.5433C9.4375 14.6818 8.5135 15.6058 7.375 15.6058Z" fill="#0062F0" />
            </g>
            <defs>
                <clipPath id="clip0_1170_2823">
                    <rect width="33" height="33" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
            </defs>
        </svg>),
        name: 'Загородная'
    },

    {
        id: 4,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <g clip-path="url(#clip0_1170_2823)">
                <path d="M31.8885 14.1317L27.1585 9.40175C26.3253 4.31425 21.9555 0.5 16.6562 0.5C11.6458 0.5 7.33238 3.99525 6.25988 8.85175C2.77288 9.47188 0.5 12.2136 0.5 15.6044C0.5 18.4231 2.19675 20.8459 4.625 21.9074V23.1875L5.835 24.3975C6.132 24.6945 6.132 25.1758 5.835 25.4728L4.84775 26.46C4.55075 26.757 4.55075 27.2383 4.84775 27.5353L5.835 28.5225C6.132 28.8195 6.132 29.3008 5.835 29.5978L4.84775 30.585C4.55075 30.882 4.55075 31.3633 4.84775 31.6603L6.19525 33.0078C6.847 33.6595 7.90575 33.6595 8.5575 33.0078L9.52413 32.0411C9.90913 31.6561 10.125 31.1336 10.125 30.5891V21.9101C12.5533 20.8486 14.25 18.4272 14.25 15.6071C14.25 12.4048 12.05 9.73863 9.0855 8.9755C10.0494 5.62463 13.106 3.25275 16.6562 3.25275C20.5324 3.25275 23.7389 6.0055 24.4209 9.70012L19.9865 14.1345C18.9621 15.1575 18.375 16.5751 18.375 18.023V28.0028C18.375 31.036 20.8417 33.5028 23.875 33.5028H28C31.0333 33.5028 33.5 31.036 33.5 28.0028V18.023C33.5 16.5751 32.9129 15.1575 31.8885 14.1345V14.1317ZM7.375 15.6058C6.2365 15.6058 5.3125 14.6818 5.3125 13.5433C5.3125 12.4047 6.2365 11.4808 7.375 11.4808C8.5135 11.4808 9.4375 12.4047 9.4375 13.5433C9.4375 14.6818 8.5135 15.6058 7.375 15.6058Z" fill="#0062F0" />
            </g>
            <defs>
                <clipPath id="clip0_1170_2823">
                    <rect width="33" height="33" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
            </defs>
        </svg>),
        name: 'Зарубежная'
    }
]

type TFilterPopup = {
    isPopupClosing:boolean
}

const FilterPopup: React.FC<TFilterPopup> = ({isPopupClosing}) => {
    let [mainBlockFilters, setMainBlockFilters] = useState<TFilter[]>([]);
    let [commercialBlockFilters, setCommercialBlockFilters] = useState<TFilter[]>([]);
    let [totalFilters, setTotalFilters] = useState(0)
    let [isAnimation, setIsAnimation] = useState(false)

    function mainFilterHandler(newFilter: TFilter) {
        if (mainBlockFilters.some((filter) => filter.id === newFilter.id)) {
            setMainBlockFilters(mainBlockFilters.filter((oldFilter) => oldFilter.id !== newFilter.id));
        } else {
            setMainBlockFilters((prev) => [...prev, newFilter]);
        }
    }

    function commercialFilterHandler(newFilter: TFilter) {
        if (commercialBlockFilters.some((filter) => filter.id === newFilter.id)) {
            setCommercialBlockFilters(commercialBlockFilters.filter((oldFilter) => oldFilter.id !== newFilter.id));
        } else {
            setCommercialBlockFilters((prev) => [...prev, newFilter]);
        }
    }

    useEffect(() => {
        setTotalFilters(mainBlockFilters.length + commercialBlockFilters.length)
    }, [mainBlockFilters, commercialBlockFilters])

    return (
        <div className={`filter__popup__container ${isPopupClosing ? 'closing' : 'not-closing'}`}>
            <div className='filter__popup'>
                <div>
                <span className='popup__title'>Фильтр</span>
                <div className='filter__blocks__container'>
                    <div className='filter__block main__block' id='main__filter__block'>
                        <div className='filter__block__title__container'>
                            <span className='filter__block__title'>Основное</span>
                            {mainBlockFilters.length > 0 && (
                                <span className='filter__block__title__amount'>
                                    {`(${mainBlockFilters.length})`}
                                </span>
                            )}
                        </div>
                        <div className='filter__cards__container'>
                            {mainFilters.map((filter) => (
                                <div
                                    key={filter.id}
                                    className={`filter__card ${mainBlockFilters.some((selectedFilters) => selectedFilters.id === filter.id) ? 'active' : 'not-active'}`}
                                    onClick={() => mainFilterHandler(filter)}
                                >
                                    <img
                                        src='/images/interior__6.png'
                                        alt={filter.name}
                                    />
                                    <div className='filter__card__ui__container'>
                                        <div className='filter__card__icon'>
                                            {filter.icon}
                                        </div>
                                        <span className='filter__name'>{filter.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='filter__block main__block' id='main__filter__block'>
                        <div className='filter__block__title__container'>
                            <span className='filter__block__title'>Коммерческая недвижимость</span>
                            {commercialBlockFilters.length > 0 && (
                                <span className='filter__block__title__amount'>
                                    {`(${commercialBlockFilters.length})`}
                                </span>
                            )}
                        </div>
                        <div className='filter__cards__container'>
                            {commercialFilters.map((filter) => (
                                <div
                                    key={filter.id}
                                    className={`filter__card ${commercialBlockFilters.some((selectedFilters) => selectedFilters.id === filter.id) ? 'active' : 'not-active'}`}
                                    onClick={() => commercialFilterHandler(filter)}
                                >
                                    <img
                                        src='/images/interior__6.png'
                                        alt={filter.name}
                                    />
                                    <div className='filter__card__ui__container'>
                                        <div className='filter__card__icon'>
                                            {filter.icon}
                                        </div>
                                        <span className='filter__name'>{filter.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='filter__cards__form__container'>
                        <div className='filter__card__form__input'>
                            <div className='filter__card__input__cntainer'>
                                <span className='input__title'>Площадь м²</span>
                                <input type='number' placeholder='От' />
                            </div>
                            <input type='number' placeholder='До' />
                        </div>

                        <div className='filter__card__form__input'>
                            <div className='filter__card__input__cntainer'>
                                <span className='input__title'>Цена ₽</span>
                                <input type='number' placeholder='От' />
                            </div>
                            <input type='number' placeholder='До' />
                        </div>
                    </div>

                    <div className='filter__apply__btns__container'>
                        <button
                            className={`blue__btn anim__btn ${isAnimation ? 'animate__bc' : 'animate__bc__to__default'}`}
                            onMouseOver={() => setIsAnimation(true)}
                            onMouseOut={() => setIsAnimation(false)}
                        >
                            <span className='btn__text'>
                                {`Применить (${totalFilters && (totalFilters)})`}
                            </span>

                            <span className='btn__text__before'>
                                {`Применить (${totalFilters && (totalFilters)})`}
                            </span>
                        </button>

                        <button
                            className={`blue__btn anim__btn ${isAnimation ? 'animate__bc' : 'animate__bc__to__default'}`}
                            onMouseOver={() => setIsAnimation(true)}
                            onMouseOut={() => setIsAnimation(false)}
                        >
                            <span className='btn__text'>
                                Отменить
                            </span>

                            <span className='btn__text__before'>
                                Отменить
                            </span>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};


export default FilterPopup
