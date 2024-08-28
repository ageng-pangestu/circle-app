import { Checkbox, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
const LikeButton = () => {
  return (
    <>
      <Checkbox icon={<Icon icon={"ph:heart-light"} color="red" fontSize={"25px"} />} checkedIcon={<Icon icon={"ph:heart-fill"} color="red" fontSize={"25px"} />} />
      <Typography sx={{ color: "gray" }}>20</Typography>
    </>
  );
};
export default LikeButton;
