import "./menu.css";

function Menuheader() {
  return (
    <div className="header-menu">
      <div className="header-web underlineinheader">HEAD</div>
      <div className="header-menu-select">
        <a href="/">page1</a>
        <a href="/p2">page2</a>
        <a href="/p3">page3</a>
      </div>
    </div>
  );
}

export default Menuheader;
