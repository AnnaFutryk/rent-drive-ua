import { HeaderWrap, Link, List } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrap>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </List>
    </HeaderWrap>
  );
};

export default Header;
