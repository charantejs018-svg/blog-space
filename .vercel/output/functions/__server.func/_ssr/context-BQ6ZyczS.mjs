import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as initialPosts, t as authors } from "./data-DMP_he2M.mjs";
import { t as supabase } from "./client-BJdHD4G1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/context-BQ6ZyczS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
async function signUp(email, password, name) {
	const redirectTo = `${window.location.origin}/auth/callback`;
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: { name },
			emailRedirectTo: redirectTo
		}
	});
	if (error) throw error;
	return data;
}
async function signIn(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});
	if (error) throw error;
	return data;
}
async function signOut() {
	const { error } = await supabase.auth.signOut();
	if (error) throw error;
}
async function getSession() {
	const { data } = await supabase.auth.getSession();
	return data.session;
}
async function fetchPosts() {
	const { data, error } = await supabase.from("posts").select("*, comments(*)").order("created_at", { ascending: false });
	if (error) throw error;
	return (data ?? []).map(dbToPost);
}
async function upsertPost(post, userId) {
	const row = {
		id: post.id,
		title: post.title,
		excerpt: post.excerpt,
		content: post.content,
		category: post.category,
		cover: post.cover,
		author_id: userId,
		author_name: post.authorName ?? "",
		read_time: post.readTime,
		likes: post.likes,
		status: post.status
	};
	const { data, error } = await supabase.from("posts").upsert(row).select("*, comments(*)").single();
	if (error) throw error;
	return dbToPost(data);
}
async function deletePost(id) {
	const { error } = await supabase.from("posts").delete().eq("id", id);
	if (error) throw error;
}
async function toggleLikePost(id, increment) {
	const { error } = await supabase.rpc("increment_likes", {
		post_id: id,
		delta: increment ? 1 : -1
	});
	if (error) throw error;
}
async function addComment(postId, text, authorName) {
	const { data, error } = await supabase.from("comments").insert({
		post_id: postId,
		text,
		author: authorName
	}).select().single();
	if (error) throw error;
	return {
		id: data.id,
		author: data.author,
		text: data.text,
		date: formatDate(data.created_at)
	};
}
async function fetchUserInteractions(userId) {
	const { data } = await supabase.from("user_interactions").select("post_id, type").eq("user_id", userId);
	const liked = [];
	const saved = [];
	for (const row of data ?? []) {
		if (row.type === "like") liked.push(row.post_id);
		if (row.type === "save") saved.push(row.post_id);
	}
	return {
		liked,
		saved
	};
}
async function toggleInteraction(userId, postId, type, active) {
	if (active) await supabase.from("user_interactions").insert({
		user_id: userId,
		post_id: postId,
		type
	});
	else await supabase.from("user_interactions").delete().match({
		user_id: userId,
		post_id: postId,
		type
	});
}
function formatDate(iso) {
	return new Date(iso).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function dbToPost(row) {
	return {
		id: row.id,
		title: row.title,
		excerpt: row.excerpt,
		content: row.content,
		category: row.category,
		cover: row.cover,
		authorId: row.author_id,
		authorName: row.author_name ?? void 0,
		date: formatDate(row.created_at),
		readTime: row.read_time,
		likes: row.likes ?? 0,
		status: row.status,
		comments: (row.comments ?? []).map((c) => ({
			id: c.id,
			author: c.author,
			text: c.text,
			date: formatDate(c.created_at)
		}))
	};
}
var isSupabaseConfigured = !!{
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kY2Z6Y2J0YXZpYmZ4dGR1a2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNTM4MDQsImV4cCI6MjEwNzcyOTgwNH0.AWME85kwaxILvEhwbAzh0YXGUeDRDReVoVuSvJVbfwk",
	"VITE_SUPABASE_URL": "https://ndcfzcbtavibfxtdukel.supabase.co"
}["VITE_SUPABASE_URL"] && !!{
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kY2Z6Y2J0YXZpYmZ4dGR1a2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNTM4MDQsImV4cCI6MjEwNzcyOTgwNH0.AWME85kwaxILvEhwbAzh0YXGUeDRDReVoVuSvJVbfwk",
	"VITE_SUPABASE_URL": "https://ndcfzcbtavibfxtdukel.supabase.co"
}["VITE_SUPABASE_ANON_KEY"];
var Context = (0, import_react.createContext)(null);
function BlogProvider({ children }) {
	const [posts, setPosts] = (0, import_react.useState)(initialPosts);
	const [user, setUser] = (0, import_react.useState)(null);
	const [liked, setLiked] = (0, import_react.useState)([]);
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(isSupabaseConfigured);
	(0, import_react.useEffect)(() => {
		if (!isSupabaseConfigured) return;
		async function init() {
			try {
				const [fetchedPosts, session] = await Promise.all([fetchPosts(), getSession()]);
				if (fetchedPosts.length) setPosts(fetchedPosts);
				if (session?.user) {
					setUser(sessionToProfile(session.user));
					const interactions = await fetchUserInteractions(session.user.id);
					setLiked(interactions.liked);
					setSaved(interactions.saved);
				}
			} finally {
				setLoading(false);
			}
		}
		init();
		const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
			if (session?.user) {
				setUser(sessionToProfile(session.user));
				const interactions = await fetchUserInteractions(session.user.id);
				setLiked(interactions.liked);
				setSaved(interactions.saved);
			} else {
				setUser(null);
				setLiked([]);
				setSaved([]);
			}
		});
		return () => listener.subscription.unsubscribe();
	}, []);
	const toggleLike = (0, import_react.useCallback)((id) => {
		const wasLiked = liked.includes(id);
		setLiked((prev) => wasLiked ? prev.filter((x) => x !== id) : [...prev, id]);
		setPosts((prev) => prev.map((p) => p.id === id ? {
			...p,
			likes: p.likes + (wasLiked ? -1 : 1)
		} : p));
		if (isSupabaseConfigured && user) {
			toggleLikePost(id, !wasLiked).catch(console.error);
			toggleInteraction(user.id, id, "like", !wasLiked).catch(console.error);
		}
	}, [liked, user]);
	const toggleSave = (0, import_react.useCallback)((id) => {
		const wasSaved = saved.includes(id);
		setSaved((prev) => wasSaved ? prev.filter((x) => x !== id) : [...prev, id]);
		if (isSupabaseConfigured && user) toggleInteraction(user.id, id, "save", !wasSaved).catch(console.error);
	}, [saved, user]);
	const addComment$1 = (0, import_react.useCallback)((id, text) => {
		const authorName = user?.name ?? "Guest reader";
		if (isSupabaseConfigured) addComment(id, text, authorName).then((comment) => setPosts((prev) => prev.map((p) => p.id === id ? {
			...p,
			comments: [...p.comments, comment]
		} : p))).catch(console.error);
		else setPosts((prev) => prev.map((p) => p.id === id ? {
			...p,
			comments: [...p.comments, {
				id: crypto.randomUUID(),
				author: authorName,
				text,
				date: "Just now"
			}]
		} : p));
	}, [user]);
	const savePost = (0, import_react.useCallback)((post) => {
		setPosts((prev) => prev.some((p) => p.id === post.id) ? prev.map((p) => p.id === post.id ? post : p) : [post, ...prev]);
		if (isSupabaseConfigured && user) upsertPost(post, user.id).catch(console.error);
	}, [user]);
	const deletePost$1 = (0, import_react.useCallback)((id) => {
		setPosts((prev) => prev.filter((p) => p.id !== id));
		if (isSupabaseConfigured) deletePost(id).catch(console.error);
	}, []);
	const login = (0, import_react.useCallback)(async (email, password) => {
		if (!isSupabaseConfigured) {
			setUser({ ...authors[0] });
			return;
		}
		const data = await signIn(email, password);
		if (data.user) setUser(sessionToProfile(data.user));
	}, []);
	const signup = (0, import_react.useCallback)(async (email, password, name) => {
		if (!isSupabaseConfigured) {
			setUser({
				...authors[0],
				name
			});
			return;
		}
		await signUp(email, password, name);
	}, []);
	const logout = (0, import_react.useCallback)(async () => {
		if (isSupabaseConfigured) await signOut();
		setUser(null);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
		value: {
			posts,
			user,
			liked,
			saved,
			loading,
			toggleLike,
			toggleSave,
			addComment: addComment$1,
			savePost,
			deletePost: deletePost$1,
			login,
			signup,
			logout
		},
		children
	});
}
function useBlog() {
	const value = (0, import_react.useContext)(Context);
	if (!value) throw new Error("BlogProvider is required");
	return value;
}
function sessionToProfile(user) {
	const name = user.user_metadata?.name ?? user.email ?? "Reader";
	const initials = name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
	return {
		id: user.id,
		name,
		role: "BlogSpace member",
		bio: "",
		initials,
		tone: "violet"
	};
}
//#endregion
export { useBlog as n, BlogProvider as t };
