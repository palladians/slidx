import { StoryDefault } from '@ladle/react'
import { Buttons as CallToActionButtons, Email as CallToActionEmail } from ".";

export const Buttons = () => <CallToActionButtons />
export const Email = () => <CallToActionEmail />

export default {
  title: "Call To Action",
} satisfies StoryDefault;
