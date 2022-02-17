import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <section className={styles.produtos + ' animeLeft'}>
      <Head title={`Ranek | Produtos`} />
      {produtos.map((e) => (
        <Link to={`produto/${e.id}`} key={e.id}>
          <img src={e.fotos[0].src} alt={e.fotos[0].titulo} />
          <h1 className={styles.nome}>{e.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
