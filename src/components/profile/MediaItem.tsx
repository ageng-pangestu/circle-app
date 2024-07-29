import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const mediaData = [
  {
    img: "https://dimages2.gazzettaobjects.it/files/image_768_434/files/fp/uploads/2024/01/16/65a6ca4f3b08d.r_d.1445-1505-4355.jpeg",
    title: "Breakfast",
  },
  {
    img: "https://cdn-6.motorsport.com/images/amp/0rGgmyq2/s1000/max-verstappen-red-bull-racing.jpg",
    title: "Burger",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/7/74/FIA_F1_Austria_2022_Nr._16_Leclerc.jpg",
    title: "Ferrari",
  },
  {
    img: "https://cdn-2.motorsport.com/images/amp/27vWALo0/s1000/mercedes-w13-1.jpg",
    title: "Mercedes",
  },
  {
    img: "https://cdn-9.motorsport.com/images/amp/0oOEJVw0/s1000/lewis-hamilton-mercedes-1.jpg",
    title: "Hamilton",
  },
  {
    img: "https://lastwordonsports.com/motorsports/wp-content/uploads/sites/12/2024/06/SI202406230307_hires_jpeg_24bit_rgb-scaled.jpg",
    title: "Noris max",
  },
];
const MediaItem = () => {
  return (
    <ImageList sx={{ width: "100%", overflow: "hidden" }} cols={3} rowHeight={164}>
      {mediaData.map((item) => (
        <ImageListItem key={item.img}>
          <img srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} src={`${item.img}?w=164&h=164&fit=crop&auto=format`} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default MediaItem;
