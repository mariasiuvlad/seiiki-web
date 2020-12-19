import React from 'react'

interface IProps {
  message?: string
}
interface IState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<
  IProps,
  IState,
  any
> {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true}
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('[Error Boundary]', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>{this.props.message ?? 'Something went wrong.'}</h1>
    }

    return this.props.children
  }
}
