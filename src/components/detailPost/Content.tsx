import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDetailPostFunction } from "./hook/useDetailPostFuntion";
import { IPostModel } from "../../types/post";
import { useLikeFunction } from "../like/hook/useLikeFunction";
import { userReplyFunction } from "./hook/useReplyFunction";

const Content = () => {
  const useFunction = useDetailPostFunction();
  const useLike = useLikeFunction();
  const useReply = userReplyFunction();

  const { post_id } = useParams();

  const [dataDetail, setDataDetail] = useState<IPostModel>();
  const [isLike, setIsLike] = useState();
  const [totalLike, setTotalLike] = useState();
  const [totalReply, setTotalReply] = useState();

  const handleLike = (postId: string) => {
    useLike.like(postId).then(() => {
      useLike.countLike(String(post_id)).then((result) => {
        setTotalLike(result);
      });
    });
  };

  useEffect(() => {
    useFunction.getDetailPost(String(post_id)).then((result) => {
      setDataDetail(result);
    });

    useLike.checkLike(String(post_id)).then((result) => {
      setIsLike(result);
    });

    useLike.countLike(String(post_id)).then((result) => {
      setTotalLike(result);
    });

    useReply.countReply(String(post_id)).then((result) => {
      setTotalReply(result);
    });
  }, [post_id]);

  let iconLike = "";
  if (!isLike) {
    iconLike = "ph:heart-light";
  } else {
    iconLike = "ph:heart-fill";
  }

  const date: Date = new Date(String(dataDetail?.createdAt));

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", borderBottom: "1px solid gray", padding: 2, gap: 1 }}>
        {/* <h1 style={{ color: "white" }}>createdAt</h1>
        <h1 style={{ color: "white" }}>
          {String(date.toLocaleString("en-US", { month: "short", day: "numeric" }))}, {String(date.getFullYear())}
        </h1> */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link to={"/"}>
            <Icon icon={"formkit:arrowleft"} fontSize={"20px"} color="white" />
          </Link>
          <Typography variant="h5" sx={{ color: "whitesmoke" }}>
            Status
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Avatar alt="Ageng Pangetu" src={"https://cdn-image.hipwee.com/wp-content/uploads/2019/11/hipwee-werqweqwra-640x412.png"} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "whitesmoke" }}>{dataDetail?.author.fullName}</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              @{dataDetail?.author.userName}
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ color: "whitesmoke" }}>{dataDetail?.content}</Typography>
        <img src={dataDetail?.image} alt="" style={{ width: "150px" }} />
        <Box sx={{ display: "flex", alignItems: "center", color: "gray" }}>
          <Typography variant="body2">{String(date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true }))}</Typography>
          <Icon icon={"tabler:point-filled"} color="gray" />
          <Typography variant="body2">
            {String(date.toLocaleString("en-US", { month: "short", day: "numeric" }))}, {String(date.getFullYear())}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* ini likeenyaaaa =================================================*/}

            <Icon
              onClick={() => {
                handleLike(String(dataDetail?.id));
              }}
              icon={iconLike}
              color="red"
              fontSize={"25px"}
              style={{ cursor: "pointer" }}
            />
            <Typography sx={{ color: "gray" }}>{totalLike}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Icon icon={"majesticons:comment-2-text-line"} color="whitesmoke" fontSize={"25px"} />
            <Typography sx={{ color: "gray" }}>{totalReply}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Content;
