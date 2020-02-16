import Link from 'next/link';

const linkStype = {
  marginRight: 15,
  textTransform: 'uppercase',
  textDecoration: 'none',
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStype}>home</a>
    </Link>
    <Link href="/about/">
      <a style={linkStype}>about</a>
    </Link>
    <Link href="/slide/">
      <a style={linkStype}>slide</a>
    </Link>
    <Link href="/scroll/">
      <a style={linkStype}>scroll</a>
    </Link>
  </div>
);

export default Header;
