import * as p from '@clack/prompts'
import { execa } from 'execa'

const componentUrls = [
  { value: 'navbar', filename: 'navbar.tsx', url: 'https://raw.githubusercontent.com/palladians/slidx/main/packages/ui/src/components/navbar/index.tsx', label: 'Navbar' },
  { value: 'footer', filename: 'footer.tsx', url: 'https://raw.githubusercontent.com/palladians/slidx/main/packages/ui/src/components/footer/index.tsx', label: 'Footer' },
  { value: 'cta', filename: 'cta.tsx', url: 'https://raw.githubusercontent.com/palladians/slidx/main/packages/ui/src/components/cta/index.tsx', label: 'Call To Action' },
  { value: 'hero_typographic', filename: 'hero-typographic.tsx', url: 'https://raw.githubusercontent.com/palladians/slidx/main/packages/ui/src/components/hero/typographic.tsx', label: 'Hero -> Typographic' }
]

const main = async () => {
  const spinner = p.spinner()
  p.intro('Welcome to Slidx')
  const components = await p.multiselect({
    message: 'Pick components to paste:',
    options: componentUrls
  }) as string[]
  spinner.start()
  components.forEach(async (value) => {
    const component = componentUrls.find(c => c.value === value)
    if (!component) return
    await execa('curl', [component.url, '--output', component.filename])
  })
  spinner.stop()
  p.outro('All good, let\s build!')
}

main().catch(console.error);
