import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Typography } from "@mui/material";
import { Link, NavLink, useParams } from "react-router-dom";
import { useProfilPostFunction } from "./hook/useProfilePostFunction";
import { useEffect, useState } from "react";
import { IPostModel } from "../../types/post";

const PostItem = () => {
  const { user_id } = useParams();
  const userPostFunction = useProfilPostFunction();
  const baseUrl = "http://localhost:3000/uploads/";

  const [dataUserPost, setDataUserPost] = useState<IPostModel[]>([]);

  useEffect(() => {
    userPostFunction.getAllProfilePost(String(user_id)).then((result) => {
      setDataUserPost(result);
    });
  }, [user_id]);

  return dataUserPost.map((item) => {
    return (
      <Box key={item.id} sx={{ display: "flex", padding: 2, borderBottom: "1px solid gray", gap: 2 }}>
        <Box>
          <Avatar alt="Ageng Pangetu" src={item.author.profile_pic} />
        </Box>
        <NavLink to={"/post/" + item.id} style={{ width: "100%", textDecoration: "none" }}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
              <Typography variant="body1" sx={{ marginRight: 1 }}>
                <Link to={"UserDetail/" + "1"} style={{ color: "whitesmoke", textDecoration: "none" }}>
                  {item.author.fullName}
                </Link>
              </Typography>
              <Typography variant="body2" color={"gray"}>
                @{item.author.userName}
              </Typography>
              <Icon icon={"tabler:point-filled"} color="gray" />
              <Typography variant="body2" color={"gray"}>
                1h
              </Typography>
            </Box>

            <Box sx={{ marginBottom: 1, color: "whitesmoke" }}>
              <Typography>{item.content}</Typography>
            </Box>

            <img src={`${baseUrl}${item.image}`} alt="" style={{ width: "150px" }} />

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
        </NavLink>
      </Box>
    );
  });
};

export default PostItem;
