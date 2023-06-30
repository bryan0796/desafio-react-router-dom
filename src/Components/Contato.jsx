import React from 'react';
import styles from './Contato.module.css';
import foto from '../assets/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" description="Entre em  contato" />

      <img src={foto} alt="máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>email@outlook.com</li>
          <li>3199999-9999</li>
          <li>Rua Ali Perto, 99</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
