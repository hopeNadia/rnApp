import auth from '@react-native-firebase/auth';

export const subscribeOnAuthStateChange = callback => {
  const subscriber = auth().onAuthStateChanged(authUser => {
    callback(authUser);
  });

  return subscriber;
};

export const signInWithEmailAndPassword = async (email, password) => {
  const response = await signInWithEmailAndPassword(email, password);

  return {user: response?.user?._user, token: response?.user.token};
};

export const createUserWithEmailAndPassword = async (email, password) => {
  const response = await auth().createUserWithEmailAndPassword(email, password);

  return {user: response?.user?._user, token: response?.user.token};
};

export const signOut = async () => {
  await auth().signOut();
};

export const updateUserProfile = async ({userName}) => {
  const response = await auth().currentUser.updateProfile({
    displayName: userName,
    // photoURL:
    //   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png',
  });

  return response;
};

export const getAuthCurrentUser = () => {
  const user = auth().currentUser;

  return user;
};
