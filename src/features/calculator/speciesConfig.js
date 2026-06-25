export const speciesConfig = [
  {
    id: 'cattle',
    label: 'Cattle',
    icon: '🐄',
    gestationDays: 283,
    range: '279–292 days',
    notes: 'Bos taurus & Bos indicus',
  },
  {
    id: 'equine',
    label: 'Horse / Pony',
    icon: '🐴',
    gestationDays: 340,
    range: '320–370 days',
    notes: 'Equus caballus',
  },
  {
    id: 'swine',
    label: 'Swine',
    icon: '🐷',
    gestationDays: 114,
    range: '112–118 days',
    notes: 'Sus scrofa domesticus',
  },
  {
    id: 'sheep',
    label: 'Sheep',
    icon: '🐑',
    gestationDays: 147,
    range: '144–152 days',
    notes: 'Ovis aries',
  },
  {
    id: 'goats',
    label: 'Goats',
    icon: '🐐',
    gestationDays: 150,
    range: '145–155 days',
    notes: 'Capra hircus',
  },
  {
    id: 'rabbits',
    label: 'Rabbits',
    icon: '🐰',
    gestationDays: 31,
    range: '28–33 days',
    notes: 'Oryctolagus cuniculus',
  },
  {
    id: 'poultry',
    label: 'Chicken (Incubation)',
    icon: '🐔',
    gestationDays: 21,
    range: '20–22 days',
    notes: 'Gallus gallus domesticus',
  },
  {
    id: 'llama',
    label: 'Llama / Alpaca',
    icon: '🦙',
    gestationDays: 345,
    range: '330–370 days',
    notes: 'Lama glama / Vicugna pacos',
  },
  {
    id: 'deer',
    label: 'Deer (Farmed)',
    icon: '🦌',
    gestationDays: 200,
    range: '190–210 days',
    notes: 'Cervidae species vary',
  },
];

export function calculateDueDate(breedingDate, gestationDays) {
  const date = new Date(breedingDate);
  date.setDate(date.getDate() + gestationDays);
  return date;
}

export function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function daysUntil(targetDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);
  const diff = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
  return diff;
}
