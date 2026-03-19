import React, { Component, ErrorInfo, ReactNode } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  isChunkError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    isChunkError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Check if it's a chunk load error (common when internet is lost during navigation)
    const isChunkError = error.name === 'ChunkLoadError' || 
                        error.message.includes('Loading chunk') ||
                        error.message.includes('Failed to fetch dynamically imported module');
    
    return { hasError: true, isChunkError };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.state.isChunkError) {
        return (
          <LoadingSpinner 
            message="Connection Lost. Please check your internet and try again." 
          />
        );
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-surface p-4 text-center">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Something went wrong</h2>
            <p className="text-text-secondary mb-6">We encountered an unexpected error. Please try refreshing the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
