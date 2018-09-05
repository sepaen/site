import React from 'react'

import Cell from '../system/cell'
import Text from '../system/text'
import Flex from '../system/flex'

const JobPreview = ({ job, ...props }) => {
  const info = job.frontmatter

  return (
    <Cell
      {...props}
      flexDirection="column"
      borderBottom="1px solid black"
      pb={5}
      px={2}
    >
      <Text children={info.title} alignSelf="center" fontSize="2em" mb={5} />
      <Flex flexDirection={['column', 'row']}>
        <Flex width={[1, 1 / 2]} flexDirection="column" mr={[0, 3]} mb={[4, 0]}>
          <Text children="Description of position" mb={[2, 4]} />
          <Text children={info.description} />
        </Flex>
        <Flex width={[1, 1 / 4]} flexDirection="column" mr={[0, 3]} mb={[4, 0]}>
          <Text children="Requirements" mb={[2, 4]} />
          <Text children={info.requirements} />
        </Flex>
        <Flex width={[1, 1 / 4]} flexDirection="column">
          <Text children="How to apply" mb={[2, 4]} />
          <Text children={info.howto} />
        </Flex>
      </Flex>
    </Cell>
  )
}

export default JobPreview
