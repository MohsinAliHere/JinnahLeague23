import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function HotelCard({
  restaurantName,
  restaurantCategory,
  restaurantDescription,
  restaurantImg,
}) {
  return (
    <Card className="my-3" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={restaurantImg}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          className="customFont"
          component="div"
        >
          {restaurantName}
        </Typography>
        <Typography className="fw-bold" variant="body2" color="text.secondary">
          {restaurantDescription}
        </Typography>
      </CardContent>
      <Stack
        className="my-3"
        alignItems="center"
        direction="row"
        justifyContent="space-around"
      >
        <Typography variant="h5" className="customFont">
          {restaurantCategory}
        </Typography>
        <Typography variant="h6" className="customFont fw-bold txtColor">
          Write a Review
        </Typography>
      </Stack>
    </Card>
  );
}
