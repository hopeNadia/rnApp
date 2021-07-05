import {useEffect, useCallback} from 'react';

import {subscribeOnAuthStateChange} from '../../servicies/authentication';
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
    const subscriber = subscribeOnAuthStateChange(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  return null;
};

export default AuthEvents;
