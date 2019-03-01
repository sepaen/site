import Text from '../system/text'

const Markdown = Text.with(
  {
    as: 'section',
    flexDirection: 'column',

    '& *': { color: 'white' },
    '& p, h1': { m: 1 }
  },

  props => ({
    ...props,
    dangerouslySetInnerHTML: { __html: props.html }
  })
)

export default Markdown
