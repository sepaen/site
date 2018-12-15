import React from 'react'

import Cell from '../system/cell'
import Text from '../system/text'
import Box from '../system/box'

const JobContainer = Cell.extend({
  flexDirection: 'column',
  bb: '1px solid balck',
  pb: 5,
  px: 2
})

const JobTitle = Text.extend({
  alignSelf: 'center',
  fontSize: '2em'
})

const JobColumn = Box.extend({
  width: p => [1, p.big ? 1 / 2 : 1 / 4],
  flexDirection: 'column'
})

const JobPreview = ({ job, ...props }) => {
  const info = job.frontmatter

  return (
    <JobContainer {...props}>
      <JobTitle children={info.title} mb={5} />

      <Box flexDirection={['column', 'row']}>
        <JobColumn big mr={[0, 3]} mb={[4, 0]}>
          <Text children="Description of position" mb={[2, 4]} />
          <Text children={info.description} />
        </JobColumn>
        <JobColumn mr={[0, 3]} mb={[4, 0]}>
          <Text children="Requirements" mb={[2, 4]} />
          <Text children={info.requirements} />
        </JobColumn>
        <JobColumn>
          <Text children="How to apply" mb={[2, 4]} />
          <Text children={info.howto} />
        </JobColumn>
      </Box>
    </JobContainer>
  )
}

export default JobPreview
