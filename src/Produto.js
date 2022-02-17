import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Produto.module.css';
import Produtos from './Produtos';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function feacthProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError('Um error ocorreu');
      } finally {
        setLoading(false);
      }
    }
    feacthProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + ' animeLeft'}>
      <Head title={`Ranek | ${produto.nome}`} />
      <div>
        {produto.fotos.map((e) => (
          <img key={e.src} src={e.src} alt={e.titulo} />
        ))}
      </div>
      <div>
        {' '}
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
