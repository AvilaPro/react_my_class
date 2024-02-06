"use client"

function BotonHijo({ handleClick, content }) {
    return (
        <>
            <button onClick={handleClick}>{content}</button>
        </>
    );
}

export function BotonPadre({ content1, content2, url1, url2 }) {
    function handleClick(msg, url1) {
        return function () {
            alert(msg);

            window.open
                (url1, "_blank");
        };
    }

    function handleClick2(msg, url2) {
        return function () {
            alert(msg);

            window.open
                (url2, "_blank");
        };
    }

    return (
        <>
            <BotonHijo
                handleClick={handleClick("Instala la app", url1)}
                content={content1}
                className="btn"
            ></BotonHijo>

            <BotonHijo
                handleClick={handleClick2("Instala iOS", url2)}
                content={content2}
                className="btn"
            ></BotonHijo>
        </>
    );
} 