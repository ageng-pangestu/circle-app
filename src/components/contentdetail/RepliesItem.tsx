import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const REPLIES_Item = [
  {
    id: "1",
    avatar: "https://img.pikbest.com/origin/10/07/30/96YpIkbEsT54N.png!sw800",
    fullName: "Ageng Pangestu",
    userName: "@agengpangestu",
    content: "Tes",
    time: "1h",
    totalLike: 1,
    totalReplies: 0,
  },
  {
    id: "2",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSL0CoAJtnTcsCIRzkMY2_rFunkdhcdAJ0hA&s",
    fullName: "Reva Fidela",
    userName: "@revafv",
    content: "semuanya makasih banyak buat ucapannya dan doanya untuk ulang tahun aku yang ke 18 🤗, semoga yang baik baik berbalik ke kalian semua yaaa aminnn!!!",
    time: "3h",
    totalLike: 162,
    totalReplies: 211,
  },
  {
    id: "3",
    avatar: "https://www.greenscene.co.id/wp-content/uploads/2022/07/Bartolomeo-2.jpg",
    fullName: "Bartolomeo",
    userName: "@btmeomugiwara",
    content: "Lagi di Elbaf bareng kapten luffy, zoro ga tau dimana disuruh nyari makan. cape bener sama ni orang.",
    time: "7h",
    totalLike: 205,
    totalReplies: 50,
  },
  {
    id: "4",
    avatar: "https://www.greenscene.co.id/wp-content/uploads/2022/07/Bartolomeo-2.jpg",
    fullName: "Brook",
    userName: "@yohohoho",
    content: "Lagi di Elbaf bareng kapten luffy, zoro ga tau dimana disuruh nyari makan. cape bener sama ni orang.",
    time: "7h",
    totalLike: 205,
    totalReplies: 50,
  },
];
const RepliesItem = () => {
  return REPLIES_Item.map((item) => {
    return (
      <Box key={item.userName} sx={{ display: "flex", padding: 1, borderBottom: "1px solid gray", gap: 2 }}>
        <Box>
          <Avatar alt="Ageng Pangetu" src={item.avatar} />
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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

          <Box sx={{ color: "whitesmoke" }}>
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
      </Box>
    );
  });
};

export default RepliesItem;
