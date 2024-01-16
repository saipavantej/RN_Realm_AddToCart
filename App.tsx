import {AppProvider, RealmProvider, UserProvider} from '@realm/react';
import React from 'react';
import {Task} from './src/models/Task';
import {schemas} from './src/models/';
import {OpenRealmBehaviorType} from 'realm';
import {LoginScreen} from './src/screens/LoginScreen';
import {TaskScreenSync} from './src/screens/TaskScreenSync';
function App(): React.JSX.Element {
  return (
    <AppProvider id={'application-0-ureau'}>
      <UserProvider fallback={<LoginScreen />}>
        <RealmProvider
          schema={schemas}
          sync={{
            flexible: true,
            initialSubscriptions: {
              update: (mutableSubs, realm) =>
                mutableSubs.add(realm.objects(Task), {name: 'myTasks'}),
            },
            newRealmFileBehavior: {
              type: OpenRealmBehaviorType.DownloadBeforeOpen,
            },
            existingRealmFileBehavior: {
              type: OpenRealmBehaviorType.OpenImmediately,
            },
          }}>
          <TaskScreenSync />
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}

export default App;
