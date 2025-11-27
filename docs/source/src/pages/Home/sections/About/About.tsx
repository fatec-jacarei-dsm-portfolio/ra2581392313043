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
          Desenvolvimento de Software Multiplataforma na FATEC Jacareí. Com
          previsão de formatura em dezembro de 2025. Apaixonado por matemática,
          tecnologia e inovação. Atualmente, estou me tornando desenvolvedor
          full stack, com foco inicial em back-end. Meu objetivo é realizar a
          transição de carreira da área de Logística para a programação. Estou
          sempre em busca de novos desafios e oportunidades para aprender e
          crescer profissionalmente. Atualmente atuo como desenvolvedor de
          software no Programa Queimadas do INPE, onde tenho a oportunidade de
          aplicar meus conhecimentos e contribuir para o desenvolvimento de
          soluções inovadoras.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
