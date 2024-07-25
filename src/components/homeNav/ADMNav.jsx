import { Box, Paper, Drawer, List, ListItem, ListItemText, Card, CardHeader } from '@mui/material';
import { useState } from "react";
import AppsIcon from '@mui/icons-material/Apps';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import GerenciarTarefas from "../gerenciarTarefas/gerenciarTarefas.jsx";

const HomeNavegation = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleItemClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
    >
      <img
        width={"100px"}
        height={"100px"}
        src="src/assets/icons/pd-icon.png"
        alt="Ícone do Projeto Desenvolve"
      />

      <Paper
        elevation={3}
        sx={{
          paddingX: 1,
          paddingY: 3,
          backgroundColor: "#FFF",
          borderRadius: "40px",
          width: "85vw",
          height: "70vh",
          display: "flex",
        }}
      >
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 200,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 200,
              position: 'relative'
            },
          }}
        >
           <List>
            <ListItem button onClick={() => handleItemClick('gerenciarTarefas')}>
              <AppsIcon sx={{ margin: 1 }} /> <ListItemText primary="Gerenciar tarefas" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick('pessoas')}>
              <PermIdentityIcon sx={{ margin: 1 }} /> <ListItemText primary="Pessoas" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick('eventos')}>
              <CalendarMonthIcon sx={{ margin: 1 }} /> <ListItemText primary="Eventos" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick('lojaDePremios')}>
              <StorefrontIcon sx={{ margin: 1 }} /><ListItemText primary="Loja de prêmios" />
            </ListItem>
          </List>
        </Drawer>

        <Box component="main">
          {selectedComponent === 'gerenciarTarefas' && <GerenciarTarefas />}

        </Box>

      </Paper>
    </Box>
  );
};

export default HomeNavegation;
