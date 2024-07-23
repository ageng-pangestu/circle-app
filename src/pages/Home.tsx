import { Box, Button, Input, Typography } from "@mui/material";
import PostBar from "../components/home/PostBar";
import Feed from "../components/home/Feed";
// import useStore from "../stores/hooks";

const Home = () => {
  // const { count, decrement, increment } = useStore();
  return (
    <Box>
      <PostBar />
      <Feed />
    </Box>
  );
};

export default Home;

/* <h1>Home</h1>
      <p>{count}</p>
      <button onClick={decrement} style={{ width: "50px" }}>
        -
      </button>
      <button onClick={increment} style={{ width: "50px" }}>
        +
      </button>  */
