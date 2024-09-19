'use client'
import Image from 'next/image';
import styleProduct from './products.module.css'
import { useState, useRef, useEffect } from 'react';

//En la definicion del componente podemos definir props con valores por defecto en caso de no recibir de algun componente padre la informacion requerida
//En este caso, se declara la prop titleSize con un valor por defecto.
export default function Products({ titleSize = '2em' }) {
  const products = {
    title: 'Amplía tu mundo con Meta Quest 3',
    productsArray: [
      {
        id: 1,
        name: 'Meta Quest 3',
        img: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=1437163473751133&version=1725422864&transcode_extension=webp',
        qty: 10,
        price: 500
      },
      {
        id: 2,
        name: 'Meta Quest Pro',
        img: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=1077455839891225&version=1723006226&transcode_extension=webp',
        qty: 5,
        price: 1300
      },
      {
        id: 3,
        name: 'Compara las gafas',
        img: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=812646647204994&version=1725418245&transcode_extension=webp',
        qty: 0,
        price: 0
      },
      {
        id: 4,
        name: 'Accesorios',
        img: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=700108745419614&version=1725440360&transcode_extension=webp',
        qty: 7,
        price: 250
      },
      {
        id: 5,
        name: 'Aplicaciones y juegos',
        img: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=816698700078198&version=1725408736&transcode_extension=webp',
        qty: 0,
        price: 100
      },
      {
        id: 6,
        name: 'Tarjetas de Regalo',
        img: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=1450128362278378&version=1719599673&transcode_extension=webp',
        qty: 4,
        price: 0
      }
    ]
  }

  //Ejemplo de filtrado
  const filteredProducts = products.productsArray.filter(product => product.price > 0)

  //Ejemplo de mapeo de los datos
  const productsArrayMapped = filteredProducts.map((product) => (
      (product.qty > 0) ?
      (<div key={product.id}>
        <Image src={product.img} alt={product.name} width={150} height={150} /><figcaption>{product.name}</figcaption><figcaption>Quantity: {product.qty}</figcaption>
      </div>):
        null
  ))

  function SearchForm() {
      const [answer, setAnswer] = useState('');
      const [error, setError] = useState(null);
      const [status, setStatus] = useState('typing');
      const textAreaRef = useRef(null);
      const [pedir, setPedir] = useState(true);
      const [contador, setContador] = useState(0);

      // async function manejadorSubmit(e) {
      //   e.preventDefault();
      //   setStatus('submitting');
      //   try {
      //     await submitForm(answer);
      //     console.log("Confirmado");
      //     setStatus('success');
      //     hacerFocus();
      //     setError(null);
      //   } catch(err) {
      //     setStatus('typing');
      //     hacerFocus();
      //     setError(err);
      //   }
      // }

      function manejadorCambioTexto(e) {
        setAnswer(e.target.value);
      }

      useEffect(() => {
        setContador(contador+1);
        fetch(`https://jsonplaceholder.typicode.com/${answer}`)
        .then(res => {
          if (res.status != 200) {
            setError(new Error('Fallo'));
          }
          if (res.status == 200) {
            setError(null);
          }
          return res.json()
        })
        .then(data => {
          console.log(data);
          console.log("Confirmado");
          console.log(error);
          hacerFocus();
        })
        .then(() => {
          if (error === null) {
            setStatus('success');
          }
        })
        .catch((err) => {
          // console.log(err);
          setStatus('typing');
          hacerFocus();
          setError(err);
        })
      }, [pedir])
      // function submitForm(answer) {
      //   setPedir()
      // }

      function hacerFocus() {
        textAreaRef.current.focus();
      }

    return(
      <>
        <div className='d-flex justify-content-center'>
          <textarea className='border border-primary rounded border-3' name="" id="" ref={textAreaRef} value={answer} onChange={manejadorCambioTexto} disabled={status === 'submiting'} placeholder='Ingresa tu respuesta'></textarea>
          <button onClick={() => setPedir(!pedir)} className='btn btn-success' disabled={answer.length === 0 || status === 'submitting'}>Enviar</button>
        </div>
        {status == 'success' && <p className='text-success'>Respuesta correcta</p>}
        {error !== null && <p className='text-danger'>{error.message}</p>}
      </>
    )
  }

  return (
    <>
      <div className={styleProduct.containerProducts}>
        <h1 className='mt-5' style={{ fontSize: titleSize }}>{products.title}</h1>
        <SearchForm />
        <div className={styleProduct.containerCards}>
          {productsArrayMapped}
          {/* {(products.productsArray[2].qty > 0) ?
            (
            <div className={styleProduct.card}>
              <Image
                className={styleProduct.imgProduct}
                src={products.productsArray[0].img}
                width={100}
                height={100}
              />
              <p className={styleProduct.nameProduct}>{products.productsArray[0].name}</p>
            </div>
            ):
            null
          } */}
        </div>
      </div>
    </>
  )
}