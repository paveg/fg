import * as React from 'react';

type Props = {
  children?: React.ReactNode
}

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>{children}</>
  )
}
