export interface Quote {
  id: number;
  text: string;
  author?: string;
  category: string;
  gradient: string;
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    category: "Self-Love",
    gradient: "gradient-soft"
  },
  {
    id: 2,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Growth",
    gradient: "gradient-dreamy"
  },
  {
    id: 3,
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "Happiness",
    gradient: "gradient-sage"
  },
  {
    id: 4,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Courage",
    gradient: "gradient-soft"
  },
  {
    id: 5,
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
    category: "Peace",
    gradient: "gradient-dreamy"
  },
  {
    id: 6,
    text: "You are enough just as you are.",
    category: "Self-Love",
    gradient: "gradient-soft"
  },
  {
    id: 7,
    text: "Every day may not be good, but there is something good in every day.",
    category: "Happiness",
    gradient: "gradient-sage"
  },
  {
    id: 8,
    text: "Your limitation—it's only your imagination.",
    category: "Growth",
    gradient: "gradient-dreamy"
  },
  {
    id: 9,
    text: "Great things never come from comfort zones.",
    category: "Courage",
    gradient: "gradient-soft"
  },
  {
    id: 10,
    text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
    author: "Thich Nhat Hanh",
    category: "Peace",
    gradient: "gradient-sage"
  },
  {
    id: 11,
    text: "You deserve your own love and affection.",
    author: "Buddha",
    category: "Self-Love",
    gradient: "gradient-dreamy"
  },
  {
    id: 12,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Growth",
    gradient: "gradient-soft"
  }
];

export const categories = [
  { label: "All", icon: "✨", value: "all" },
  { label: "Self-Love", icon: "💖", value: "Self-Love" },
  { label: "Growth", icon: "🌱", value: "Growth" },
  { label: "Happiness", icon: "😊", value: "Happiness" },
  { label: "Courage", icon: "💪", value: "Courage" },
  { label: "Peace", icon: "🕊️", value: "Peace" }
];
