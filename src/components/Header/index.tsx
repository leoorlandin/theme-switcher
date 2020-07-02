import React from 'react';

import { Container } from './styles'

import Switch from 'react-switch';

const Header: React.FC = () => {
  return (
    <Container>
      <span>Theme Switcher</span>

      <Switch
        onChange={() => { }}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={10}
        handleDiameter={20}
        offColor="#0F1020"
        onColor="#7353BA"
      />
    </Container>
  );
};

export default Header;