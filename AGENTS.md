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

## Architecture rules
- All client-specific content and theme values live in `src/config/*`; components in `src/components/site` must never hardcode institute text. Why: template is reused across multiple coaching-class clients.
- Theme colours/fonts are injected as CSS variables from `themeConfig` in `__root.tsx`; styles.css only holds fallbacks. Why: one config change restyles the whole site.
- Section visibility goes through `utils/sections.isSectionVisible` (enabled + has content). Why: never render empty sections.
