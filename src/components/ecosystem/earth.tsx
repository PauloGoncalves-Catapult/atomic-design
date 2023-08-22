import React from 'react';
import earth from '../../assets/earth.png';
import { Organisms } from '../organisms/organisms';

export const Earth = () => {
    return (
        <div>
            <div style={{ margin: 200 }}>
                <img src={earth} alt="earth" height={120} />
                <span>Hi, Im Earth, also known as a Ecosystem, let's explore some of the living organisms that live inside me</span>
            </div>
            <a href='/organisms'>Let's Go</a>
        </div>
    )
}