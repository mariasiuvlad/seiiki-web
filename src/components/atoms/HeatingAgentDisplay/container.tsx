import React from 'react'
import HeatingAgentDisplay from './HeatingAgentDisplay'
import useHeatingAgent from './useHeatingAgent'

export default function HeatingAgentDisplayContainer() {
  return <HeatingAgentDisplay {...useHeatingAgent()} />
}
