import { auth, Auth, googleAuthProvider } from "../firebase/firebase";

// Login
export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

// Start SignIn
export const startLogin = () => {
  return () => {
    return Auth.signInWithPopup(auth, googleAuthProvider)
      .then((result) => {})
      .catch((error) => {});
  };
};

// Logout
export const logout = () => ({
  type: "LOGOUT",
});

// Start SignOut
export const startLogout = () => {
  return () => {
    return Auth.signOut(auth, googleAuthProvider);
  };
};
