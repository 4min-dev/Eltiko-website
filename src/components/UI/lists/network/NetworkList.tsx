import React from 'react'
import './networkList.scss'
import { INetworksData } from '../../../../interfaces/data/INetworksData'

type TNetworkList = {
    networks:INetworksData[],
    containerClassname?:string,
    cardClassname?:string
}

const NetworkList:React.FC<TNetworkList> = ({networks, containerClassname, cardClassname}) => {
    return (
        <div className={`network__container ${containerClassname && containerClassname}`}>
            {networks.map((network) =>
                <a key={network.id} href={network.link} className={`network__card ${cardClassname && cardClassname}`}>
                    <img src={network.logo} alt={network.name} />
                    <span className='network__title'>{network.name}</span>
                </a>
            )}
        </div>
    )
}

export default NetworkList
