import architecture from "@/assets/architecture.jpg";
import mountains from "@/assets/mountains.jpg";
import desk from "@/assets/desk.jpg";
import design from "@/assets/design.jpg";
import cricket1 from "@/assets/cricket1.jpg";
import cricket2 from "@/assets/cricket2.jpg";
import cricket3 from "@/assets/cricket3.jpg";
import cricket4 from "@/assets/cricket4.jpg";
import cricket5 from "@/assets/cricket5.jpg";

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
  "Cricket",
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
  {
    id: "rahul",
    name: "Rahul Sharma",
    role: "Sports writer & cricket analyst",
    bio: "Covering cricket for over a decade. Passionate about the game's stories, its legends, and the moments that define generations.",
    initials: "RS",
    tone: "green",
  },
];
export const covers = { architecture, mountains, desk, design, cricket1, cricket2, cricket3, cricket4, cricket5 };
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
    id: "virat-kohli-legacy",
    title: "Virat Kohli: The man who redefined Indian cricket",
    excerpt: "From a fiery teenager in Delhi to the most followed cricketer on the planet — the story of a champion who never stopped believing.",
    category: "Cricket",
    cover: cricket1,
    authorId: "rahul",
    date: "Oct 14, 2026",
    readTime: 9,
    likes: 312,
    status: "published",
    content:
      "There is a moment in every great athlete's career that tells you everything. For Virat Kohli, it came in the 2011 World Cup final. He was not the star that night — MS Dhoni was. But watching Kohli walk out to bat, calm and focused in front of 40,000 roaring fans, you could already sense what was coming.\n\nA decade and a half later, Kohli stands as one of the greatest batters the game has ever seen. Over 27,000 international runs. More ODI centuries than anyone in history. A Test average that puts him in the company of Bradman, Sobers, and Tendulkar.\n\nThe hunger that never left\n\nWhat separates Kohli from his peers is not just talent — it is obsession. He transformed Indian cricket's relationship with fitness. He turned the gym into a temple. He made the pull shot look like poetry and the cover drive feel like a statement.\n\nHis captaincy era brought India its first Test series win in Australia. He built a team that believed it could win anywhere in the world. That belief did not come from a dressing room speech. It came from watching their captain walk to the crease and refuse to give his wicket away.\n\nThe comeback nobody expected\n\nAfter a lean patch between 2020 and 2022, critics wrote him off. Too rigid. Too stubborn. Past his best. Then came the 2023 World Cup. Century after century. A tournament average of over 95. Kohli did not just silence the critics — he reminded the world why he was different.\n\nHe is not finished. And somehow, that feels like the most Kohli thing of all.",
    comments: [
      {
        id: "ck1",
        author: "James Carter",
        text: "Brilliant piece. The 2023 World Cup run was something else entirely — felt like watching a man settle a very old score with doubt itself.",
        date: "Oct 14, 2026",
      },
      {
        id: "ck2",
        author: "Sarah Chen",
        text: "The comeback section gave me chills. What a player.",
        date: "Oct 15, 2026",
      },
    ],
  },
  {
    id: "cricket-greatest-rivalries",
    title: "The rivalries that made cricket unforgettable",
    excerpt: "India vs Pakistan, Kohli vs Anderson, bat vs ball — the contests that had the whole world watching.",
    category: "Cricket",
    cover: cricket2,
    authorId: "rahul",
    date: "Oct 13, 2026",
    readTime: 7,
    likes: 198,
    status: "published",
    content:
      "Cricket is a team sport, but its greatest moments are almost always personal. A bowler staring down a batter. A batter refusing to flinch. Two players, one pitch, and everything on the line.\n\nKohli vs Anderson\n\nNo rivalry in modern Test cricket has been more compelling. James Anderson arrived in India in 2014 with a plan: bowl full, swing it late, make Kohli play. It worked. Kohli averaged under 15 in that series. The cricket world took note.\n\nThen came England's tour of India in 2016. Kohli averaged 655 in the series. He did not just beat Anderson — he dismantled him, methodically, over five Tests. It was one of the great personal redemptions in the sport's history.\n\nIndia vs Pakistan\n\nNo fixture in world sport carries quite the same weight. Two nations, one game, and a billion people holding their breath. Kohli has thrived in this arena. His 2022 Asia Cup knock — 82 not out off 53 balls to chase down 160 — is already the stuff of legend.\n\nThe beauty of cricket's rivalries is that they are never truly settled. There is always another series, another innings, another chance to rewrite the story.",
    comments: [
      {
        id: "cr1",
        author: "Emma Wilson",
        text: "The Kohli vs Anderson arc is genuinely one of sport's great stories. Redemption written in runs.",
        date: "Oct 13, 2026",
      },
    ],
  },
  {
    id: "kohli-chase-master",
    title: "The art of the chase: Why Kohli is in a class of his own",
    excerpt: "No batter in history has chased down totals the way Virat Kohli does. Here's what makes him so different under pressure.",
    category: "Cricket",
    cover: cricket3,
    authorId: "rahul",
    date: "Oct 12, 2026",
    readTime: 6,
    likes: 245,
    status: "published",
    content:
      "Chasing is a different skill. It requires calculation, patience, and the ability to accelerate at exactly the right moment. Most batters are good at one or two of these things. Kohli is exceptional at all three.\n\nThe numbers\n\nIn successful ODI run chases, Kohli averages over 95. When India need more than 300, he averages over 80. The bigger the target, the better he performs. This is not a coincidence — it is a mindset.\n\nHow he does it\n\nKohli's approach to a chase is almost mathematical. He calculates the required run rate, identifies the phase where he needs to accelerate, and builds his innings around that moment. He rarely plays a rash shot before he is set. And once he is set, he is almost impossible to stop.\n\nHis footwork against spin is among the best in the modern game. His ability to hit fast bowling through the off side — even on difficult pitches — is unmatched. But what truly sets him apart is his mental clarity. He does not panic. He does not try to do too much too soon.\n\nThe 2016 Asia Cup final against Pakistan. The 2019 World Cup against Pakistan. The 2023 World Cup, match after match. In the biggest moments, Kohli finds another gear.\n\nThat is what makes him the greatest chaser the game has ever seen.",
    comments: [],
  },
  {
    id: "cricket-culture-india",
    title: "Cricket is not just a sport in India — it is a feeling",
    excerpt: "How cricket became the heartbeat of a nation, and why every match feels like it means everything.",
    category: "Cricket",
    cover: cricket4,
    authorId: "sarah",
    date: "Oct 11, 2026",
    readTime: 5,
    likes: 176,
    status: "published",
    content:
      "I grew up in a house where the television volume went up the moment the Indian team walked out to bat. My grandfather would stop whatever he was doing. My mother would make chai and sit down. The whole street seemed to go quiet.\n\nCricket in India is not entertainment. It is ritual.\n\nA shared language\n\nIn a country of a billion people and dozens of languages, cricket is one of the few things that everyone speaks. A six by Kohli is celebrated in Chennai and Chandigarh, in Mumbai and Manipur. The game crosses every boundary that divides us.\n\nThe Kohli effect\n\nNo player has amplified this feeling more than Virat Kohli. He plays with an emotion that mirrors the crowd's own. When he raises his bat after a century, it feels personal — like he is celebrating for all of us. When he is dismissed, the silence in living rooms across the country is real.\n\nThat is the strange, beautiful power of cricket in India. It is never just a game. It is a feeling that belongs to everyone.",
    comments: [
      {
        id: "cc1",
        author: "Rahul Sharma",
        text: "This is exactly it. You cannot explain it to someone who did not grow up with it. You just feel it.",
        date: "Oct 11, 2026",
      },
    ],
  },
  {
    id: "kohli-fitness-revolution",
    title: "How Virat Kohli changed the way Indian cricketers train",
    excerpt: "Before Kohli, fitness was an afterthought. He made it the foundation — and Indian cricket has never been the same.",
    category: "Cricket",
    cover: cricket5,
    authorId: "rahul",
    date: "Oct 10, 2026",
    readTime: 5,
    likes: 189,
    status: "published",
    content:
      "In 2012, Virat Kohli failed a yo-yo fitness test during an India A tour. It was a wake-up call he never forgot. Within two years, he had transformed his body, his diet, and his entire approach to the game.\n\nThe shift\n\nKohli gave up meat. He started working with a personal trainer year-round, not just during tours. He treated recovery as seriously as practice. He made sleep, nutrition, and strength training non-negotiable parts of his routine.\n\nThe ripple effect\n\nWhen the captain of the Indian cricket team starts doing this, everyone notices. Younger players followed. The BCCI introduced mandatory fitness standards. The yo-yo test became a requirement for national selection. Players who could not meet the standard were dropped — regardless of reputation.\n\nThe results spoke for themselves. India became one of the fittest teams in world cricket. They could field brilliantly, bowl long spells in heat, and bat deep into the day without fading.\n\nKohli did not just change his own career. He changed the culture of an entire sport in a country of 1.4 billion people. That might be his most lasting legacy of all.",
    comments: [
      {
        id: "kf1",
        author: "Alex Morgan",
        text: "The culture shift he created is genuinely remarkable. Fitness as identity, not obligation.",
        date: "Oct 10, 2026",
      },
    ],
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
