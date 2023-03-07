import { UserCredential } from "firebase/auth";
import { create } from "zustand";
import { Maybe } from "../types";

interface AuthState {
  token: Maybe<string>;
  user: Maybe<UserCredential["user"]>;
  setToken: (token: Maybe<string>) => void;
  setUser: (user: Maybe<UserCredential["user"]>) => void;
}

const useAuth = create<AuthState>((set) => ({
  token: null,
  user: null,
  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
}));

export default useAuth;
