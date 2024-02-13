"use client"

import { useState, useRef, useEffect } from "react";

function VideoPlayer(url, isPlaying) {
    const refVideo = useRef(null);

    console.log(url.url);
    console.log(url.isPlaying)

    useEffect(() => {
        if (url.isPlaying) {
            refVideo.current.play();
        }else{
            refVideo.current.pause();
        }
    }, [url.isPlaying]);

    return (
        <>
            <video ref={refVideo} src={url.url} loop playsInline controls preload="none" style={{width: '300px', height: '300px', zIndex: '1000'}}></video>
        </>
    )
}

export function Form2() {
    //variables de estado del componente
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    const [isPlaying, setIsPlaying] = useState(false);

    const [datos, setDatos] = useState();
    const [pedir, setPedir] = useState(true);
    const [tarea, setTarea] = useState(1);

    const domRef = useRef(null);
    const refNumber = useRef(0);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${tarea}`).
        then((res) => res.json()).
        then((data) => {
            setDatos(data);
        })
    }, [pedir])

    async function manejadorSubmit(e) {
        e.preventDefault();
        setError(null);
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success');
        }catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function submitForm(answer) {
        return new Promise((resolve, reject) => {
            let respuestaErrada = answer.toLowerCase() !== 'si lo se';
            if (respuestaErrada) {
                reject(new Error('No es la respuesta correcta'));
            }else{
                resolve();
                alert("si la sabes");
            }
        }
        )
    }

    function manejadorCambioTextArea(e) {
        setAnswer(e.target.value)
    }

    function hacerFocusAlDOMREF() {
        domRef.current.focus();
    }

    function actualizarRefNumber() {
        refNumber.current = refNumber.current + 1;
        alert(`El valor de refNumber actual es: ${refNumber.current}`);
    }


    return(
        <>
            <h4>Prueba de useState para estados</h4>
            <form onSubmit={manejadorSubmit}>
                <textarea 
                    value={answer} 
                    onChange={(manejadorCambioTextArea)} 
                    disabled={status === 'submitting'} >
                </textarea>
                <br></br>
                <button disabled={answer.length === 0 || status === 'submitting'}>Enviar</button>
                {error !== null && 
                    <p>{error.message}</p>
                }
            </form>
            <div>
                <h3>Haciendo ref al DOM</h3>
                <input ref={domRef} placeholder="Este es el input DOMREF"></input><br></br>
                <button onClick={hacerFocusAlDOMREF}>Hacer focus al DOMREF</button>
            </div>
            <div>
                <h3>Ref no renderiza el componente</h3>
                <button onClick={actualizarRefNumber}>Cambiar valor al refNumber</button><br></br>
                <p>Valor de refNumber: {refNumber.current}</p>
            </div>
            <div>
                <button style={{zIndex: '1000'}} onClick={() => setIsPlaying(!isPlaying)}>Reproducir / Pausar</button>
                <VideoPlayer isPlaying={isPlaying} url={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} />
            </div>
            <div>
                <h4>Datos con fetch y effect</h4>
                <button onClick={()=>{setTarea(tarea + 1); setPedir(!pedir)}}>Pedir nuevo dato</button><br></br>
                <p>El dato es: {datos?.title}</p>

            </div>
        </>
    )
}