import { Box } from "@mui/material";
import PostBar from "../components/home/PostBar";
import Feed from "../components/home/Feed";
// import useStore from "../stores/hooks";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#1d1d1d" }}>
      <PostBar />
      <Feed />
    </Box>
  );
};

export default Home;

// const { count, decrement, increment } = useStore();
/* <h1>Home</h1>
      <p>{count}</p>
      <button onClick={decrement} style={{ width: "50px" }}>
        -
      </button>
      <button onClick={increment} style={{ width: "50px" }}>
        +
      </button>  */
