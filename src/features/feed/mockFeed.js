const adminAuthor = {
  id: 'admin-1',
  name: 'Breed Pets Editorial',
  role: 'admin',
  avatar: null,
  isOfficial: true,
};

const communityUsers = [
  {
    id: 'user-1',
    name: 'Sarah Homestead',
    role: 'member',
    avatar: null,
    reputation: 1240,
  },
  {
    id: 'user-2',
    name: 'RancherMike',
    role: 'member',
    avatar: null,
    reputation: 3890,
  },
  {
    id: 'user-3',
    name: 'FiberFarmCo',
    role: 'member',
    avatar: null,
    reputation: 756,
  },
  {
    id: 'user-4',
    name: 'PoultryPro22',
    role: 'member',
    avatar: null,
    reputation: 2103,
  },
];

export const livestockCategories = [
  { slug: 'cattle', label: 'Cattle', icon: '🐄' },
  { slug: 'equine', label: 'Equine', icon: '🐴' },
  { slug: 'swine', label: 'Swine', icon: '🐷' },
  { slug: 'sheep', label: 'Sheep', icon: '🐑' },
  { slug: 'goats', label: 'Goats', icon: '🐐' },
  { slug: 'rabbits', label: 'Rabbits', icon: '🐰' },
  { slug: 'poultry', label: 'Poultry', icon: '🐔' },
];

export const mockFeedItems = [
  {
    id: 'blog-1',
    type: 'blog',
    author: adminAuthor,
    title: 'Complete Guide to Spring Calving: Preparation & Best Practices',
    content:
      'Spring calving season demands meticulous preparation. From nutrition protocols to calving pen setup, this authoritative guide covers everything homesteaders and commercial operators need for a successful season.',
    livestockCategory: 'cattle',
    likes: 342,
    commentCount: 28,
    timestamp: '2026-06-20T10:00:00Z',
    forumSlug: null,
  },
  {
    id: 'community-1',
    type: 'community',
    author: communityUsers[0],
    title: 'First-time goat kidding — what should I have on hand?',
    content:
      'We have two Nigerian Dwarf does due in about 3 weeks. This is our first kidding season. What supplies do experienced breeders always keep in their kidding kit?',
    livestockCategory: 'goats',
    upvotes: 47,
    downvotes: 2,
    commentCount: 23,
    timestamp: '2026-06-24T14:32:00Z',
    forumSlug: 'goats',
  },
  {
    id: 'blog-2',
    type: 'blog',
    author: adminAuthor,
    title: 'Understanding Rabbit Gestation Cycles for Responsible Breeding',
    content:
      'Rabbit gestation averages 31 days, but breed-specific variation matters. Learn how to track palpation windows, nest box timing, and post-kindling care for healthy litters.',
    livestockCategory: 'rabbits',
    likes: 189,
    commentCount: 15,
    timestamp: '2026-06-18T09:15:00Z',
    forumSlug: null,
  },
  {
    id: 'community-2',
    type: 'community',
    author: communityUsers[1],
    title: 'Angus vs. Hereford for small acreage — real world experiences?',
    content:
      'Running 15 acres in central Texas. Looking at starting a small beef operation. Those of you on similar land — what breed has worked best for you and why?',
    livestockCategory: 'cattle',
    upvotes: 112,
    downvotes: 8,
    commentCount: 67,
    timestamp: '2026-06-24T11:05:00Z',
    forumSlug: 'cattle',
  },
  {
    id: 'community-3',
    type: 'community',
    author: communityUsers[2],
    title: 'Shearing schedule for Romney ewes in humid climates',
    content:
      'Moved to the Southeast last year. Our Romney flock is struggling with the humidity post-shearing. When do you shear in zones 7-8, and any tips for fly strike prevention?',
    livestockCategory: 'sheep',
    upvotes: 34,
    downvotes: 1,
    commentCount: 19,
    timestamp: '2026-06-23T16:48:00Z',
    forumSlug: 'sheep',
  },
  {
    id: 'blog-3',
    type: 'blog',
    author: adminAuthor,
    title: 'Poultry Housing Ventilation: The Science Behind Healthy Flocks',
    content:
      'Proper airflow prevents respiratory disease, reduces ammonia buildup, and improves egg production. We break down CFM requirements, fan placement, and seasonal adjustments.',
    livestockCategory: 'poultry',
    likes: 256,
    commentCount: 41,
    timestamp: '2026-06-15T08:00:00Z',
    forumSlug: null,
  },
  {
    id: 'community-4',
    type: 'community',
    author: communityUsers[3],
    title: 'Heritage turkey breed recommendations for exhibition?',
    content:
      'Junior is entering 4-H poultry showmanship this fall. Looking at Bourbon Red or Narragansett. Anyone showing either breed — temperament and judge feedback?',
    livestockCategory: 'poultry',
    upvotes: 28,
    downvotes: 0,
    commentCount: 14,
    timestamp: '2026-06-24T08:20:00Z',
    forumSlug: 'poultry',
  },
  {
    id: 'community-5',
    type: 'community',
    author: communityUsers[1],
    title: 'Miniature horse gestation — late foal concerns',
    content:
      'Our 34" mini mare is at day 340 with no signs of foaling. Vet says vitals are fine. How long do you wait before intervening with minis vs. full-size horses?',
    livestockCategory: 'equine',
    upvotes: 61,
    downvotes: 3,
    commentCount: 31,
    timestamp: '2026-06-22T19:10:00Z',
    forumSlug: 'equine',
  },
];

export function getFeedByForum(forumSlug) {
  if (!forumSlug) return mockFeedItems;
  return mockFeedItems.filter(
    (item) => item.livestockCategory === forumSlug || item.forumSlug === forumSlug,
  );
}
