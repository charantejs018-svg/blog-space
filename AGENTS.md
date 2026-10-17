<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## BlogSpace architecture
- Use TanStack file-based routes for navigation; the existing framework provides typed links and deep-link support without a second router.
- Keep mock posts, profiles, comments and session state in a shared React context; this stage must run without external services or persistent storage.
- Use shared story cards, author avatars and page metadata helpers across content routes for consistent presentation.
