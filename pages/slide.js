/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';


const Slide = () => {
  // console.log('hi');
  const [img, setImg] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setImg(img + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [img]);

  if (img >= 4) {
    setImg(1);
  }
  const move = (n) => {
    setImg(n);
  };
  const prev = () => {
    if (img === 1) {
      setImg(3);
    } else {
      setImg(img - 1);
    }
  };
  const next = () => {
    setImg(img + 1);
  };

  const sectionRef = useRef();
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [carouselCount, setCarouselCount] = useState();
  const [imgW, setImgW] = useState();
  // const [pos, setPos] = useState(0);
  useEffect(() => {
    const time = 3000;
    // const carouselImage = sectionRef.current.childNodes;
    setCarouselCount(sectionRef.current.childNodes.length);
    const height = 500;
    setImgW(sectionRef.current.childNodes[0].width);
    // console.log(-imgW * carouselIndex);
    // 'carouselImage :', carouselImage, 
    console.log('time :', time, 'carouselCount :', carouselCount, 'imgW :', imgW, 'height :', height, 'carouselIndex :', carouselIndex);
    sectionRef.current.style.transform = `translateX(${-imgW * carouselIndex}px)`;
    // const intervalShow = setInterval(() => {
    // }, time);
    // return () => clearInterval(intervalShow);
  }, [carouselIndex, imgW, carouselCount]);
  const caroPrev = () => {
    if (carouselIndex >= carouselCount - 1) return;
    sectionRef.current.style.transform = 'transform 0.4s ease-in-out';
    setCarouselIndex(carouselIndex + 1);
    sectionRef.current.style.transform = `translateX(${-imgW * carouselIndex}px)`;
  };
  const caroNext = () => {
    if (carouselIndex <= 0) return;
    sectionRef.current.style.transition = 'transform 0.4s ease-in-out';
    setCarouselIndex(carouselIndex - 1);
    sectionRef.current.style.transform = `translateX(${-imgW * carouselIndex}px)`;
  }
  return (
    <Layout>
      <h1>이미지 슬라이드1</h1>
      <img src={`../static/img/${img}.jpg`} alt="" />
      <button type="button" onClick={() => { move(1); }}>a</button>
      <button type="button" onClick={() => { move(2); }}>b</button>
      <button type="button" onClick={() => { move(3); }}>c</button>
      <button type="button" onClick={() => { prev(); }}>prev</button>
      <button type="button" onClick={() => { next(); }}>next</button>

      <h1>이미지 슬라이드2</h1>
      <div className="carousel-container">
        <div className="carousel-slide" ref={sectionRef}>
          <img src="../static/img/1.jpg" alt="" id="lastClone" />
          <img src="../static/img/2.jpg" alt="" />
          <img src="../static/img/3.jpg" alt="" id="firstClone"/>
        </div>
        <button id="prevBtn" onClick={caroPrev} type="button">Prev</button>
        <button id="nextBtn" onClick={caroNext} type="button">Next</button>
      </div>
      <style jsx>
        {`
        .carousel-container{
          width: 800px;
          margin: 30px auto;
          border: 0px solid #000;
          overflow: hidden;
          position: relative;
        }
        .carousel-slide{
          display: flex;
          width: 100%;
          height: 450px;
        }
        img{
          width: 800px;
        }
      `}
      </style>
    </Layout>
  );
};

// <img style={imgStyle} src="../static/img/1.jpg" alt="" />
// <img style={imgStyle} src="../static/img/2.jpg" alt="" />
// <img style={imgStyle} src="../static/img/3.jpg" alt="" />
// Index.getInitialProps = async () => {
//   const res = await axios('http://127.0.0.1:3000/data');
//   // console.log(res);
//   const data = await res.data;
//   console.log(`show data fetched. Count: ${data.length}`);

//   return {
//     datas: data.map((entry) => entry),
//   };
// };

export default Slide;
