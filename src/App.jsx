import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GlobalHeader from './components/GlobalHeader';
import UniversalSidebar, { DRAWER_WIDTH } from './components/UniversalSidebar';
import Footer from './components/Footer';
import UnifiedFeed from './features/feed/UnifiedFeed';
import UniversalGestationCalculator from './features/calculator/UniversalGestationCalculator';
import AdContainer from './components/AdContainer';
import { mockFeedItems, getFeedByForum } from './features/feed/mockFeed';
import { livestockCategories } from './features/feed/mockFeed';

function HomePage() {
  return (
    <UnifiedFeed
      items={mockFeedItems}
      title="Your Livestock Feed"
      subtitle="Editorial guides and community discussions from breeders worldwide."
    />
  );
}

function ForumPage() {
  const { slug } = useParams();
  const forum = livestockCategories.find((c) => c.slug === slug);
  const items = getFeedByForum(slug);

  return (
    <UnifiedFeed
      items={items}
      title={forum ? `${forum.icon} f/${forum.slug}` : `f/${slug}`}
      subtitle={
        forum
          ? `Community discussions and articles about ${forum.label.toLowerCase()}.`
          : 'Forum discussions.'
      }
      showCalculator={false}
    />
  );
}

function EditorialPage() {
  const items = mockFeedItems.filter((item) => item.type === 'blog');
  return (
    <UnifiedFeed
      items={items}
      title="Editorial"
      subtitle="Authoritative articles published by the Breed Pets editorial team."
      showCalculator={false}
    />
  );
}

function CalculatorPage() {
  return (
    <Box>
      <UniversalGestationCalculator />
    </Box>
  );
}

function ForumsIndexPage() {
  return (
    <UnifiedFeed
      items={mockFeedItems.filter((item) => item.type === 'community')}
      title="All Forums"
      subtitle="Browse community discussions across every livestock category."
      showCalculator={false}
    />
  );
}

function PlaceholderPage({ title }) {
  return (
    <Box sx={{ py: 4, textAlign: 'center' }}>
      <Box component="span" sx={{ fontSize: 48, display: 'block', mb: 2 }}>
        🚧
      </Box>
      <Box sx={{ typography: 'h5', fontWeight: 700 }}>{title}</Box>
      <Box sx={{ typography: 'body1', color: 'text.secondary', mt: 1 }}>
        Coming soon — authentication and account features are architected for future integration.
      </Box>
    </Box>
  );
}

function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <GlobalHeader onMenuToggle={() => setMobileOpen(true)} />
      <UniversalSidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
        }}
      >
        <Box sx={{ height: 64 }} />
        <Container maxWidth="lg" sx={{ flex: 1, py: 4, px: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 300px' },
              gap: 4,
            }}
          >
            <Box>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/f/:slug" element={<ForumPage />} />
                <Route path="/editorial" element={<EditorialPage />} />
                <Route path="/forums" element={<ForumsIndexPage />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/login" element={<PlaceholderPage title="Log In" />} />
                <Route path="/signup" element={<PlaceholderPage title="Create Account" />} />
                <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
              </Routes>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                gap: 3,
                position: 'sticky',
                top: 80,
                alignSelf: 'start',
              }}
            >
              <UniversalGestationCalculator compact />
              <AdContainer variant="banner" />
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
}

export default function App() {
  return <AppLayout />;
}
