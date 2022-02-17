import React from 'react';
import style from './Contato.module.css';
import Head from './Head';

const Contato = () => {
  return (
    <section className={style.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={style.dados}>
          <li>E-mail</li>
          <li>Telefone</li>
          <li>Endereço</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
