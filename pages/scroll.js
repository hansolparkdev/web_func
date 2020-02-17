/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const Scroll = () => {
  const [scrollData, setScrollData] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log(window.scrollY);
      setScrollData(window.scrollY);
    });
    // console.log(scrollData);
    if (scrollData > 100) {
      // window.scrollTo({ top: 600, left: 0, behavior: 'smooth' });
      const SetInterval = setInterval(() => {
        if (current >= 97) return clearInterval(SetInterval);
        setCurrent(current + 1);
      }, 5);
      return () => clearInterval(SetInterval);
    }
    return function cleanup() {
      window.removeEventListener('scroll', () => {
        setScrollData(window.scrollY);
      });
    };
  }, [scrollData, current]);

  return (
    <Layout>
      <h1>스크롤 이벤트</h1>
      <div style={{ color: 'green', height: '300px' }}>{current}</div>
      <div style={{ color: 'green', bacgroundColor: 'black', height: '1800px' }}>{current}</div>
    </Layout>
  );
};

export default Scroll;
