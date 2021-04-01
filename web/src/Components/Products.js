import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/Products.module.css'

const Products = () => {
   const [products, setProducts] = React.useState(null)

   React.useEffect(() => {
      fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then(response => response.json())
      .then(json => setProducts(json))

   }, [])

   if(products === null) return null
   return (
      <section className={style.prods + " animeLeft"}>
         {products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`}>
               <img 
                  src={product.fotos[0].src} 
                  alt={product.fotos[0].titulo} 
               />
               <h1 className={style.name}>{product.nome}</h1>
            </Link>
         ))}
      </section>
   )
}

export default Products
