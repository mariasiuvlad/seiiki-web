import React from 'react'

interface IProps {
  fallback?: React.ReactNode
}
interface IState {
  hasError: boolean
  error: any
}

export default class ErrorBoundary extends React.Component<IProps, IState, any> {
  constructor(props) {
    super(props)
    this.state = {hasError: false, error: null}
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {error, hasError: true}
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('[Error Boundary]', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      const {fallback: Fallback} = this.props
      // You can render any custom fallback UI
      return Fallback
    }

    return this.props.children
  }
}
