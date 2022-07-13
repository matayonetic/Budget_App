import authReducer from "../../reducers/authReducer";

// Setup Default Auth State
test("Should setup default auth state", () => {
  const result = authReducer(undefined, { type: "@@INIT" });
  expect(result).toEqual({});
});

// Login
test("Should set uid during login", () => {
  const state = authReducer({}, {
    type: "LOGIN",
    uid: "abc123",
  });
  expect(state.uid).toBe(action.uid);
});

// Logout
test("Should clear uid during logout", () => {
  const state = authReducer({uid: "abc123"}, {
    type: "LOGOUT",    
  });
  expect(state).toEqual({});
});
