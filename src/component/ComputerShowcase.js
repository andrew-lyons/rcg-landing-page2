import React from 'react'
import {
    faApple,
    faWindows,
    faGoogle,
    faLinux,
    faAmazon,
    faAndroid,
    faRaspberryPi,
    faBlackberry
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ComputerShowcase = () => (
        <div>
            <FontAwesomeIcon icon={faApple} size="3x" className="icon-margins" />
            <FontAwesomeIcon icon={faAndroid} size="3x" className="icon-margins"/>            
            <FontAwesomeIcon icon={faWindows} size="3x" className="icon-margins"/>
            <FontAwesomeIcon icon={faGoogle} size="3x" className="icon-margins"/>
            <FontAwesomeIcon icon={faLinux} size="3x" className="icon-margins"/>
            <FontAwesomeIcon icon={faAmazon} size="3x" className="icon-margins"/>
            <FontAwesomeIcon icon={faRaspberryPi} size="3x" className="icon-margins"/>
            <FontAwesomeIcon icon={faBlackberry} size="3x" className="icon-margins"/>
        </div>
    )