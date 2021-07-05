import auth from '@react-native-firebase/auth';
import {useEffect, useCallback} from 'react';

import {useCurrentUser} from '../../user';

const AuthEvents = () => {
  const {setUser} = useCurrentUser();

  const onAuthStateChanged = useCallback(
    authUser => {
      setUser(authUser);
    },
    [setUser],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  return null;
};

export default AuthEvents;
