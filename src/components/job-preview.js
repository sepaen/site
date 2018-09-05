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
      gridColumn="2/6"
      borderBottom="1px solid white"
      pb={5}
      px={2}
    >
      <Text children={info.title} alignSelf="center" fontSize="2em" mb={5} />
      <Flex>
        <Flex width={1 / 2} flexDirection="column" mr={3}>
          <Text children="Description of position" mb={4} />
          <Text children={info.description} />
        </Flex>
        <Flex width={1 / 4} flexDirection="column" mr={3}>
          <Text children="Requirements" mb={4} />
          <Text children={info.requirements} />
        </Flex>
        <Flex width={1 / 4} flexDirection="column">
          <Text children="How to apply" mb={4} />
          <Text children={info.howto} />
        </Flex>
      </Flex>
    </Cell>
  )
}

export default JobPreview
