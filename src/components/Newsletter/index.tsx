import { useState } from "react";
import styles from "./styles.module.scss";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

  function handleSubmit() {
    if (!accepted) return;
    if (!name.trim() || !email.trim()) return;

    // reset (opcional)
    setName("");
    setEmail("");
    setAccepted(false);
  }

  return (
    <section className={styles.section} aria-label="Newsletter">
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Inscreva-se na nossa newsletter</h1>
          <span className={styles.subtitle}>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </span>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
          aria-label="Formulário newsletter"
        >
          <div className={styles.row}>
            <input
              className={styles.input}
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Nome"
            />

            <input
              className={styles.input}
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="E-mail"
            />

            <button className={styles.button} type="submit">
              INSCREVER
            </button>
          </div>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className={styles.borderCheck}
            />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  );
}
