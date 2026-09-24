---
name: unsloppable-cartoonist
description: >-
  Creates original single-panel cartoons blending James Thurber's humanistic simplicity,
  RK Laxman's flummoxed everyman, and Saul Steinberg's minimalist line economy, complete with
  a New Yorker-style caption and 'Unsloppable' signature. Performs visual inspection,
  self-critique against all 5 characteristics, automated re-rendering if necessary, solicits
  user approval and figure naming, and archives user inputs, prompts, outputs, and images into the figure directory.
---

# Unsloppable Cartoonist Skill

> [!IMPORTANT]
> **Every Request is Net New — Ignore Existing Files**:
> The agent must ignore existing files and folders in this directory (e.g., prior figure folders like `fig1-1/`, `fig1-2/`, etc.). Every prompt to create a cartoon is net new and does not need to look at earlier images, previous outputs, or archived figures. Proceed directly to conceptualizing and generating the cartoon based solely on the user's immediate prompt.

Create single-panel editorial cartoons for books and articles that synthesize three master cartoonist traditions into a distinct visual style:

1. **James Thurber**: Soft, humanistic, loose, unpretentious contours with gentle, vulnerable humor.
2. **R.K. Laxman**: The centered, bewildered "Common Man" everyman with round spectacles, rumpled checkered jacket, and quiet bafflement.
3. **Saul Steinberg**: Razor-sharp pen-and-ink line economy, vast clean negative space, and conceptual wit.
4. **New Yorker-Style Caption**: Centered at the bottom, printed in classic italic serif type, delivering deadpan single-sentence irony.
5. **Signed "Unsloppable"**: An authentic cartoonist signature in the lower corner.

---

## Detailed References

- [Style Guide](./references/style_guide.md): Deep-dive into each artist's aesthetics, line weight, negative space, and tone.
- [Critique Rubric & Protocol](./references/critique_rubric.md): 5-point grading criteria, failure mode catalog, and corrective prompt strategies.
- [Prompt Templates](./examples/prompt_templates.md): Ready-to-use prompt recipes across technology, governance, code, and everyday life.

---

## Workflow: From Idea to Archived Figure

Follow this sequential procedure for every cartoon request:

```
[Phase 1: Gag & Caption] ──> [Phase 2: Prompt Synthesis] ──> [Phase 3: generate_image]
                                                                        │
                                                                        ▼
[Phase 7: Archive Figure] <── [Phase 6: User Approval] <── [Phase 5: Re-render Loop] <── [Phase 4: view_file & Critique]
  (Save all files)              (Ask approval & name)        (If score < 21 or any < 4)
```

### Phase 1: Conceptualize the Gag & Caption
1. **Analyze the context**: Identify the core theme, absurdity, or irony purely from the user's immediate prompt. Do not inspect, browse, or consult earlier figure folders or previous images—every cartoon request is net new.
2. **Center the Everyman**: Cast Laxman's Common Man as the quiet witness or bewildered recipient of modern excess, jargon, or over-engineering.
3. **Draft the New Yorker Caption**:
   - Write a single crisp sentence.
   - Use deadpan understatement—let the absurdity speak for itself.
   - Avoid punchline markers, exclamation marks, or forced wordplay.

### Phase 2: Synthesize the Image Prompt
Construct a detailed prompt using the [Master Prompt Anatomy](./examples/prompt_templates.md#anatomy-of-the-master-prompt):
- **Core Style**: Specify minimalist single-panel ink cartoon blending James Thurber, RK Laxman, and Saul Steinberg.
- **Protagonist**: Explicitly describe the centered Laxman Common Man (elderly, balding crown with white side tufts, round wire glasses, rumpled plaid/checkered coat, perplexed expression).
- **Linework**: Specify Saul Steinberg's spare, conceptual black dip-pen lines on cream/off-white paper with generous negative space, softened by James Thurber's organic human forms.
- **Constraints**: Pure black ink line art on white/cream paper; strictly NO color, NO 3D shading, NO gradients, NO CGI textures.
- **Signature**: Include `signed "Unsloppable" in the bottom-right corner in delicate black ink script`.
- **Caption**: Include `centered at the bottom beneath the drawing in clean New Yorker italic serif typography: "[Caption Text]"`.

### Phase 3: Generate the Candidate Image
Execute the tool:
```json
{
  "Prompt": "<Formulated Master Prompt>",
  "ImageName": "<descriptive_short_name>",
  "AspectRatio": "1:1"
}
```
*(Use `1:1` for classic square single-panel cartoons, or `16:9` / `3:2` for horizontal multi-panel comparison strips).*

### Phase 4: Visual Inspection & 5-Point Self-Critique
Once `generate_image` returns the image artifact path:
1. Call `view_file` with `AbsolutePath: "<image_path>"` to visually inspect the resulting cartoon.
2. Complete the **5-Point Rubric Audit**:

```markdown
### Visual Critique Audit: [Cartoon Name]
| # | Dimension | Score (1-5) | Visual Observations |
|---|---|---|---|
| 1 | Thurber Humanism | X/5 | [Soft organic contours, gentle vulnerability?] |
| 2 | Laxman Flummoxed Everyman | X/5 | [Centered, spectacles, checkered jacket, bewildered?] |
| 3 | Steinberg Line Economy | X/5 | [Clean ink lines, negative space, no 3D/gradients?] |
| 4 | New Yorker Caption | X/5 | [Centered at bottom, italic serif type, legible, deadpan?] |
| 5 | "Unsloppable" Signature | X/5 | [Legible "Unsloppable" signature in corner?] |
| **Total** | **X / 25** | **Status: PASS / FAIL** |
```

### Phase 5: Critique-Driven Re-render Loop
- **If Total >= 21 AND all criteria >= 4**: The cartoon is approved. Proceed to Phase 6.
- **If Total < 21 OR any criterion < 4**:
  1. Identify the failing dimensions and the exact visual defects (refer to [Failure Modes & Fixes](./references/critique_rubric.md#common-failure-modes--prompt-fixes)).
  2. Adjust the prompt by reinforcing the missing constraints (e.g. emphasize `pure black ink dip-pen line art, zero shading`, or `prominently signed "Unsloppable" in the bottom right corner`).
  3. Call `generate_image` with the refined prompt (optionally providing the prior image path in `ImagePaths` with targeted edit instructions).
  4. Re-inspect with `view_file` and repeat audit (up to 3 iterations maximum).

### Phase 6: User Presentation & Approval Request
Present the generated cartoon and critique to the user:
1. Display the rendered image and caption.
2. Display the 5-point critique audit proving compliance with all five characteristics.
3. Explicitly ask the user:
   - For their approval of the cartoon design.
   - For the desired figure name/identifier (e.g., `fig1-1`, `fig2-3`, etc.).

### Phase 7: Figure Archiving & File Organization
Once the user approves and provides the figure name:
1. Create the figure directory: `<figure_name>/` (e.g., `fig1-1/` in the project root).
2. Save the following files inside `<figure_name>/`:
   - `user_input.md`: The user's exact original input prompt/request.
   - `prompt.md`: The input prompt(s) used for generation (including both initial and re-rendered prompts, parameters, and aspect ratios).
   - `output.md`: The output caption, panel descriptions, list of rendered image files, and the complete 5-point critique audit table.
   - `<figure_name>.jpg`: The final approved rendered image copied from the artifacts directory.
   - `<figure_name>_initial_render.jpg`: Any draft or preliminary renders prior to re-rendering (if applicable).
3. Confirm to the user that all assets are archived with clickable file links.
