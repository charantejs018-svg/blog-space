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
  authorName?: string;
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
  // ── New stories ──────────────────────────────────────────────────────────
  {
    id: "typography-craft",
    title: "Why good typography is invisible",
    excerpt: "The best type choices are the ones readers never notice — and that's exactly the point.",
    category: "Design",
    cover: design,
    authorId: "alex",
    date: "Oct 18, 2026",
    readTime: 5,
    likes: 94,
    status: "published",
    content:
      "Typography is the silent architecture of every page. When it works, nobody notices. When it fails, everyone feels it — even if they cannot say why.\n\nThe invisible grid\n\nA well-set paragraph has rhythm. The line length is comfortable. The spacing between lines gives the eye room to breathe. The weight of the type matches the tone of the words. None of this is accidental. It is the result of dozens of small decisions made before a single word was read.\n\nChoosing with intention\n\nThe typeface you choose carries meaning before the reader processes a single letter. Serif fonts carry history and authority. Sans-serifs feel modern and direct. A display face can set a mood in an instant. The mistake most designers make is choosing a typeface they like rather than one that serves the content.\n\nThe test of good typography is simple: does the reader finish the page without once thinking about the type? If yes, you have done your job.",
    comments: [
      { id: "ty1", author: "Emma Wilson", text: "The invisible grid point is so true. You only notice typography when something is wrong.", date: "Oct 18, 2026" },
    ],
  },
  {
    id: "morning-without-phone",
    title: "I stopped checking my phone in the morning. Here's what happened.",
    excerpt: "A simple experiment that changed the first hour of every day.",
    category: "Lifestyle",
    cover: desk,
    authorId: "emma",
    date: "Oct 17, 2026",
    readTime: 4,
    likes: 211,
    status: "published",
    content:
      "The experiment started by accident. My phone died overnight and I did not notice until I was already halfway through my morning coffee. By then, something had shifted.\n\nThe first hour without the feed\n\nI sat with my thoughts. I looked out the window. I made a proper breakfast instead of scrolling through other people's mornings. The day felt like it belonged to me in a way it usually did not.\n\nWhat I kept\n\nI have kept the habit for four months now. The phone stays on the charger until I have been awake for an hour. In that time I read, write, or simply sit. The news will still be there. The notifications will wait.\n\nWhat surprised me most was not the calm — it was the ideas. The best thoughts of my day almost always arrive in that first quiet hour. They were always there. I just was not giving them any room.",
    comments: [
      { id: "mp1", author: "James Carter", text: "Did this for a week and never went back. The morning belongs to you before it belongs to the internet.", date: "Oct 17, 2026" },
      { id: "mp2", author: "Sarah Chen", text: "The ideas point is so real. My best writing happens before I open any app.", date: "Oct 18, 2026" },
    ],
  },
  {
    id: "open-source-culture",
    title: "The quiet revolution of open source",
    excerpt: "How millions of strangers building things together changed software — and what it says about human nature.",
    category: "Technology",
    cover: architecture,
    authorId: "alex",
    date: "Oct 16, 2026",
    readTime: 6,
    likes: 138,
    status: "published",
    content:
      "Somewhere right now, a developer in São Paulo is fixing a bug in a library used by a startup in Helsinki. They have never met. They never will. And yet the fix will ship, the library will improve, and both of them will move on to the next problem.\n\nThis is open source. And it is one of the stranger, more beautiful things humans have built.\n\nTrust at scale\n\nOpen source works because of a shared agreement that is never written down: we make things better together. There is no contract. No payment. Just the understanding that the work matters and that good work is its own reward.\n\nWhat it teaches us\n\nThe open source model has lessons far beyond software. It shows that transparency builds trust. That distributed ownership creates resilience. That people will do remarkable things when the goal is clear and the barriers are low.\n\nThe next time you use a browser, a phone, or almost any piece of modern software, you are standing on the shoulders of millions of people who gave their work away. That is worth pausing to appreciate.",
    comments: [],
  },
  {
    id: "japan-slow-travel",
    title: "Three weeks in Japan with no itinerary",
    excerpt: "What happens when you put away the guidebook and let a country surprise you.",
    category: "Travel",
    cover: mountains,
    authorId: "sarah",
    date: "Oct 15, 2026",
    readTime: 7,
    likes: 267,
    status: "published",
    content:
      "I arrived in Tokyo with a return ticket and nothing else planned. No hotel bookings beyond the first night. No list of must-see temples. Just three weeks and a willingness to be surprised.\n\nThe first week was uncomfortable. I kept reaching for my phone to find the next thing, the best thing, the thing everyone said I had to do. Slowly, I stopped.\n\nWhat the slow pace revealed\n\nI found a tiny ramen shop in Kyoto that had no English menu and the best broth I have ever tasted. I spent an entire afternoon in a bookshop I could not read, just looking at the covers. I got on the wrong train and ended up in a coastal town I had never heard of, where I stayed for three days.\n\nJapan rewards patience. The more you slow down, the more it gives you. The temples are beautiful. But the real Japan is in the konbini at midnight, the salaryman asleep on the subway, the grandmother tending her garden at six in the morning.\n\nYou cannot plan your way to those moments. You can only make yourself available to them.",
    comments: [
      { id: "jp1", author: "Emma Wilson", text: "The bookshop afternoon — I felt that. Some experiences don't need language.", date: "Oct 15, 2026" },
    ],
  },
  {
    id: "deep-work-myth",
    title: "Deep work is not about discipline. It's about design.",
    excerpt: "Stop trying to force focus. Start building an environment where focus is the natural outcome.",
    category: "Productivity",
    cover: desk,
    authorId: "james",
    date: "Oct 14, 2026",
    readTime: 5,
    likes: 183,
    status: "published",
    content:
      "Every productivity article tells you the same thing: wake up earlier, be more disciplined, resist distraction. What they rarely tell you is that willpower is a terrible strategy.\n\nDesign beats discipline\n\nThe most focused people I know are not more disciplined than the rest of us. They have simply arranged their environment so that the path of least resistance leads to the work. Their phone is in another room. Their desk faces a wall, not a window. Their mornings are protected by habit, not heroic effort.\n\nThe two-hour block\n\nI do not try to focus all day. I protect two hours in the morning for the work that matters most. Everything else — email, meetings, admin — happens after. The quality of those two hours is worth more than the rest of the day combined.\n\nStart with the environment. Move the phone. Close the tabs. Tell people you are unavailable. Then sit down and do the work. Discipline will follow. It always does, once the friction is gone.",
    comments: [
      { id: "dw1", author: "Alex Morgan", text: "Design beats discipline — this should be on a poster. Changed how I think about my workspace.", date: "Oct 14, 2026" },
    ],
  },
  {
    id: "street-food-culture",
    title: "Street food is the most honest food",
    excerpt: "No reservations, no dress code, no pretense — just a cook, a fire, and something extraordinary.",
    category: "Culture",
    cover: architecture,
    authorId: "sarah",
    date: "Oct 13, 2026",
    readTime: 4,
    likes: 152,
    status: "published",
    content:
      "The best meal I have ever eaten cost less than two dollars. It was a bowl of noodles from a cart on a street corner in Hanoi, eaten standing up, at seven in the morning, with strangers on either side of me.\n\nNo performance, just food\n\nStreet food has no interest in impressing you. There is no ambient lighting, no sommelier, no tasting menu. There is a person who has been making one thing for twenty years, and they are very good at it. That is the whole story.\n\nWhat it tells us about culture\n\nEvery city's street food is a map of its history. The spices that arrived with traders. The techniques passed down through families. The ingredients that grew in the soil nearby. You can learn more about a place from its street corners than from any museum.\n\nEat where the locals eat. Stand at the cart with no English sign. Point at what the person next to you is having. That is where the real story is.",
    comments: [],
  },
  {
    id: "rohit-sharma-captain",
    title: "Rohit Sharma: The captain who changed everything",
    excerpt: "How a naturally gifted batter became the most tactically astute captain in Indian cricket history.",
    category: "Cricket",
    cover: cricket1,
    authorId: "rahul",
    date: "Oct 17, 2026",
    readTime: 7,
    likes: 224,
    status: "published",
    content:
      "There is a version of Rohit Sharma that the world almost missed. The one who averaged 39 in Tests before 2019. The one whose talent was never in question but whose application sometimes was. Then something changed.\n\nThe opening gambit\n\nWhen India moved Rohit to open in Tests in 2019, it was a gamble. He had never done it at that level. Within months, he had scored five centuries in a single series against South Africa. The gamble became a masterstroke.\n\nThe captain's mind\n\nAs captain, Rohit brought something different to Indian cricket: calm. Where previous captains led with intensity, Rohit led with clarity. He rotated bowlers with patience. He backed his players publicly and consistently. He created an environment where young players could fail without fear.\n\nThe 2024 T20 World Cup\n\nIndia had not won an ICC tournament since 2013. Under Rohit, they ended that drought in the most dramatic fashion — unbeaten throughout the tournament, winning the final against South Africa with the last ball of the match. It was the culmination of everything he had built.\n\nRohit Sharma did not just win a trophy. He changed what Indian cricket believed was possible.",
    comments: [
      { id: "rs1", author: "James Carter", text: "The calm leadership point is underrated. India under Rohit just feels different — more settled.", date: "Oct 17, 2026" },
    ],
  },
  {
    id: "ipl-revolution",
    title: "How the IPL changed cricket forever",
    excerpt: "Fifteen years on, the Indian Premier League has reshaped the sport in ways nobody predicted.",
    category: "Cricket",
    cover: cricket2,
    authorId: "rahul",
    date: "Oct 16, 2026",
    readTime: 8,
    likes: 201,
    status: "published",
    content:
      "When the Indian Premier League launched in 2008, the cricket establishment was skeptical. Twenty overs. Cheerleaders. Franchise cricket. It felt like a circus. Fifteen years later, it is the most valuable cricket tournament on earth and has fundamentally changed how the game is played, watched, and paid for.\n\nThe money changed everything\n\nThe IPL created a new economy for cricket. Players from the West Indies, Australia, England, and South Africa could earn in six weeks what they might make in a year of international cricket. It shifted power. It created stars. It also created tension — between franchise loyalty and national duty, between T20 skills and Test match temperament.\n\nThe tactical revolution\n\nThe IPL accelerated cricket's tactical evolution faster than any other competition. The ramp shot, the switch hit, the yorker at will, the death bowling template — all of these were refined and perfected in IPL seasons. Coaches and analysts from around the world converged on the tournament, and the ideas spread globally.\n\nWhat it means for the future\n\nThe IPL is now the template. Every cricket board wants its own version. The question is whether the growth of franchise cricket comes at the cost of Test cricket — the format that most players and fans still consider the truest measure of the game.\n\nThat tension is not resolved. But the IPL's place in cricket history is already secure.",
    comments: [
      { id: "ip1", author: "Sarah Chen", text: "The tactical revolution section is fascinating. The IPL really is a giant cricket laboratory.", date: "Oct 16, 2026" },
    ],
  },
  {
    id: "color-in-design",
    title: "Color is a feeling, not a choice",
    excerpt: "Why the most powerful color decisions in design are emotional, not logical.",
    category: "Design",
    cover: design,
    authorId: "alex",
    date: "Oct 15, 2026",
    readTime: 4,
    likes: 77,
    status: "published",
    content:
      "Every designer has a color theory story. The client who insisted on a specific shade of blue. The brand that changed its primary color and lost customers. The app that felt cold until someone added a single warm accent.\n\nColor works before thought\n\nThe brain processes color before it processes words. Before a user reads a headline, they have already felt something about the page. That feeling is almost entirely driven by color. This is not a small thing. It is the first impression, and first impressions are hard to undo.\n\nThe emotional vocabulary of color\n\nBlue builds trust. That is why banks and hospitals use it. Red creates urgency. That is why sale signs are red. Green signals safety and growth. Yellow demands attention. These are not rules — they are tendencies, shaped by culture and context. A good designer knows the tendencies and knows when to break them.\n\nThe most important color decision\n\nIt is not the primary color. It is the white space. The absence of color is itself a color choice, and it is the one most designers get wrong. Give your colors room to breathe. The contrast will do the rest.",
    comments: [],
  },
  {
    id: "walking-thinking",
    title: "Walking is thinking with your feet",
    excerpt: "Why the best ideas rarely arrive at a desk — and what to do about it.",
    category: "Productivity",
    cover: mountains,
    authorId: "james",
    date: "Oct 12, 2026",
    readTime: 3,
    likes: 119,
    status: "published",
    content:
      "Aristotle taught while walking. Beethoven composed on long afternoon walks through Vienna. Darwin built a thinking path at his home and walked it every day. There is a pattern here that is hard to ignore.\n\nWhy walking works\n\nWalking increases blood flow to the brain. It activates the default mode network — the part of the brain responsible for creative thinking and making connections between ideas. It removes you from the screen, the inbox, the pressure to produce. It gives your mind permission to wander.\n\nThe wandering mind is not wasted time. It is where the best work happens.\n\nA simple practice\n\nWhen you are stuck, do not try harder. Go for a walk. Leave your phone behind if you can. Take a small notebook. Do not try to solve the problem — just walk. The solution will often arrive before you get home.\n\nThe desk is for executing ideas. The walk is for finding them.",
    comments: [
      { id: "wt1", author: "Emma Wilson", text: "The Darwin thinking path detail is wonderful. Going for a walk right now.", date: "Oct 12, 2026" },
    ],
  },
  {
    id: "small-city-gardens",
    title: "The small gardens changing city life",
    excerpt: "How small gardens are bringing more green to busy city neighborhoods.",
    category: "Lifestyle",
    cover: architecture,
    authorId: "emma",
    date: "Oct 23, 2026",
    readTime: 5,
    likes: 91,
    status: "published",
    content:
      "The first thing you notice is the sound. A few leaves move in the breeze above the traffic, and for a moment the city feels softer.\n\nGreen in unexpected places\n\nAcross crowded neighborhoods, people are finding room to grow things wherever they can. A row of herbs on a balcony. Tomatoes in buckets beside a shared stairwell. A courtyard that used to be concrete, now full of pots and places to sit.\n\nA garden does not need to feed a whole street to make a difference. It gives neighbors a reason to stop and talk. It makes a walk home feel less hurried. It reminds us that care can take root even where space is scarce.\n\nStart with one pot\n\nChoose something that suits the light you have, ask a neighbor what grows well nearby, and give it a little attention. The point is not to create a perfect garden. It is to make one small place feel more alive.",
    comments: [],
  },
  {
    id: "making-tech-feel-human",
    title: "When technology makes room for people",
    excerpt: "The most useful tools do more than save time: they help us spend it on what matters.",
    category: "Technology",
    cover: design,
    authorId: "alex",
    date: "Oct 22, 2026",
    readTime: 6,
    likes: 83,
    status: "published",
    content:
      "We often measure technology by what it can do faster. But speed is only useful when it gives something back.\n\nBeyond convenience\n\nA tool that removes a repetitive task can be valuable. A tool that makes a complicated process easier to understand can be even more so. The difference is whether the person using it feels more capable, or simply more hurried.\n\nDesigning for attention\n\nHuman-centered technology respects the limits of attention. It explains what is happening, makes important choices clear, and does not interrupt just because it can. It gives people control over the pace and leaves room for judgment.\n\nThe next time we evaluate a new feature, perhaps the better question is not only whether it saves a minute. It is what that minute makes possible — and whether the experience feels more human because of it.",
    comments: [],
  },
  {
    id: "one-neighborhood-table",
    title: "One table, a dozen different stories",
    excerpt: "What happens when neighbors share a meal without needing to agree on everything.",
    category: "Culture",
    cover: architecture,
    authorId: "sarah",
    date: "Oct 21, 2026",
    readTime: 5,
    likes: 116,
    status: "published",
    content:
      "The invitation was simple: bring something to eat and a story about where it came from. By dusk, the table held more dishes than anyone could name and more conversation than the organizers had planned for.\n\nA place to begin\n\nPeople who had passed each other for years finally learned one another's names. A recipe led to a memory; a memory led to a question. Nobody had to share the same background to recognize the feeling of missing home or wanting to welcome someone in.\n\nListening is part of the meal\n\nCommunity does not appear all at once. It grows through small acts of attention: making room at the table, asking a question, and staying for the answer. A shared meal cannot solve every difference, but it can make those differences less abstract.\n\nThe best part was what happened afterward. Before anyone left, someone had already offered to host the next one.",
    comments: [],
  },
  {
    id: "notes-for-a-focused-day",
    title: "A gentler way to plan a focused day",
    excerpt: "Trade the endless to-do list for a few clear priorities and a little breathing room.",
    category: "Productivity",
    cover: desk,
    authorId: "james",
    date: "Oct 20, 2026",
    readTime: 4,
    likes: 102,
    status: "published",
    content:
      "A long list can make a day feel full before it has even begun. I used to write down everything, then end the evening wondering why the most important work had not moved.\n\nChoose what matters today\n\nNow I start with one task that would make the day feel meaningful, then add two smaller things that genuinely need doing. Everything else goes on a separate list. It is still there, but it no longer gets to pretend it is all equally urgent.\n\nLeave a little margin\n\nPlans change. Conversations run long. A difficult task takes more energy than expected. Leaving open space is not poor planning; it is how a plan survives contact with real life.\n\nAt the end of the day, I look at what moved forward rather than how much I crossed off. The difference is subtle, but it makes work feel more like progress and less like pursuit.",
    comments: [],
  },
  {
    id: "the-architecture-of-a-walk",
    title: "A city reveals itself one block at a time",
    excerpt: "Look up and discover the small details that make a city feel like home.",
    category: "Travel",
    cover: mountains,
    authorId: "sarah",
    date: "Oct 19, 2026",
    readTime: 6,
    likes: 88,
    status: "published",
    content:
      "The first time I walked through the neighborhood, I was looking for the landmark on my map. The second time, I noticed the blue door with a brass handle worn smooth by years of use.\n\nThe details between destinations\n\nA city is more than its famous buildings. It is the bakery opening before sunrise, the bench that catches the afternoon light, and the narrow street where someone has planted flowers in old tins. These details rarely appear in guidebooks, but they are what make a place feel specific.\n\nWalk without a checklist\n\nPick a direction and give yourself enough time to change your mind. Pause when something catches your eye. If you find a street you like, follow it a little farther. A map is useful, but curiosity is a better guide for the parts of a city that are not trying to be attractions.\n\nBy the end of the walk, I had missed the landmark. I had also found the place I wanted to return to.",
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
