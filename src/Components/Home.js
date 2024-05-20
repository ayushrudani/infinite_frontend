import react from "react";
import Card from "./Card";
import LoadMore from "./LoadMore";
import Top from "./Top";

const Home = () => {
  return (
    <div>
      <Top />

      {/* center container mx-auto my-10 */}
      <div className="w-fit mx-auto my-10">
        <LoadMore />
      </div>
    </div>
  );
};

export default Home;
