import React, { useContext } from 'react';

import { Container } from './styles'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

const Header: React.FC = () => {

  const { colors } = useContext(ThemeContext);

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
        offColor={colors.primary}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;