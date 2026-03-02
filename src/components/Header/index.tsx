import styles from "./styles.module.scss";

type NavItem = {
  label: string;
  href?: string;
  active?: boolean;
  icon?: string;
};

const navItems: NavItem[] = [
  { label: "Todas categorias", href: "#" },
  { label: "Supermercado", href: "#" },
  { label: "Livros", href: "#" },
  { label: "Moda", href: "#" },
  { label: "Lançamentos", href: "#" },
  { label: "Ofertas do dia", href: "#", active: true },
  { label: "Assinatura", href: "#", icon: "/CrownSimple.png" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topItems} aria-label="Benefícios da loja">
            <span className={styles.topItem}>
              <img
                className={styles.threeIcons}
                src="/ShieldCheck.png"
                alt="shield icon"
              />
              <span className={styles.qualities}>
                Compra <strong>100% segura</strong>
              </span>
            </span>

            <span className={styles.topItem}>
              <span aria-hidden="true">
                <img
                  className={styles.threeIcons}
                  src="/Truck.png"
                  alt="shield icon"
                />
              </span>
              <span className={styles.qualities}>
                <strong>Frete grátis</strong> acima de R$ 200
              </span>
            </span>

            <span className={styles.topItem}>
              <span aria-hidden="true">
                <img
                  className={styles.threeIcons}
                  src="/CreditCard.png"
                  alt="shield icon"
                />
              </span>
              <span className={styles.qualities}>
                <strong>Parcele</strong> suas compras
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.mainRow}>
        <div className={styles.container}>
          <div className={styles.brandSearchActions}>
            <a
              className={styles.logo}
              href="#"
              aria-label="Econverse - Página inicial"
            >
              <img src="/logo.png" alt="logo" />
            </a>

            <form
              className={styles.search}
              role="search"
              aria-label="Buscar produtos"
            >
              <input
                className={styles.searchInput}
                type="search"
                placeholder="O que você está buscando?"
                aria-label="Buscar"
              />
              <button
                className={styles.searchButton}
                type="submit"
                aria-label="Pesquisar"
              >
                <img src="/Search.png" alt="search" />
              </button>
            </form>

            <nav className={styles.actions} aria-label="Ações do usuário">
              <a className={styles.iconBtn} href="#" aria-label="Meus pedidos">
                <img src="/BoxIcon.png" alt="box-icon" />
              </a>
              <a className={styles.iconBtn} href="#" aria-label="Favoritos">
                <img src="/Heart.png" alt="heart-icon" />
              </a>
              <a className={styles.iconBtn} href="#" aria-label="Minha conta">
                <img src="/UserCircle.png" alt="user-circle" />
              </a>
              <a className={styles.iconBtn} href="#" aria-label="Carrinho">
                <img src="/ShoppingCart.png" alt="credit-card" />
              </a>
            </nav>
          </div>
        </div>
      </div>

      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.label} className={styles.navItem}>
            <a
              className={`${styles.navLink} ${item.active ? styles.active : ""}`}
              href={item.href}
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt=""
                  className={styles.navIcon}
                  aria-hidden="true"
                />
              )}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
