import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useLikeFunction } from "../like/hook/useLikeFunction";
import { useEffect, useState } from "react";
import { userReplyFunction } from "../detailPost/hook/useReplyFunction";

const FeedItem = (item: any) => {
  const useLike = useLikeFunction();
  const useReply = userReplyFunction();
  const [totalReply, setTotalReply] = useState();
  const [totalLike, setTotalLike] = useState();
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    useLike.countLike(String(item.item.id)).then((result) => {
      setTotalLike(result);
    });

    useReply.countReply(String(item.item.id)).then((result) => {
      setTotalReply(result);
    });

    useLike.checkLike(String(item.item.id)).then((result) => {
      setIsLike(result);
    });
  }, []);

  const handleLike = (postId: string) => {
    useLike.like(postId).then(() => {
      useLike.countLike(String(item.item.id)).then((result) => {
        setTotalLike(result);
      });
      useLike.checkLike(String(item.item.id)).then((result) => {
        setIsLike(result);
      });
    });
  };

  return (
    <>
      <Box sx={{ display: "flex", padding: 2, borderBottom: "1px solid gray", gap: 2 }}>
        <Box>
          <Avatar alt="Ageng Pangetu" src="avatar" />
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
            <Typography variant="body1" sx={{ marginRight: 1 }}>
              <Link to={"profile/" + item.item.author.id} style={{ color: "whitesmoke", textDecoration: "none" }}>
                {item.item.author.fullName}
              </Link>
            </Typography>

            <Typography variant="body2" color={"gray"}>
              <Link to={"profile/" + item.item.author.id} style={{ color: "gray", textDecoration: "none" }}>
                @{item.item.author.userName}
              </Link>
            </Typography>
            <Icon icon={"tabler:point-filled"} color="gray" />
            <Typography variant="body2" color={"gray"}>
              1h
            </Typography>
          </Box>

          <NavLink to={"post/" + item.item.id} style={{ width: "100%", textDecoration: "none" }}>
            <Box sx={{ marginBottom: 1, color: "whitesmoke" }}>
              <Typography>{item.item.content}</Typography>
            </Box>
          </NavLink>

          <img src="" alt="" style={{ width: "150px" }} />

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1, gap: 1 }}>
              {/* Atur Like =================================================================*/}

              <Icon
                onClick={() => {
                  handleLike(String(item.item.id));
                }}
                icon={isLike ? "ph:heart-fill" : "ph:heart-light"}
                color="red"
                fontSize={"25px"}
                style={{ cursor: "pointer" }}
              />
              <Typography sx={{ color: "gray" }}>{totalLike}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1, gap: 1 }}>
              <Icon icon={"majesticons:comment-2-text-line"} color="whitesmoke" fontSize={"25px"} />
              <Typography sx={{ color: "gray" }}>{totalReply}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FeedItem;
