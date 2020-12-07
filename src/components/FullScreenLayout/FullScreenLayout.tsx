import React, {PropsWithChildren} from 'react';

export default function FullScreenLayout({children}: PropsWithChildren<{}>) {
  return (
    <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
      {children}
    </div>
  );
}
