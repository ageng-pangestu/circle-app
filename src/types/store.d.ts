//state
export interface IStoreState {
  user: IUser;
  isLogin: boolean;
}

//action
export interface IStoreAction {
  setUser: (user: IUser) => void;
  clearUser: () => void;
}

export interface IUser {
  id: string;
  userName: string;
  fullName: string;
  email: string;
  bio?: string;
  profile_pic?: string;
  banner?: string;
}

// export interface IProfile {
//   avatar: String;
//   banner: String;
// }

export type TStore = IStoreState & IStoreAction;
