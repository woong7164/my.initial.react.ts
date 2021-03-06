import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import paths from '$ROUTE/pathsConstant';

const NoMatch = () => {
  return <h2>404</h2>;
};

const Header = lazy(() =>
  import(/* webpackChunkName: "header" */ '$LAYOUT/Header'),
);
const Footer = lazy(() =>
  import(/* webpackChunkName: "footer" */ '$LAYOUT/Footer'),
);
import Loading from '$LAYOUT/Loading';

const LayoutRoute = ({
  key,
  path,
  exact,
  component: Component,
  isHeader,
  isFooter,
}) => {
  const isLoading = useSelector(
    (state) => state.common.layout.isLoading,
    false,
  );
  return (
    <>
      {isHeader && <Header />}
      {isLoading && <Loading />}
      <Route path={path} exact={exact} key={key} render={() => <Component />} />
      {isFooter && <Footer />}
    </>
  );
};

const RoutePage = () => {
  return (
    <Switch>
      {paths.map((obj) => {
        return (
          <LayoutRoute
            key={obj.name}
            path={obj.path}
            exact
            component={obj.component}
            isHeader={obj.isHeader}
            isFooter={obj.isFooter}
          />
        );
      })}
      <Redirect from="/old-match" to="/will-match" />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default RoutePage;
