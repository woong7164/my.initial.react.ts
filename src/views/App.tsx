//react
import * as React from 'react';
import { Suspense, useEffect } from 'react';
import history from '$ROUTE/history';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
//external package
//intenalJs
//view
import RoutePage from './Route.jsx';
import Loading from '$LAYOUT/Loading';
//css
import '$STYLE/pages/fit/common.css';

const App = () => {
  const isLayer = useSelector((state) => state.common.layout.isLayer, false);

  //레이어 올라왔을때 body에 스크롤 비활
  useEffect(() => {
    document.body.style.overflow = isLayer ? 'hidden' : '';
  }, [isLayer]);

  return (
    <div className="fitContainer">
      <Suspense fallback={<Loading />}>
        <Router basename="/" history={history}>
          <RoutePage />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
