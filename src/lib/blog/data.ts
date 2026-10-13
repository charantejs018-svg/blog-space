import architecture from "@/assets/architecture.jpg";
import mountains from "@/assets/mountains.jpg";
import desk from "@/assets/desk.jpg";
import design from "@/assets/design.jpg";

export type UserProfile = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  tone: string;
};
export type Comment = { id: string; author: string; text: string; date: string };
export type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  cover: string;
  authorId: string;
  date: string;
  readTime: number;
  likes: number;
  status: "published" | "draft";
  comments: Comment[];
};
export const categories = [
  "All stories",
  "Design",
  "Technology",
  "Lifestyle",
  "Travel",
  "Culture",
  "Productivity",
];
export const authors: [UserProfile, ...UserProfile[]] = [
  {
    id: "emma",
    name: "Emma Wilson",
    role: "Writer & design enthusiast",
    bio: "Finding beauty in the everyday. Writing about intentional living, thoughtful design, and the places that make us feel at home.",
    initials: "EW",
    tone: "rose",
  },
  {
    id: "alex",
    name: "Alex Morgan",
    role: "Designer & creative thinker",
    bio: "Exploring the intersection of design, technology, and a more human future.",
    initials: "AM",
    tone: "violet",
  },
  {
    id: "sarah",
    name: "Sarah Chen",
    role: "Traveler & storyteller",
    bio: "Slow journeys, big mountains, and the stories we find along the way.",
    initials: "SC",
    tone: "green",
  },
  {
    id: "james",
    name: "James Carter",
    role: "Writer & independent maker",
    bio: "Making space for meaningful work and a little more curiosity.",
    initials: "JC",
    tone: "amber",
  },
];
export const covers = { architecture, mountains, desk, design };
const content = `There is a particular kind of clarity that arrives when we slow down. Not the dramatic clarity of a life-changing decision, but something quieter: the realization that the things we surround ourselves with shape the way we feel.\n\nFor years, I mistook more for better. More projects, more possessions, more plans filling every free afternoon. Yet the moments that stayed with me were almost always the simplest ones: sunlight moving across a room, a conversation with no deadline, a walk without a destination.\n\nMaking room for what matters\n\nIntentional living is not about an empty room or a perfectly curated morning. It is about paying attention. It means asking what brings you energy, what asks too much of you, and what you would choose if no one else were watching.\n\nStart small. Choose one corner of your home and make it a place you want to spend time. Leave a little room in your calendar. Put your phone away when a friend is telling you something important. These are not grand gestures, but together they change the texture of a day.\n\nThe beauty of enough\n\nThe spaces I love most are not perfect. They have books with bent corners, mismatched cups, and evidence of a life actually being lived. Their beauty comes from care, not control.\n\nPerhaps that is the real invitation: to stop treating our lives as projects to optimize and start treating them as places to inhabit. To notice what is already here. To find, in the everyday, something worth keeping.`;
export const initialPosts: Post[] = [
  {
    id: "intentional-living",
    title: "The quiet art of intentional living",
    excerpt: "Finding beauty in simplicity, and making room for the things that truly matter.",
    category: "Lifestyle",
    cover: architecture,
    authorId: "emma",
    date: "Oct 12, 2026",
    readTime: 6,
    likes: 128,
    status: "published",
    content,
    comments: [
      {
        id: "c1",
        author: "Sarah Chen",
        text: "“Care, not control” — such a beautiful way to think about our everyday spaces. This really resonated with me.",
        date: "Oct 12, 2026",
      },
    ],
  },
  {
    id: "future-of-design",
    title: "Designing for a more human future",
    excerpt: "Why the next chapter of design is less about technology, and more about us.",
    category: "Design",
    cover: design,
    authorId: "alex",
    date: "Oct 11, 2026",
    readTime: 8,
    likes: 86,
    status: "published",
    content:
      "Good design begins with a question, not a tool. Who are we making this for, and what do they actually need?\n\nAs our digital world grows more complex, the best designers are taking a step back. They are listening more closely, prototyping with people rather than for them, and choosing clarity over spectacle.\n\nA human approach\n\nConsider the objects you use every day. The ones you love rarely demand your attention. They feel natural. That same principle can guide the technology we build: less friction, more understanding, and a little space for delight.\n\nThe future of design belongs to those willing to look beyond what is possible and ask what is worthwhile.",
    comments: [],
  },
  {
    id: "slow-travel",
    title: "The unexpected joy of getting lost",
    excerpt: "A slower journey through the mountains, and the lessons found along the way.",
    category: "Travel",
    cover: mountains,
    authorId: "sarah",
    date: "Oct 10, 2026",
    readTime: 5,
    likes: 104,
    status: "published",
    content:
      "The trail disappeared beneath the morning mist. For the first time all week, I had no plan.\n\nSomewhere above the lake, surrounded by pine trees and the sound of moving water, I realized I had spent too much of this trip chasing the next view instead of enjoying the one in front of me.\n\nTaking the long way\n\nSlow travel is not measured in distance. It is measured in attention. The tiny bakery you return to. The conversation that lasts longer than expected. The path you take simply because it looks inviting.\n\nI eventually found my way back. But it was the hours spent wandering that became the story I wanted to tell.",
    comments: [],
  },
  {
    id: "creative-routine",
    title: "Small habits, big creative energy",
    excerpt: "A few everyday rituals that make space for your best ideas to arrive.",
    category: "Productivity",
    cover: desk,
    authorId: "james",
    date: "Oct 9, 2026",
    readTime: 4,
    likes: 72,
    status: "published",
    content:
      "Creativity does not always arrive as a lightning bolt. More often, it shows up quietly, once you have made a little room for it.\n\nA notebook before a screen\n\nEvery morning I write one page by hand before opening my laptop. Most of it goes nowhere. But sometimes a thought appears that would otherwise have been lost in the noise.\n\nBuild a gentle rhythm\n\nTake a walk. Read something outside your field. Keep a list of questions rather than a list of answers. A creative practice is not about constant output; it is about staying curious long enough for something unexpected to happen.",
    comments: [],
  },
  {
    id: "thoughtful-technology",
    title: "A little less screen, a little more life",
    excerpt: "Building a healthier relationship with the technology we use every day.",
    category: "Technology",
    cover: design,
    authorId: "alex",
    date: "Oct 8, 2026",
    readTime: 7,
    likes: 53,
    status: "published",
    content,
    comments: [],
  },
  {
    id: "everyday-culture",
    title: "The places that bring us together",
    excerpt: "On neighborhood cafés, shared tables, and the value of belonging.",
    category: "Culture",
    cover: architecture,
    authorId: "emma",
    date: "Oct 7, 2026",
    readTime: 5,
    likes: 67,
    status: "published",
    content,
    comments: [],
  },
  {
    id: "draft-noticing",
    title: "Learning to notice the everyday",
    excerpt: "A work in progress on paying attention.",
    category: "Lifestyle",
    cover: desk,
    authorId: "emma",
    date: "Oct 13, 2026",
    readTime: 3,
    likes: 0,
    status: "draft",
    content:
      "What happens when we start paying attention to the small things?\n\nA few thoughts from my morning walks...",
    comments: [],
  },
];
export function pageHead(
  title: string,
  description = "Discover thoughtful stories on design, travel, culture, and everyday life on BlogSpace.",
) {
  return {
    meta: [
      { title: `${title} | BlogSpace` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | BlogSpace` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
