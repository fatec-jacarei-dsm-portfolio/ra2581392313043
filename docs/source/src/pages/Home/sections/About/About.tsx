import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";

const About: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      id="sobre"
      sx={{
        backgroundColor: theme.palette.background.default, // substitua pela cor desejada
        color: "primary.main",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          Sobre Mim
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "justify" }}
          color={"secondary.main"}
        >
          {/* Adicione seu texto aqui */}
          Cristão, casado, pai da Elisa e do Eduardo. Estudante de
          Desenvolvimento de Software Multiplataforma na FATEC Jacareí.
          Apaixonado por matemática, tecnologia e inovação. Atualmente, estou me
          tornando desenvolvedor full stack, com foco inicial em back-end. Meu
          objetivo é realizar a transição de carreira da área de Logística para
          a programação. Estou sempre em busca de novos desafios e oportunidades
          para aprender e crescer profissionalmente. Aberto a novas
          oportunidades de trabalho, seja como desenvolvedor júnior ou pleno. Se
          você gostou do meu trabalho e deseja me ajudar a crescer, entre em
          contato. Ficarei muito feliz em contribuir com o seu projeto.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
