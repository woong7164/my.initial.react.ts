// react
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { ProtoVo } from '$SRC/api/vo/proto/ProtoVo';

import * as actions from '$SRC/views/apps/proto/protoAction';

import * as layoutActions from '$STORE/common/layout/layoutAction';
import { RootState } from '$SRC/store/reducers';

const ProtoMain = () => {
  const urlParams = useParams();
  const { cd } = urlParams;
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState<Boolean>(false);

  const proto: ProtoVo = useSelector(
    (state: RootState) => state.protoStore.proto,
  );

  const getProtoInfo = () => {
    dispatch(actions.getProto.request({}));
  };

  const setHeader = (): void => {
    dispatch(layoutActions.setHeaderTitle('this is proto header'));
  };

  useEffect(() => {
    setHeader();
    getProtoInfo();
  }, []);

  useEffect(() => {
    console.log('proto', proto);
  }, [proto]);

  return <section className="contents">PROTO DISPLAY {proto?.protoId}</section>;
};

export default ProtoMain;
