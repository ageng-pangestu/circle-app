import { Avatar, Box, Button, Typography } from "@mui/material";

const SEARCH_Item = [
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSL0CoAJtnTcsCIRzkMY2_rFunkdhcdAJ0hA&s",
    fullName: "Mohammed Jawahir",
    userName: "@em.jawahir",
    bio: "god bless you",
    following: true,
  },
  {
    avatar: "https://cdn.idntimes.com/content-images/community/2018/04/mariecat-406b46162fc4652a502210a7c298d4b6.png",
    fullName: "Shakia Khimathi",
    userName: "@shakiakim",
    bio: "Singer",
    following: false,
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0iuT2wZ4I4H6mK-dgJ6U3VY6OZwX8aQC5g&s",
    fullName: "Naveen Signh",
    userName: "@naveeen",
    bio: "Contact Person: 012345",
    following: false,
  },
  {
    avatar: "https://img.pikbest.com/origin/10/07/30/96YpIkbEsT54N.png!sw800",
    fullName: "Jennifer Steward",
    userName: "@jenniferste",
    bio: "",
    following: false,
  },
  {
    avatar: "https://cdn.80.lv/api/upload/content/a5/61d5acfcdda58.jpg",
    fullName: "Zula Chizimu",
    userName: "@zulachi",
    bio: "tes",
    following: false,
  },
];

const SearchItem = () => {
  if (SEARCH_Item.length == 0) {
    return (
      <Box sx={{ width: "50%", margin: "auto" }}>
        <Typography sx={{ textAlign: "center", color: "whitesmoke" }}>No result for "asdasd"</Typography>
        <Typography variant="body2" sx={{ textAlign: "center", color: "gray" }}>
          Try seaching for something else or check you spelling of what your typed.
        </Typography>
      </Box>
    );
  }

  return SEARCH_Item.map((item) => {
    return (
      <Box key={item.userName} sx={{ display: "flex", gap: 2, alignItems: "center", margin: 2, color: "whitesmoke" }}>
        <Avatar alt={item.fullName} src={item.avatar} />
        <Box>
          <Typography variant="body2">{item.fullName}</Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {item.userName}
          </Typography>
          <Typography variant="body2">{item.bio}</Typography>
        </Box>
        <Button variant="outlined" sx={{ borderRadius: 23, borderColor: "whitesmoke", color: "white", ml: "auto" }}>
          Follow
        </Button>
      </Box>
    );
  });
};

export default SearchItem;
