import { Stack, Typography } from "@mui/material";
import "./Banner.css";
const Banner = () => {
  return (
    <Stack className="customBanner">
      <Stack
        className="mainBannerDiv   animate__animated  animate__repeat-1 animate__bounceInLeft"
        direction="column"
        spacing={2}
        alignItems="flex-start"
      >
        <Typography
          
          className="customFont fontHandle fw-bold"
          variant="h3"
        >
          FlavorFusion serves as a trusted resource for discovering  <br />    and
          evaluating local establishments.
          
        </Typography>
        <Typography className="customPara fontHandle" variant="h6">
        FlavorFusion to interact with customers,  <br />  respond to reviews,
         
         and share relevant information.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Banner;
