import { Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import StyledButton from "../StyledButton/StyledButton";

const DownloadCVButton = () => {
  const handleDownload = () => {
    // Cria um link para o arquivo no diretório public
    const link = document.createElement("a");
    link.href = "/AbnerCostaCV.pdf"; // Caminho relativo para o arquivo na pasta public
    link.download = "AbnerCostaCV.pdf"; // Nome do arquivo a ser baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledButton onClick={handleDownload}>
      <DownloadIcon />
      <Typography>Download CV</Typography>
    </StyledButton>
  );
};

export default DownloadCVButton;
