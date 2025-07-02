import { useState } from 'react';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });

  const [erros, setErros] = useState({});
  const [formEnviado, setFormEnviado] = useState(false);

  const validar = () => {
    const novosErros = {};

    if (!formData.nome.trim()) {
      novosErros.nome = 'O nome é obrigatório.';
    }

    if (formData.telefone && formData.telefone.replace(/\D/g, '').length !== 11) {
      novosErros.telefone = 'O telefone deve conter 11 dígitos.';
    }

    if (!formData.email) {
      novosErros.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      novosErros.email = 'Formato de e-mail inválido.';
    }

    if (!formData.mensagem.trim()) {
      novosErros.mensagem = 'A mensagem é obrigatória.';
    } else if (formData.mensagem.length > 200) {
      novosErros.mensagem = 'A mensagem deve ter no máximo 200 caracteres.';
    }

    return novosErros;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errosValidados = validar();

    if (Object.keys(errosValidados).length === 0) {
      setErros({});
      setFormEnviado(true);
      setTimeout(() => {
        setFormEnviado(false);
        setFormData({
          nome: '',
          telefone: '',
          email: '',
          mensagem: ''
        });
      }, 10000);
    } else {
      setErros(errosValidados);
    }
  };

  return (
    <main>
      <div className="container">
        <section>
          <h2>Entre em Contato</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="nome">Nome*:</label>
              <input
                id="nome"
                name="nome"
                type="text"
                value={formData.nome}
                onChange={handleChange}
              />
              {erros.nome && <p>{erros.nome}</p>}
            </div>

            <div>
              <label htmlFor="telefone">Telefone Celular:</label>
              <input
                id="telefone"
                name="telefone"
                type="text"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(99) 99999-9999"
              />
              {erros.telefone && <p>{erros.telefone}</p>}
            </div>

            <div>
              <label htmlFor="email">Email*:</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {erros.email && <p>{erros.email}</p>}
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem (máx. 200 caracteres)*:</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                maxLength="200"
                value={formData.mensagem}
                onChange={handleChange}
              />
              {erros.mensagem && <p>{erros.mensagem}</p>}
            </div>

            <button type="submit">Enviar</button>
          </form>

          {formEnviado && (
            <div
              style={{
                marginTop: '20px',
                padding: '20px',
                backgroundColor: '#b1d9b7',
                color: '#e46bb0',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <p>
                Mensagem enviada com sucesso! Agradecemos o contato e responderemos o
                mais breve possível.
              </p>
              <button onClick={() => setFormEnviado(false)} style={{ marginTop: '10px' }}>
                OK
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Contato;
