import React, { useState } from 'react'
import { mdiMotionPauseOutline, mdiMotionPlayOutline } from "@mdi/js";
import { Icon } from '@mdi/react';
import styled from 'styled-components';

export default function ButtonAnimation() {

    const [status, setStatus] = useState<'Pause' | 'Play'>('Pause');

    function handleEventAnimation() {
        const page = document.querySelector('body')?.classList;

        if (status === 'Pause') {
            page?.add('no-animation');
            setStatus('Play')
        }
        else {
            page?.remove('no-animation');
            setStatus('Pause')
        }
    }

    return <Wrapper onClick={handleEventAnimation}>
        <span>{status} animations</span>
        <Icon
            path={status === 'Pause' ? mdiMotionPauseOutline : mdiMotionPlayOutline}
            size="30px"
            color='#C2BFF4'
        />
    </Wrapper>
}

const Wrapper = styled.button`
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 25px;
    box-shadow: 0 0 5px #C2BFF4;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    overflow: hidden;
    animation: initializedButton 1s 2;
    
    & span {
        font-size: 14px;
        font-weight: bold;
        color: #C2BFF4;
        margin-right: 6px;
        display: none;
        transition: all 0.2s;
    }

    &:hover {
        background: #C2BFF4;

        & span {
            display: initial;
            color: #6660C8;
        }

        & path {
            fill: #6660C8!important;
        }
    }

    @keyframes initializedButton {
        from {
            background: #C2BFF4;
        }
    }
`