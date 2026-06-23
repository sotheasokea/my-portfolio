import './Header.css'
export function Header() {
  return (
    <>
      <header className="top-header">
        <button className="hamburger-menu" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="site-title">Welcome to my website</h1>
      </header>
    </>
  );
}
