import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../StyledButton/StyledButton";

const ContactButton = () => {
  const handleContact = () => {
    // Define o endereço de e-mail e o assunto do e-mail
    const email = "abnerrodrigo.sc@gmail.com";
    const subject = "Contato";
    const body = "Olá, gostaria de entrar em contato.";

    // Cria a URL mailto
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Abre o cliente de e-mail padrão
    window.location.href = mailtoUrl;
  };

  return (
    <StyledButton onClick={handleContact}>
      <EmailIcon />
      <Typography>Contato</Typography>
    </StyledButton>
  );
};

export default ContactButton;
