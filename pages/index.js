import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import Layout from '../components/Layout';

const Index = (props) => (
  <Layout>
    <h1>Board</h1>
    <ul>
      {props.datas.map((data) => (
        <li key={data.seq}>
          <Link href="/p/[id]" as={`/p/${data.seq}`}>
            <a>{data.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        h1, a{
          font-family: "Arial";
        }
        ul{
          padding:0
        }
        li{
          list-style: none;
        }
      `}
    </style>
  </Layout>
);
Index.getInitialProps = async () => {
  const res = await axios('http://127.0.0.1:3000/data/');
  // console.log(res);
  const data = await res.data;
  console.log(`show data fetched. Count: ${data.length}`);

  return {
    datas: data.map((entry) => entry),
  };
};

export default Index;
