import { lazy } from 'react';
//webpackChunkName에 쓴 파일명 으로 빌드가 된다! 소문자로 꼭 써주기
const PROTO_HOME = lazy(() =>
  import(/* webpackChunkName: "proto_home" */ '$APPS/proto/protoMain'),
);

const PROTO_ROOT_PATH = 'proto';

const PROTO = [
  {
    name: '홈',
    path: `/${PROTO_ROOT_PATH}`,
    component: PROTO_HOME,
    exact: true,
    isProtected: false,
    isHeader: true,
    isFooter: true,
  },
];
export default PROTO;
