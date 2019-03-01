import React from 'react'

import Cell from '../system/cell'
import Text from '../system/text'
import Box from '../system/box'

const JobContainer = Cell.with({
  flexDirection: 'column',
  bb: '1px solid balck',
  pb: 5,
  px: 2
})

const JobTitle = Text.with({
  alignSelf: 'center',
  fontSize: '2em'
})

const JobColumn = Box.with(({ big, ...props }) => ({
  ...props,
  width: 1,
  flexDirection: 'column',

  desktop: {
    width: big ? 1 / 2 : 1 / 4
  }
}))

const margins = {
  col: {
    mr: 0,
    mb: 4,

    desktop: {
      mr: 3,
      mb: 0
    }
  },

  header: {
    mb: 2,
    desktop: { mb: 4 }
  }
}

const JobPreview = ({ job, ...props }) => {
  const info = job.frontmatter

  return (
    <JobContainer {...props}>
      <JobTitle children={info.title} mb={5} />

      <Box flexDirection={['column', 'row']}>
        <JobColumn big {...margins.col}>
          <Text children="Description of position" {...margins.header} />
          <Text children={info.description} />
        </JobColumn>
        <JobColumn {...margins.col}>
          <Text children="Requirements" {...margins.header} />
          <Text children={info.requirements} />
        </JobColumn>
        <JobColumn>
          <Text children="How to apply" {...margins.header} />
          <Text children={info.howto} />
        </JobColumn>
      </Box>
    </JobContainer>
  )
}

export default JobPreview
