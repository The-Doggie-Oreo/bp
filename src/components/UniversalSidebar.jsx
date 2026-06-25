import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import ForumIcon from '@mui/icons-material/Forum';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { livestockCategories } from '../features/feed/mockFeed';
import AdContainer from './AdContainer';
import UniversalGestationCalculator from '../features/calculator/UniversalGestationCalculator';

const DRAWER_WIDTH = 300;

const mainNav = [
  { label: 'Home Feed', path: '/', icon: <HomeIcon /> },
  { label: 'Editorial', path: '/editorial', icon: <ArticleIcon /> },
  { label: 'All Forums', path: '/forums', icon: <ForumIcon /> },
  { label: 'Gestation Tool', path: '/calculator', icon: <CalculateIcon /> },
];

function NavItem({ item, onNavigate }) {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={RouterLink}
        to={item.path}
        selected={isActive}
        onClick={onNavigate}
        sx={{
          borderRadius: 3,
          mx: 1,
          mb: 0.5,
          '&.Mui-selected': {
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            '&:hover': { bgcolor: 'primary.dark' },
            '& .MuiListItemIcon-root': { color: 'primary.contrastText' },
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
      </ListItemButton>
    </ListItem>
  );
}

function ForumItem({ forum, onNavigate }) {
  const location = useLocation();
  const path = `/f/${forum.slug}`;
  const isActive = location.pathname === path;

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={RouterLink}
        to={path}
        selected={isActive}
        onClick={onNavigate}
        sx={{
          borderRadius: 2,
          py: 0.75,
          '&.Mui-selected': {
            bgcolor: 'action.selected',
          },
        }}
      >
        <ListItemText
          primary={`${forum.icon}  ${forum.label}`}
          primaryTypographyProps={{ variant: 'body2', fontWeight: isActive ? 600 : 400 }}
        />
      </ListItemButton>
    </ListItem>
  );
}

function SidebarContent({ onNavigate, showCalculator = true }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 2 }}>
      <List sx={{ px: 0 }}>
        {mainNav.map((item) => (
          <NavItem key={item.path} item={item} onNavigate={onNavigate} />
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ px: 2, mb: 1, display: 'block' }}
      >
        Community Forums
      </Typography>
      <List dense sx={{ flex: 1, overflow: 'auto' }}>
        {livestockCategories.map((forum) => (
          <ForumItem key={forum.slug} forum={forum} onNavigate={onNavigate} />
        ))}
      </List>

      {showCalculator && (
        <Box sx={{ mt: 2 }}>
          <UniversalGestationCalculator compact />
        </Box>
      )}

      <Box sx={{ mt: 2 }}>
        <AdContainer variant="sidebar" />
      </Box>
    </Box>
  );
}

export default function UniversalSidebar({ mobileOpen, onMobileClose }) {
  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box' },
        }}
      >
        <SidebarContent onNavigate={onMobileClose} />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            bgcolor: 'background.default',
            border: 'none',
          },
        }}
        open
      >
        <ToolbarSpacer />
        <SidebarContent showCalculator />
      </Drawer>
    </>
  );
}

function ToolbarSpacer() {
  return <Box sx={{ height: { xs: 0, md: 64 } }} />;
}

export { DRAWER_WIDTH };
