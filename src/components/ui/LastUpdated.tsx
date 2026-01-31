'use client'

import React from 'react'

interface LastUpdatedProps {
  date?: Date
}

const LastUpdated = ({ date = new Date() }: LastUpdatedProps) => {
  return (
    <p className="text-sm text-muted">
      Last updated: {date.toLocaleDateString('en-IN')}
    </p>
  )
}

export default LastUpdated
