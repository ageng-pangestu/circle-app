import CommentForm from "../components/contentdetail/CommentForm";

import RepliesItem from "../components/contentdetail/RepliesItem";
import { Status } from "../components/contentdetail/Status";

const ContentDetail = () => {
  return (
    <>
      <Status />
      <CommentForm />
      <RepliesItem />
    </>
  );
};

export default ContentDetail;
