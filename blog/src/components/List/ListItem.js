import React from "react"
import PropTypes from "prop-types"
import { BaseContainer } from "../BaseContainer"

export const ListItem = ({ children, ...rest }) => {
  return (
    <BaseContainer as="li" {...rest}>
      {children}
    </BaseContainer>
  )
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
}
