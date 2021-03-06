import { useState, useCallback, useEffect } from 'react';
import Swiper from 'swiper';

const useSwiper = ({ container, params, updateFlag, pagingEl }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (pagingEl) {
      params.pagination.el = pagingEl.current;
    }
    setSwiper(new Swiper(container.current, params));
    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (updateFlag && swiper) {
      swiper.update();
    }
  }, [updateFlag]);

  return swiper;
};

export default useSwiper;

/* 사용법
import React, { useState, useRef } from 'react';
import useSwiper from '$UTIL/hook/useSwiper';

  const slideRef = useRef();
  const slidePageRef = useRef();

  const swiper = useSwiper({
    container: slideRef,
    params: {
      loop: true,
      wrapperClass: 'sliders',
      slideClass: 'sliders li',
      speed: 300,
      pagination: {
        el: '.paging',
        type: 'fraction',
      },
    },
    updateFlag : data,
    pagingEl : slidePageRef
  });

     <div ref={slideRef}>
        <ul className="swiper-wrapper sliders">
          <li className="swiper-slide slide">
            <img
              src="//ui.interpark.com:8111/data/images/pages/fit/city/gallery/dummy1.jpg"
              alt=""
            />
            <p className="source">출처 : 인터파크 투어</p>
          </li>


          <div className="paging visible" ref={slidePageRef} />
*/
