-- Run this in your Supabase project's SQL editor

-- Posts table
create table if not exists posts (
  id           text primary key,
  title        text not null,
  excerpt      text,
  content      text,
  category     text,
  cover        text,
  author_id    uuid references auth.users(id) on delete cascade,
  read_time    int default 5,
  likes        int default 0,
  status       text check (status in ('published', 'draft')) default 'draft',
  created_at   timestamptz default now()
);

-- Comments table
create table if not exists comments (
  id         uuid primary key default gen_random_uuid(),
  post_id    text references posts(id) on delete cascade,
  author     text not null,
  text       text not null,
  created_at timestamptz default now()
);

-- Per-user likes / saves
create table if not exists user_interactions (
  id       uuid primary key default gen_random_uuid(),
  user_id  uuid references auth.users(id) on delete cascade,
  post_id  text references posts(id) on delete cascade,
  type     text check (type in ('like', 'save')),
  unique (user_id, post_id, type)
);

-- RPC to safely increment/decrement likes
create or replace function increment_likes(post_id text, delta int)
returns void language sql as $$
  update posts set likes = greatest(0, likes + delta) where id = post_id;
$$;

-- Row Level Security
alter table posts              enable row level security;
alter table comments           enable row level security;
alter table user_interactions  enable row level security;

-- Posts: anyone can read published posts; authors manage their own
create policy "read published posts"  on posts for select using (status = 'published');
create policy "author manages posts"  on posts for all using (auth.uid() = author_id);

-- Comments: anyone can read; authenticated users can insert
create policy "read comments"   on comments for select using (true);
create policy "add comments"    on comments for insert with check (auth.role() = 'authenticated');

-- Interactions: users manage their own
create policy "manage interactions" on user_interactions for all using (auth.uid() = user_id);
