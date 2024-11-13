// import { Link, redirect } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Root() {
    const linktopage = () => {
       console.log('clicked');
      //  redirect('/contacts/1')
    }
    return (
      <>
        <div id="sidebar" className="bg-gray-200 w-full p-2">
          <h1>React Router Contacts</h1>
          

        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
        </Breadcrumbs>

        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item>1</Item>
        </Grid>
        <Grid size={6}>
          <Item>2</Item>
        </Grid>
        <Grid size={6}>
          <Item>3</Item>
        </Grid>
        <Grid size={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
       </div>
      </>
    );
  }
  