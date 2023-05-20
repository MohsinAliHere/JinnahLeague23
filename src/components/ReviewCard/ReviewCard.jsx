import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Rating, Stack } from "@mui/material";

export default function ReviewCard({ Hotel }) {
  const {
    restaurantImg,
    ContactNumber,
    Email,
    Name,
    restaurantCategory,
    restaurantContact,
    restaurantDescription,
    restaurantName,
    restaurantServices,
    restaurantZipCode,
    star,
    Booking,
  } = Hotel;

  return (
    <Card className="my-3" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={
          restaurantImg
            ? restaurantImg
            : "https://lh3.googleusercontent.com/p/AF1QipOBE1FP5yxVOrjX0-j9kLgDVikRPf1HdYuPIZmA=s680-w680-h510"
        }
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
          {Booking?.Comments}
        </Typography>
      </CardContent>
      <Stack
        className="my-3"
        alignItems="center"
        direction="row"
        justifyContent="space-around"
      >
        <Chip label={restaurantCategory}  />
        
        <Rating name="size-large" readOnly defaultValue={star} size="large" />
      </Stack>
    </Card>
  );
}
