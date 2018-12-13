import Text from '../system/text'

const Markdown = Text.with({
  as: 'section',
  dangerouslySetInnerHTML: p => ({ __html: p.html }),
  flexDirection: 'column',

  $children: {
    '*': { color: 'white' },
    'p, h1': { m: 0 }
  }
})

export default Markdown
