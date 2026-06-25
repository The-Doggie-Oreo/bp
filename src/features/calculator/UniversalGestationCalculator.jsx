import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CalculateIcon from '@mui/icons-material/Calculate';
import {
  speciesConfig,
  calculateDueDate,
  formatDate,
  daysUntil,
} from './speciesConfig';

export default function UniversalGestationCalculator({ compact = false }) {
  const [speciesId, setSpeciesId] = useState('cattle');
  const [breedingDate, setBreedingDate] = useState(
    new Date().toISOString().split('T')[0],
  );

  const species = speciesConfig.find((s) => s.id === speciesId) || speciesConfig[0];
  const dueDate = calculateDueDate(breedingDate, species.gestationDays);
  const remaining = daysUntil(dueDate);

  return (
    <Card
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        overflow: 'visible',
      }}
    >
      <CardContent sx={{ p: compact ? 2 : 3, '&:last-child': { pb: compact ? 2 : 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <CalculateIcon />
          <Typography variant={compact ? 'subtitle2' : 'h6'} fontWeight={700}>
            Gestation Calculator
          </Typography>
        </Box>

        <TextField
          select
          fullWidth
          size="small"
          label="Livestock Species"
          value={speciesId}
          onChange={(e) => setSpeciesId(e.target.value)}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.95)' },
            '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.8)' },
          }}
        >
          {speciesConfig.map((s) => (
            <MenuItem key={s.id} value={s.id}>
              {s.icon} {s.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          size="small"
          type="date"
          label="Breeding / Service Date"
          value={breedingDate}
          onChange={(e) => setBreedingDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.95)' },
            '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.8)' },
          }}
        />

        <Box
          sx={{
            bgcolor: 'rgba(255,255,255,0.12)',
            borderRadius: 3,
            p: 2,
          }}
        >
          <Typography variant="overline" sx={{ opacity: 0.85 }}>
            Estimated Due Date
          </Typography>
          <Typography variant={compact ? 'subtitle1' : 'h5'} fontWeight={700} sx={{ mt: 0.5 }}>
            {formatDate(dueDate)}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1.5 }}>
            <Chip
              label={`${species.gestationDays} days`}
              size="small"
              sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'inherit', fontWeight: 600 }}
            />
            <Chip
              label={remaining > 0 ? `${remaining} days to go` : remaining === 0 ? 'Due today!' : `${Math.abs(remaining)} days overdue`}
              size="small"
              sx={{
                bgcolor: remaining <= 7 && remaining >= 0 ? 'warning.main' : 'rgba(255,255,255,0.2)',
                color: 'inherit',
                fontWeight: 600,
              }}
            />
          </Box>

          {!compact && (
            <Typography variant="caption" sx={{ display: 'block', mt: 1.5, opacity: 0.75 }}>
              Typical range: {species.range} · {species.notes}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
