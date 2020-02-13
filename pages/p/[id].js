// import { useRouter } from 'next/router';
// import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import Layout from '../../components/Layout';

const Hello = () => (
  <div>
    <a>글로벌 스타일 테스트</a>
  </div>
);

const Post = (props) => (
  <Layout>
    <h1>{props.data[0].title}</h1>
    <p>{props.data[0].b_desc}</p>
    <p>{props.data[0].author}</p>
    <div className="global_test">
      <Hello />
    </div>
    <style jsx global>
      {`
        .global_test a{
          color:red;
        }
        .global_test a:hover{
          color:blue;
        }
      `}
    </style>
  </Layout>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  // console.log(id);
  const res = await axios(`http://127.0.0.1:3000/data/${id}`);
  const data = await res.data;

  console.log(`Fetched show: ${data.title}`);

  return { data };
};

export default Post;
