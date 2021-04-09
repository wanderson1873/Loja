import React from 'react'
import Head from './Head'
import { useParams } from 'react-router'
import style from '../styles/Product.module.css'

const Product = () => {
   const [product, setProduct] = React.useState(null)
   const [loading, setLoading] = React.useState(false)
   const [error, setError] = React.useState(false)

   const { id } = useParams()
   React.useEffect(() => {
      async function fetchProduct(url) {
         try {
            setLoading(true)
            const response = await fetch(url)
            const json = await response.json()
            setProduct(json)
         } catch (erro) {
            setError('Error: ' + erro)
         } finally {
            setLoading(false)
         }
         
      }
      fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
   }, [id])

   if(loading) return <div className="loading"></div>
   if(error) return <p>{error}</p>
   if(product === null) return null
   return (
      <section className={style.prod}>
         <Head title={`Loja | ${product.nome}`} description={product.descricao} />
         <div>
            {product.fotos.map(images => (
               <img 
                  key={images.src} 
                  src={images.src} 
                  alt={images.titulo}
               />
            ))}
         </div>
         <div>
            <h1>{product.nome}</h1>
            <span className={style.price}>R$ {product.preco} </span>
            <p className={style.description}> {product.descricao} </p>
         </div>
      </section>
   )
}

export default Product
