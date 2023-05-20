import { Container, Stack, Typography, Grid } from "@mui/material";
import f1 from "../../assets/b1.svg";
import f2 from "../../assets/b2.svg";
import f3 from "../../assets/b3.svg";
import f4 from "../../assets/b4.svg";
import "./Feautures.css";
const Features = () => {
  let features = [
    {
      title: "Restaurant",
      description: "",
      icon: f1,
    },
    {
      title: "Shopping",
      description: "",
      icon: f2,
    },
    {
      title: "Night life",
      description: "",
      icon: f3,
    },
    {
      title: "Active",
      description: "",
      icon: f4,
    },
  ];
  let features2 = [
    {
      title: "Beauty and Spas",
      description: "",
      icon: f1,
    },
    {
      title: "Automotive",
      description: "",
      icon: f2,
    },
    {
      title: "Home Service",
      description: "",
      icon: f3,
    },
    {
      title: "More",
      description: "",
      icon: f4,
    },
  ];

  return (
    <Container>
      <Stack
        className="my-4 "
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Stack>
          <Typography className="fw-bold" variant="h4">
          Categories
          </Typography>
        </Stack>
      </Stack>
      <Grid
        className="my-5"
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        {features.map((x, i) => {
          return (
            <>
              <Grid
                className=" animate__animated animate__flipInX animate__repeat-2"
                paddingX={2}
                xs={12}
                sm={6}
                md={3}
                lg={3}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  spacing={2}
                  className="my-3 "
                  alignItems="center"
                >
                  <Stack>
                    <Stack>
                      <img src={x.icon} alt="" />
                    </Stack>
                  </Stack>
                  <Stack>
                    <Typography variant="h5" noWrap className="fw-bold">
                     {x.title}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </>
          );
        })}
      </Grid>
      <Grid
        className="my-5"
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        {features2.map((x, i) => {
          return (
            <>
              <Grid
                className=" animate__animated animate__flipInX animate__repeat-2"
                paddingX={2}
                xs={12}
                sm={6}
                md={3}
                lg={3}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  spacing={2}
                  className="my-3 "
                  alignItems="center"
                >
                  <Stack>
                    <Stack>
                      <img src={x.icon} alt="" />
                    </Stack>
                  </Stack>
                  <Stack>
                    <Typography variant="h5" noWrap className="fw-bold">
                     {x.title}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Features;
