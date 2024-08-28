import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { userReplyFunction } from "./hook/useReplyFunction";
import { useEffect, useState } from "react";
import { IPostModel } from "../../types/post";

const RepliesItem = () => {
  const { post_id } = useParams();
  const replyFunction = userReplyFunction();

  const [dataReply, setDataReply] = useState<IPostModel[]>([]);

  useEffect(() => {
    replyFunction.getAllReply(String(post_id)).then((result) => {
      setDataReply(result);
    });
  }, []);

  return dataReply.map((item) => {
    return (
      <Box key={item.author.userName} sx={{ display: "flex", padding: 1, borderBottom: "1px solid gray", gap: 2 }}>
        <Box>
          <Avatar alt="Ageng Pangetu" src={item.author.profile_pic} />
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginRight: 1 }}>
              <Link to={"UserDetail/" + "1"} style={{ color: "whitesmoke", textDecoration: "none" }}>
                {item.author.fullName}
              </Link>
            </Typography>
            <Typography variant="body2" color={"gray"}>
              {item.author.userName}
            </Typography>
            <Icon icon={"tabler:point-filled"} color="gray" />
            <Typography variant="body2" color={"gray"}>
              1h
            </Typography>
          </Box>

          <Link to={"/post/" + item.id} style={{ width: "100%", textDecoration: "none" }}>
            <Box sx={{ color: "whitesmoke" }}>
              <Typography>{item.content}</Typography>
            </Box>
          </Link>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1, gap: 1 }}>
              <Icon icon={"ph:heart-fill"} color="red" fontSize={"25px"} />
              <Typography sx={{ color: "gray" }}>20</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1, gap: 1 }}>
              <Icon icon={"majesticons:comment-2-text-line"} color="whitesmoke" fontSize={"25px"} />
              <Typography sx={{ color: "gray" }}>20</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  });
};

export default RepliesItem;
