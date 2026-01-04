export function NavBar() {
  const navLinks = [
    { name: "Solutions", href: "/" },
    { name: "Security", href: "/services" },
    { name: "Pricing", href: "/portfolio" },
    { name: "Sign-in", href: "/contact" },
  ];
  return (
    <>
      <ul className="nav-link-ul">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
        <li>
          {" "}
          <button className="black-btn">Apply for Early acess</button>
        </li>
      </ul>
    </>
  );
}
export function NavLogo() {
  return (
    <div className="nav-logo">
      <span></span>
      Superplan
    </div>
  );
}
export function Header() {
  return (
    <nav className="header">
      <NavLogo />
      <NavBar />
    </nav>
  );
}
