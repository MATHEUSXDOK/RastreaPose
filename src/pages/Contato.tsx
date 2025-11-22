import React, { useState } from "react";

const Contato: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSucesso(true);
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div className="pageContainer contatoContainer">
      <h2>Contato</h2>

      {sucesso && <p className="success-message">Mensagem enviada com sucesso!</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
