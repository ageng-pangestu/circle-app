import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const POST_Item = [
  {
    id: "1",
    avatar: "https://img.pikbest.com/origin/10/07/30/96YpIkbEsT54N.png!sw800",
    fullName: "Ageng Pangestu",
    userName: "@agengpangestu",
    content: "Tes asdj askjdadf akusdbb asdbask ausbd",
    image: "",
    time: "1h",
    totalLike: 1,
    totalReplies: 0,
  },
  {
    id: "1",
    avatar: "https://img.pikbest.com/origin/10/07/30/96YpIkbEsT54N.png!sw800",
    fullName: "Lizza",
    userName: "@Lizzaaa",
    content: "Tes asdj askjdadf akusdbb asdbask ausbd",
    image: "",
    time: "1h",
    totalLike: 1,
    totalReplies: 0,
  },
  {
    id: "1",
    avatar: "https://img.pikbest.com/origin/10/07/30/96YpIkbEsT54N.png!sw800",
    fullName: "Reva Fidela",
    userName: "@Adel",
    content: "Tes asdj askjdadf akusdbb asdbask ausbd",
    image: "",
    time: "1h",
    totalLike: 1,
    totalReplies: 0,
  },
];

const PostItem = () => {
  return POST_Item.map((item) => {
    return (
      <Box key={item.userName} sx={{ display: "flex", padding: 2, borderBottom: "1px solid gray", gap: 2 }}>
        <Box>
          <Avatar alt="Ageng Pangetu" src={item.avatar} />
        </Box>
        <NavLink to={"contentdetail"} style={{ width: "100%", textDecoration: "none" }}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
              <Typography variant="body1" sx={{ marginRight: 1 }}>
                <Link to={"UserDetail/" + "1"} style={{ color: "whitesmoke", textDecoration: "none" }}>
                  {item.fullName}
                </Link>
              </Typography>
              <Typography variant="body2" color={"gray"}>
                {item.userName}
              </Typography>
              <Icon icon={"tabler:point-filled"} color="gray" />
              <Typography variant="body2" color={"gray"}>
                {item.time}
              </Typography>
            </Box>

            <Box sx={{ marginBottom: 1, color: "whitesmoke" }}>
              <Typography>{item.content}</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1, gap: 1 }}>
                <Icon icon={"ph:heart-fill"} color="red" fontSize={"25px"} />
                <Typography sx={{ color: "gray" }}>{item.totalLike}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1, gap: 1 }}>
                <Icon icon={"majesticons:comment-2-text-line"} color="whitesmoke" fontSize={"25px"} />
                <Typography sx={{ color: "gray" }}>{item.totalReplies}</Typography>
              </Box>
            </Box>
          </Box>
        </NavLink>
      </Box>
    );
  });
};

export default PostItem;
