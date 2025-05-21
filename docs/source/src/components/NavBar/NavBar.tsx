import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/logo.png";

const pages = ["Sobre", "Skills", "Projetos"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const StyledToobar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
    padding: "0 16px",
  }));

  const StyledImg = styled("img")(() => ({
    width: "80px",
  }));

  return (
    <AppBar position="fixed">
      <StyledToobar>
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
          <a href="/">
            <StyledImg src={Logo} alt="Logo" />
          </a>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <a
                  href={`#${page.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </a>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
          <a href="/">
            <StyledImg src={Logo} alt="Logo" />
          </a>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          {pages.map((page) => (
            <a
              href={`#${page.toLowerCase()}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            </a>
          ))}
        </Box>
      </StyledToobar>
    </AppBar>
  );
};

export default NavBar;
