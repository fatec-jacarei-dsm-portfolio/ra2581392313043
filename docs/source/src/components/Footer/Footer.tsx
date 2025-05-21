import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
  styled,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "../../assets/images/logo.png";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  padding: theme.spacing(3, 0),
  marginTop: theme.spacing(8),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} textAlign="center">
            <a href="/">
              <img src={Logo} alt="Logo" style={{ width: "100px" }} />
            </a>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              align="center"
              color={"primary"}
              gutterBottom
            >
              Contato
            </Typography>
            <Box textAlign="center">
              <IconButton
                component={Link}
                href="mailto:abnerrodrigo.sc@gmail.com"
                aria-label="Email"
                color="primary"
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                component={Link}
                href="tel:+5512982090389"
                aria-label="Telefone"
                color="primary"
              >
                <PhoneIcon />
              </IconButton>
              <IconButton
                component={Link}
                href="https://github.com/abnercosta97"
                aria-label="GitHub"
                target="_blank"
                color="primary"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component={Link}
                href="https://linkedin.com/in/abnercosta97"
                aria-label="LinkedIn"
                target="_blank"
                color="primary"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
