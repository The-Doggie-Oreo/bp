import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import { Link as RouterLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function GlobalHeader({ onMenuToggle }) {
  const { user, isAuthenticated, isPremium, setIsPremium } = useApp();

  return (
    <AppBar position="sticky" color="inherit" sx={{ bgcolor: 'background.default' }}>
      <Toolbar sx={{ gap: 2, py: 1 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            textDecoration: 'none',
            color: 'primary.main',
          }}
        >
          <PetsIcon sx={{ fontSize: 32 }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, letterSpacing: '-0.02em', display: { xs: 'none', sm: 'block' } }}
          >
            Breed Pets
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            flex: 1,
            maxWidth: 480,
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            px: 2,
            py: 0.75,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 6,
          }}
        >
          <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
          <InputBase placeholder="Search articles, forums, breeders…" sx={{ flex: 1 }} />
        </Paper>

        <Box sx={{ flexGrow: 1, display: { sm: 'none' } }} />

        <FormControlLabel
          control={
            <Switch
              size="small"
              checked={isPremium}
              onChange={(e) => setIsPremium(e.target.checked)}
            />
          }
          label={
            <Typography variant="caption" color="text.secondary">
              Premium
            </Typography>
          }
          sx={{ mr: 1, display: { xs: 'none', lg: 'flex' } }}
        />

        {isAuthenticated ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Button variant="contained" size="small" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
              New Post
            </Button>
            <Avatar
              sx={{ width: 36, height: 36, bgcolor: 'primary.main', cursor: 'pointer' }}
            >
              {user.name?.charAt(0)}
            </Avatar>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              component={RouterLink}
              to="/login"
              variant="outlined"
              size="small"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              Log In
            </Button>
            <Button component={RouterLink} to="/signup" variant="contained" size="small">
              Join
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
