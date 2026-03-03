import styles from "./styles.module.scss";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.left}>
            <img className={styles.imgLogo} src="/logo.png" alt="logo footer" />

            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className={styles.social}>
              <button aria-label="Instagram" className={styles.iconBtn}>
                <img
                  className={styles.img}
                  src="/Instagram.png"
                  alt="instagram"
                />
              </button>
              <button aria-label="Facebook" className={styles.iconBtn}>
                <img
                  className={styles.img}
                  src="/Facebook.png"
                  alt="instagram"
                />
              </button>
              <button aria-label="LinkedIn" className={styles.iconBtn}>
                <img
                  className={styles.img}
                  src="/Linkedin.png"
                  alt="instagram"
                />
              </button>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.columns}>
            <div className={styles.col}>
              <p>Institucional</p>
              <a href="#">Sobre Nós</a>
              <a href="#">Movimento</a>
              <a href="#">Trabalhe conosco</a>
            </div>

            <div className={styles.col}>
              <p>Ajuda</p>
              <a href="#">Suporte</a>
              <a href="#">Fale Conosco</a>
              <a href="#">Perguntas Frequentes</a>
            </div>

            <div className={styles.col}>
              <p>Termos</p>
              <a href="#">Termos e Condições</a>
              <a href="#">Política de Privacidade</a>
              <a href="#">Troca e Devolução</a>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.reserved}>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
    </>
  );
}
