import React from 'react'
import HeatingAgentDisplay from './HeatingAgentDisplay'
import useHeatingAgent from './useHeatingAgent'

export default function HeatingAgentDisplayContainer(props) {
  return <HeatingAgentDisplay {...props} {...useHeatingAgent()} />
}
