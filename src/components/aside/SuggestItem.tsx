import { Avatar, Box, Button, Typography } from "@mui/material";

const SUGGEST_Item = [
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSL0CoAJtnTcsCIRzkMY2_rFunkdhcdAJ0hA&s",
    fullName: "Mohammed Jawahir",
    userName: "@em.jawahir",
    following: true,
  },
  {
    avatar: "https://cdn.idntimes.com/content-images/community/2018/04/mariecat-406b46162fc4652a502210a7c298d4b6.png",
    fullName: "Shakia Khimathi",
    userName: "@shakiakim",
    following: false,
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0iuT2wZ4I4H6mK-dgJ6U3VY6OZwX8aQC5g&s",
    fullName: "Naveen Signh",
    userName: "@naveeen",
    following: false,
  },
  {
    avatar: "https://img.pikbest.com/origin/10/07/30/96YpIkbEsT54N.png!sw800",
    fullName: "Jennifer Steward",
    userName: "@jenniferste",
    following: false,
  },
  {
    avatar: "https://cdn.80.lv/api/upload/content/a5/61d5acfcdda58.jpg",
    fullName: "Zula Chizimu",
    userName: "@zulachi",
    following: false,
  },
];
const SuggestItem = () => {
  return SUGGEST_Item.map((item) => {
    return (
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 1 }}>
        <Avatar alt={item.fullName} src={item.avatar} />
        <Box>
          <Typography>{item.fullName}</Typography>
          <Typography sx={{ color: "gray" }}>{item.userName}</Typography>
        </Box>
        <Button variant="outlined" sx={{ borderRadius: 23, color: "white", ml: "auto" }}>
          Follow
        </Button>
      </Box>
    );
  });
};

export default SuggestItem;
