import React, {useState} from 'react';

const CurrentUserContext = React.createContext({
  user: {},
  setUser: user => {},
  resetUser: () => {},
});

const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState({});

  const setUser = user => {
    setCurrentUser(user);
  };

  const resetUser = () => {
    setCurrentUser({});
  };

  const value = React.useMemo(() => ({user: currentUser, setUser, resetUser}), [
    currentUser,
  ]);
  return <CurrentUserContext.Provider value={value} {...props} />;
};

const useCurrentUser = () => {
  const context = React.useContext(CurrentUserContext);

  return context;
};

export {useCurrentUser, UserProvider};
