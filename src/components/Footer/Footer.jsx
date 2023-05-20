import React from "react";
import { Stack, Typography, Grid, Container } from "@mui/material";
import "./Footer.css";
const Footer = () => {
  return (
    <Stack className="footerBg">
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-around"
          alignItems="space-around"
          alignContent="center"
          wrap="wrap"
        >
          <Grid xs={12} className="my-2" sm={6} md={3} lg={3}>
            <Stack>
              <Stack>
                <Typography variant="h5">Hotel Hive.</Typography>
              </Stack>
              <Stack direction="column" className="my-2" spacing={1}>
                <Typography variant="body22">Address : Lorem Ipsum </Typography>
                <Typography variant="body2">Phone +100 244432434 </Typography>
                <Typography variant="body2">
                  Email contact@hotelhimara.com
                </Typography>
                <Typography variant="body2">
                  Website www.hotelhimara.com{" "}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} className="my-2" sm={6} md={3} lg={3}>
            <Stack>
              <Stack>
                <Typography variant="h5">Useful link </Typography>
              </Stack>
              <Stack direction="column" className="my-2" spacing={1}>
                <Typography variant="body2">Help Center </Typography>
                <Typography variant="body2">Contact Us</Typography>
                <Typography variant="body2">Terms & Conditions</Typography>
                <Typography variant="body2">Safety Information</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} className="my-2" sm={6} md={3} lg={3}>
            <Stack>
              <Stack>
                <Typography variant="h5">Support</Typography>
              </Stack>
              <Stack direction="column" className="my-2" spacing={1}>
                <Typography variant="body2">
                  10+ 1 Tasteful Cocktails{" "}
                </Typography>
                <Typography variant="body2">
                  Sightseeing Walks By Day
                </Typography>
                <Typography variant="body2">
                  Top 10 Amazing Beach Views
                </Typography>
                <Typography variant="body2">
                  Wedding Ceremony At Himara Hotel
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} className="my-2" sm={6} md={3} lg={3}>
            <Stack>
              <Stack>
                <Typography variant="h5">Lastest News</Typography>
              </Stack>
              <Stack direction="column" className="my-2" spacing={1}>
                <Typography variant="body2">Location </Typography>
                <Typography variant="body2">Our Staff</Typography>
                <Typography variant="body2">Our Restaurant </Typography>
                <Typography variant="body2">Spa </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
