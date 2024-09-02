import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useFollowFunction } from "../follow/hook/useFollowFunction";
import { useEffect, useState } from "react";

const SuggestUser = (item: any) => {
  const useFollow = useFollowFunction();
  const [isFollow, setIsFollow] = useState(false);

  const handleFollow = (followingId: string) => {
    useFollow.follow(followingId).then(() => {
      useFollow.checkFollow(item.item.id).then((result) => {
        setIsFollow(result);
      });
    });
  };

  useEffect(() => {
    useFollow.checkFollow(item.item.id).then((result) => {
      setIsFollow(result);
    });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 1 }}>
        <Avatar alt={item.item.fullName} src={item.item.profile_pic} />
        <Box>
          <Link to={"profile/" + item.item.id} style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "white" }}>{item.item.fullName}</Typography>
          </Link>
          <Link to={"profile/" + item.item.id} style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "gray" }}>@{item.item.userName}</Typography>
          </Link>
        </Box>
        <Button
          onClick={() => {
            handleFollow(String(item.item.id));
          }}
          variant="outlined"
          sx={{ borderRadius: 23, borderColor: "whitesmoke", color: "whitesmoke", ml: "auto" }}
        >
          {isFollow ? "UnFollow" : "Follow"}
        </Button>
      </Box>
    </>
  );
};

export default SuggestUser;
