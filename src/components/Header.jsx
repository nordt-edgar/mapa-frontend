function Header() {
    return (
      <header>
        <div className="container flex justify-space-bw">
          <div id="hearder-logo">
            <a href="/">
              <img src="/images/Duda Arte logo.png" width="100px" alt="logo Duda Arte" />
            </a>
          </div>
          <div id="hearder-frase" className="alinhamento-texto">
            <h3>Desenvolvido por Edgar Nordt</h3>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  