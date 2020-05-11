import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container, NavWrapper } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [listSelected, setListSelected] = useState(true);
  const [importSelected, setImportSelected] = useState(false);

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setImportSelected(false);
        setListSelected(true);
        break;
      case '/import':
        setImportSelected(true);
        setListSelected(false);
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavWrapper active={listSelected}>
            <Link to="/">Listagem</Link>
          </NavWrapper>
          <NavWrapper active={importSelected}>
            <Link to="/import">Importar</Link>
          </NavWrapper>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
