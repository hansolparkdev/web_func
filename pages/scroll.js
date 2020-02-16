/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const Scroll = () => {
  const [scrollData, setScrollData] = useState();
  const [jpdata, setJpdata] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log(window.scrollY);
      setScrollData(window.scrollY);
    });
    // console.log(scrollData);
    if (window.scrollY === 100) {
      for (let i = 0; i < 97; i += 1) {
        setJpdata(i);
      }
    }
  }, [scrollData, jpdata]);

  return (
    <Layout>
      <h1>스크롤 이벤트</h1>
      <div style={{ color: 'green', height: '1800px' }}>{jpdata}</div>
    </Layout>
  );
};

export default Scroll;
