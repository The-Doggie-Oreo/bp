import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedIcon from '@mui/icons-material/Verified';
import { livestockCategories } from './mockFeed';

function getCategoryLabel(slug) {
  return livestockCategories.find((c) => c.slug === slug)?.label || slug;
}

function formatTimestamp(iso) {
  const date = new Date(iso);
  const now = new Date();
  const diffMs = now - date;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffHours < 1) return 'Just now';
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function VoteColumn({ upvotes, downvotes, onVote }) {
  const [votes, setVotes] = useState({ up: upvotes, down: downvotes, userVote: null });

  const handleVote = (direction) => {
    setVotes((prev) => {
      let { up, down, userVote } = prev;
      if (userVote === direction) {
        if (direction === 'up') up -= 1;
        else down -= 1;
        userVote = null;
      } else {
        if (userVote === 'up') up -= 1;
        if (userVote === 'down') down -= 1;
        if (direction === 'up') up += 1;
        else down += 1;
        userVote = direction;
      }
      return { up, down, userVote };
    });
    onVote?.(direction);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 48,
        pt: 1,
      }}
    >
      <IconButton
        size="small"
        onClick={() => handleVote('up')}
        sx={{
          color: votes.userVote === 'up' ? 'primary.main' : 'text.secondary',
        }}
      >
        <ArrowUpwardIcon fontSize="small" />
      </IconButton>
      <Typography variant="subtitle2" fontWeight={700}>
        {votes.up - votes.down}
      </Typography>
      <IconButton
        size="small"
        onClick={() => handleVote('down')}
        sx={{
          color: votes.userVote === 'down' ? 'error.main' : 'text.secondary',
        }}
      >
        <ArrowDownwardIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

function BlogCard({ item }) {
  return (
    <Card sx={{ transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 2 } }}>
      <CardActionArea sx={{ p: 0 }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
            <Chip
              icon={<VerifiedIcon sx={{ fontSize: 16 }} />}
              label="Official Article"
              size="small"
              color="primary"
              sx={{ fontWeight: 700 }}
            />
            <Chip
              label={getCategoryLabel(item.livestockCategory)}
              size="small"
              variant="outlined"
            />
          </Box>

          <Typography variant="h5" fontWeight={700} gutterBottom>
            {item.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {item.content}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ width: 28, height: 28, bgcolor: 'primary.main', fontSize: 14 }}>
                BP
              </Avatar>
              <Typography variant="body2" fontWeight={600}>
                {item.author.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                · {formatTimestamp(item.timestamp)}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <FavoriteBorderIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {item.likes}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <ChatBubbleOutlinedIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {item.commentCount}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function CommunityCard({ item }) {
  return (
    <Card sx={{ transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 2 } }}>
      <Box sx={{ display: 'flex' }}>
        <VoteColumn upvotes={item.upvotes} downvotes={item.downvotes} />
        <Divider orientation="vertical" flexItem />
        <CardActionArea sx={{ flex: 1 }}>
          <CardContent sx={{ p: 2.5, pl: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>
                {item.author.name.charAt(0)}
              </Avatar>
              <Typography variant="body2" fontWeight={600}>
                {item.author.name}
              </Typography>
              <Chip
                label={`f/${item.forumSlug || item.livestockCategory}`}
                size="small"
                sx={{ height: 22, fontSize: 11, fontWeight: 600 }}
              />
              <Typography variant="caption" color="text.secondary">
                · {formatTimestamp(item.timestamp)}
              </Typography>
            </Box>

            <Typography variant="h6" fontWeight={700} gutterBottom>
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {item.content}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ChatBubbleOutlinedIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary" fontWeight={600}>
                {item.commentCount} comments
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Box>
    </Card>
  );
}

export default function FeedCard({ item }) {
  if (item.type === 'blog') return <BlogCard item={item} />;
  if (item.type === 'community') return <CommunityCard item={item} />;
  return null;
}
