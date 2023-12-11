import React from "react"
import PropTypes from "prop-types"
import { BaseContainer } from "../BaseContainer"

export const List = ({ children, ...rest }) => {
  return (
    <BaseContainer flex flexDirection="column" mx="auto" as="ul" {...rest}>
      {children}
    </BaseContainer>
  )
}

List.proptTypes = {
  children: PropTypes.node.isRequired,
}
