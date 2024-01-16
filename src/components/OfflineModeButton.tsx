import React from 'react';

import {SwitchPanel} from './SwitchPanel';

type OfflineModeButtonProps = {
  isConnected: boolean;
  toggleOfflineMode: () => void;
};
export function OfflineModeButton({
  isConnected,
  toggleOfflineMode,
}: OfflineModeButtonProps) {
  return (
    <SwitchPanel
      label="Pause Sync"
      value={!isConnected}
      onValueChange={toggleOfflineMode}
    />
  );
}
