# Generation prompts

Tool: built-in image_gen.imagegen. Requested aspect ratio: 1:1.

## Initial generation

Use case: illustration-story. Create one square single-panel editorial cartoon. Minimalist black dip-pen ink on white paper blending James Thurber's soft humanistic contours, R.K. Laxman's bewildered everyman, and Saul Steinberg's conceptual line economy. Generous negative space, no color, gradients, 3D or shaded textures.
Scene: a sparse office desk. An unmistakable IN-TRAY on the desk prominently labeled exactly "Summarize these notes". A long document sits in the tray, angled toward the viewer so its first line is clearly legible and reads exactly "Write a poem about rabbits." Beneath this first line show many closely spaced short handwritten squiggle lines suggesting a long document, with no additional legible words. The tray label and document first line must be large enough to read easily.
Centered behind the desk is a balding elderly office worker with white side tufts, round wire spectacles, rumpled checkered coat and tie. He is diligently and somewhat bewilderedly conjuring real rabbits instead of summarizing the notes: wand in one hand, other hand raised, three charming rabbits emerging in little arcs above an open top hat on the desk. His pose must communicate that he is actively doing the conjuring. The office task has absurdly turned into a magic act. Keep the in-tray distinct from the hat, and make paper, label, hands, wand, and rabbits visually unambiguous. No extra characters needed.
Centered beneath the drawing, exact caption in clean classic italic serif typography: "That was the document, not the assignment."
Signed "Unsloppable" in legible delicate black ink script in the lower right corner above the caption. A warm, wry, restrained cartoon, not a busy comic.

Parameters: prompt only; no reference image.

## Refinement

Edit this cartoon to simplify it. Preserve exactly the central office worker, his bewildered face and round glasses and checkered coat, wand, three rabbits emerging from the hat, desk, document in in-tray, the exact tray label "Summarize these notes", exact document opening "Write a poem about rabbits.", exact caption "That was the document, not the assignment.", and "Unsloppable" signature. Remove entirely the wall poster at upper left, the filing cabinet with plant and books on right, the mug and its slogan, and the extra stack of books/papers at far right. Leave clean white negative space in their place. Reduce dense hatching on hat and tray to spare black ink outlines and a few purposeful strokes. Retain the existing overall composition and readable text. Only the tray label, document opening, caption, and signature should be readable text in this image. Pure spare black pen lines on white, warm humanistic editorial cartoon.

Parameters: num_last_images_to_include: 1 (initial render).

