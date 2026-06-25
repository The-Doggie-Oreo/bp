import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useApp } from '../context/AppContext';

const AD_SLOTS = {
  sidebar: { width: 300, height: 250, label: 'Sidebar Ad' },
  inline: { width: '100%', height: 90, label: 'Feed Inline Ad' },
  banner: { width: '100%', height: 120, label: 'Banner Ad' },
};

export default function AdContainer({ variant = 'sidebar', sx = {} }) {
  const { isPremium } = useApp();

  if (isPremium) return null;

  const slot = AD_SLOTS[variant] || AD_SLOTS.sidebar;

  return (
    <Paper
      elevation={0}
      sx={{
        width: slot.width,
        minHeight: slot.height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
        border: '1px dashed',
        borderColor: 'divider',
        borderRadius: 3,
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: 'block', mb: 0.5 }}
        >
          Advertisement
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {slot.label} — Google AdSense
        </Typography>
      </Box>
    </Paper>
  );
}
