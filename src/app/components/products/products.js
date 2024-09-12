'use client'
import Image from 'next/image';
import styleProduct from './products.module.css'
import { useState } from 'react';
import { useImmer } from 'use-immer';

//En la definicion del componente podemos definir props con valores por defecto en caso de no recibir de algun componente padre la informacion requerida
//En este caso, se declara la prop titleSize con un valor por defecto.
export default function Products({ titleSize = '2em' }) {
  //variables de estado para practicar el capitulo 10
  const [cantAComprar, setCantAComprar] = useState(0);
  //variable de estado que almacena el nombre del comprador
  const [nombreComprador, setNombreComprador] = useState('');
  //variable de estado que almacena si el usuario es vip o no
  const [esVip, setEsVip] = useState(false);

  const [products, setProducts] = useImmer({
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
  })

  function sumarCompra() {
    setCantAComprar(cantAComprar + 1);
  }

  //Ejemplo de filtrado
  const filteredProducts = products.productsArray.filter(product => product.price > 0)

  //Ejemplo de mapeo de los datos
  const productsArrayMapped = filteredProducts.map((product) => (
      (product.qty > 0) ?
      (<div key={product.id} onClick={(e) => {
        sumarCompra();
        console.log(e);
        setProducts(producto => {
          producto.productsArray[`${product.id - 1}`].qty = producto.productsArray[`${product.id - 1}`].qty - 1;
        })
      }}>
        <Image src={product.img} alt={product.name} width={150} height={150} /><figcaption>{product.name}</figcaption><figcaption>Quantity: {product.qty}</figcaption>
      </div>):
        null
  ))

  return (
    <>
      <div className={styleProduct.containerProducts}>
        <h1 style={{ fontSize: titleSize }}>{products.title}</h1>
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
        <div className={styleProduct.boxCantidadAComprar}>
          Qty Buy: {cantAComprar}
        </div>
      </div>
    </>
  )
}