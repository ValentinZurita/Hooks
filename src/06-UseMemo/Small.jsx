import React from 'react'
import { memo } from 'react'
import PropTypes from 'prop-types'

export const Small = memo(({ value }) => {
  console.log('Me volví a llamar :(')

  return <div>{value}</div>
})

Small.displayName = 'Small'

Small.propTypes = {
  value: PropTypes.any.isRequired,
}
