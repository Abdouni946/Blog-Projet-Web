import Header from "./Header";
import Posts from "../component/Posts";

export default function Home() {
 
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
      </div>
    </>
  );
}
