import Link from "next/link";

const Home = props => (
  <div>
    <h1>HEY!</h1>
    <Link href="/sell">
      <a>go sell</a>
    </Link>
  </div>
);

export default Home;