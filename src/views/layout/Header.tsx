import * as React from 'react';
import { useHistory } from 'react-router-dom';
//import '$STYLE/components/fit/header.css';

const Header = () => {
  const history = useHistory();

  const onClickGoBack = () => {
    history.goBack();
  };

  return <header className="pageHeader"></header>;
};

export default Header;
