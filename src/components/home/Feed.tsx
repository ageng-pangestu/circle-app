import { useEffect, useState } from "react";
import { usePostFunction } from "./hook/usePostFunction";
import { IPostModel } from "../../types/post";
import FeedItem from "./FeedItem";

const Feed = () => {
  const postFunction = usePostFunction();

  const [dataPost, setDataPost] = useState<IPostModel[]>([]);

  useEffect(() => {
    postFunction.getAllPost().then((result) => {
      setDataPost(result);
    });
  }, []);

  console.log(dataPost);

  return dataPost.map((item) => {
    return (
      <>
        <FeedItem item={item} />
      </>
    );
  });
};

export default Feed;
