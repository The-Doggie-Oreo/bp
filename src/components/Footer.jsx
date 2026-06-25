import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom';

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Editorial Guidelines', path: '/editorial' },
  { label: 'Community Rules', path: '/rules' },
  { label: 'Privacy', path: '/privacy' },
  { label: 'Terms', path: '/terms' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 4,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h6" color="primary" fontWeight={700}>
            Breed Pets
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                component={RouterLink}
                to={link.path}
                color="text.secondary"
                underline="hover"
                variant="body2"
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} Breed Pets Foundation. Universal livestock resources &
          community for breeders, homesteaders, and exhibitors.
        </Typography>
      </Container>
    </Box>
  );
}
