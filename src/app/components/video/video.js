'use client'
import { useRef, useEffect } from 'react';

export default function Video({src, isPlaying}){
    const ref = useRef(null);

    useEffect(() => {
        if(isPlaying){
            console.log('PLAY()');
            ref.current.play();
        }else{
            console.log('PAUSE()');
            ref.current.pause();
        }
    }, [isPlaying])
    return(
        <>
            <video ref={ref} src={src} loop playsInline></video>
        </>
    )
}