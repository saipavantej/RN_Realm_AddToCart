import {AppProvider, RealmProvider, UserProvider} from '@realm/react';
import React from 'react';
import {schemas} from './src/models/';
import {OpenRealmBehaviorType} from 'realm';
import {LoginScreen} from './src/screens/LoginScreen';
import {TaskScreenSync} from './src/screens/TaskScreenSync';
import {Items} from './src/models/Items';
import {Cart} from './src/models/Cart';
function App(): React.JSX.Element {
  return (
    <AppProvider id={'application-0-rbwwp'}>
      <UserProvider fallback={<LoginScreen />}>
        <RealmProvider
          schema={schemas}
          sync={{
            flexible: true,
            initialSubscriptions: {
              update: (mutableSubs, realm) => {
                mutableSubs.add(realm.objects(Items), {
                  name: 'allItems',
                });
                mutableSubs.add(realm.objects(Cart), {
                  name: 'myCart',
                });
              },
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
