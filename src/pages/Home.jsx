import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <div className="container">
        <section id="podologia">
          <h2>Podologia</h2>

          <article>
            <p>
              A podologia é uma especialidade da área da saúde que cuida dos pés, prevenindo e tratando problemas como calos, unhas encravadas, micoses e rachaduras. Na Duda Arte, você encontra atendimento humanizado, com foco na saúde e conforto.
            </p>
            <Link to="/podologia">Leia Mais</Link>
          </article>
        </section>

        <section id="esteticaavancada">
          <h2>Estética Avançada</h2>

          <article>
            <p>
              Utilizando técnicas modernas, a estética avançada busca promover a beleza, autoestima e bem-estar. São oferecidos tratamentos faciais e corporais personalizados, como limpeza de pele, drenagem linfática, e muito mais.
            </p>
            <Link to="/estetica">Leia Mais</Link>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Home;
