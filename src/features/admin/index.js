/**
 * Admin feature stubs — future moderation, user management, and AI content tools.
 * These placeholders establish the module boundary for editorial/community administration.
 */

export const adminModules = {
  moderation: {
    id: 'moderation',
    label: 'Content Moderation',
    description: 'Review flagged posts, comments, and user reports.',
    status: 'placeholder',
  },
  userManagement: {
    id: 'user-management',
    label: 'User Management',
    description: 'Manage accounts, roles, bans, and reputation tiers.',
    status: 'placeholder',
  },
  aiContentWriter: {
    id: 'ai-content',
    label: 'AI Content Assistant',
    description: 'Draft and refine editorial articles with AI assistance.',
    status: 'placeholder',
  },
  analytics: {
    id: 'analytics',
    label: 'Platform Analytics',
    description: 'Traffic, engagement, and livestock category insights.',
    status: 'placeholder',
  },
};

export function AdminDashboardStub() {
  return {
    modules: Object.values(adminModules),
    message: 'Admin dashboard coming soon.',
  };
}
