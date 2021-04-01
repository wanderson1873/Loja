import React from 'react'
import style from '../styles/Contact.module.css'
import imgContact from '../img/contact.jpg'
import Head from './Head'

const Contact = () => {
   return (
      <section className={style.contact + " animeLeft"}>
         <Head title="Loja | Contato" description="Entre em contato" />
         <img src={imgContact} alt=""/>

         <div>
            <h1>Entre em contato</h1>
            <ul className={style.dados}>
               <li>wanderson1873@live.com</li>
               <li>+351 925 467 552</li>
               <li>Rua Ali Perto, 46</li>
            </ul>
         </div>
         
      </section>
   )
}

export default Contact
