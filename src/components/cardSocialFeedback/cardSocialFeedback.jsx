import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";

const CardSocialFeedback = () => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={1.5} marginTop={10} marginLeft={5}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={0.5}
      >
        <Avatar
          src=""
          alt="Foto de Perfil do Agente"
          variant="circular"
          sx={{ width: "100px", height: "100px" }}
        />

        <Typography
          fontFamily={"Roboto, sans-serif"}
          fontSize={"16px"}
          fontWeight={"medium"}
          color={"#212121"}
        >
          Elon Musk
        </Typography>

        <Typography
          fontFamily={"Roboto, sans-serif"}
          fontSize={"11px"}
          fontWeight={"light"}
          color={"#212121"}
        >
          CEO of SpaceX
        </Typography>
      </Box>

      <Paper
        elevation={3}
        sx={{ backgroundColor: "#F6F6F6", borderRadius: "20px" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          gap={1}
          padding={"1rem 0.5rem 0.5rem 2rem"}
        >
          <Box>
            <Typography
              fontFamily={"Raleway, sans-serif"}
              fontSize={"20px"}
              fontWeight={"bold"}
              color={"#7D7D7D"}
            >
              <span style={{ color: "#814BA2" }}>Elon Musk</span> enviou 3
              moedas para <span style={{ color: "#814BA2" }}>Fernanda</span>
            </Typography>

            <Divider
              sx={{
                height: "2px",
                backgroundColor: "#D8D8D8",
                borderRadius: "1rem",
              }}
            />
          </Box>

          <Typography
            fontFamily={"Raleway, sans-serif"}
            fontSize={"24px"}
            fontWeight={"semiBold"}
            color={"rgba(0, 0, 0, 0.7)"}
          >
            Não teria finalizado aquele projeto no prazo se não fosse pela sua
            ajuda!!!
          </Typography>

          <Typography
            fontFamily={"Raleway, sans-serif"}
            fontSize={"12px"}
            fontWeight={"semiBold"}
            color={"rgba(0, 0, 0, 0.7)"}
          >
            Enviado há 2 horas atrás
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default CardSocialFeedback;
