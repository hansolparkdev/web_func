import Layout from '../components/Layout';

const Slide = () => (
  <Layout>
    <h1>이미지 슬라이드1</h1>
  </Layout>
);
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
