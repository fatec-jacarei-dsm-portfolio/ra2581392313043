import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  CircularProgress,
  styled,
  useTheme,
} from "@mui/material";
import { useProjects } from "../../../../hooks/useProjects";

const Projetos: React.FC = () => {
  const { projectList, loading } = useProjects();
  const theme = useTheme();

  const StyledContainer = styled(Box)({
    padding: theme.spacing(4, 0),
    textAlign: "center",
  });

  const StyledCard = styled(Card)({
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.contrastText,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  });

  const StyledCardContent = styled(CardContent)({
    flexGrow: 1,
  });

  const StyledCardActions = styled(CardActions)({
    justifyContent: "center",
  });

  return (
    <StyledContainer id="projetos">
      <Typography variant="h2" gutterBottom color={"primary.main"}>
        Projetos
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container justifyContent="center" spacing={2}>
          {projectList.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  alt={project.title}
                  image={project.image}
                  sx={{ objectFit: "cover" }}
                />
                <StyledCardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    color={"primary.main"}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color={"secondary.main"}>
                    {project.description}
                  </Typography>
                </StyledCardContent>
                <StyledCardActions>
                  <Button size="small" href={project.link} target="_blank">
                    Ver mais
                  </Button>
                </StyledCardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      )}
    </StyledContainer>
  );
};

export default Projetos;
