import { StoryDefault } from '@ladle/react'
import { Highlight as BlogCardHighlight, Item as BlogCardItem } from ".";

export const Highlight = () => <BlogCardHighlight />
export const Item = () => <BlogCardItem />

export default {
  title: "Blog Card",
} satisfies StoryDefault;
