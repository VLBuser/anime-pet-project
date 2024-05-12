import { Container, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";

export default function Home() {
  return (
    <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Typography variant="h1" sx={ {fontSize: 24, color: indigo[900]} }>Main Page</Typography>
    </Container>
  );
}
