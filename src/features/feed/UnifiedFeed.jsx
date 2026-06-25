import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FeedCard from './FeedCard';
import AdContainer from '../../components/AdContainer';
import UniversalGestationCalculator from '../calculator/UniversalGestationCalculator';

const AD_INTERVAL = 3;

export default function UnifiedFeed({ items, title, subtitle, showCalculator = true }) {
  const feedElements = [];

  items.forEach((item, index) => {
    feedElements.push(<FeedCard key={item.id} item={item} />);

    if ((index + 1) % AD_INTERVAL === 0 && index < items.length - 1) {
      feedElements.push(
        <AdContainer key={`ad-${index}`} variant="inline" sx={{ my: 1 }} />,
      );
    }
  });

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        {title && (
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Box>

      {showCalculator && (
        <Box sx={{ mb: 3, display: { md: 'none' } }}>
          <UniversalGestationCalculator />
        </Box>
      )}

      <Stack spacing={2}>{feedElements}</Stack>
    </Box>
  );
}
