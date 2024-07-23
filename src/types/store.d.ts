export interface IStoreState {
  user: IUser;
  isLogin: boolean;
}
export interface IStoreAction {
  setUser: (user: IUser) => void;
  clearUser: () => void;
}

export interface IUser {
  profile?: Iprofile;
  userName: String;
  email: String;
  fullName: String;
}

export interface IProfile {
  avatar: String;
  banner: String;
  bio: string;
}

export type TStore = IStoreState & IStoreAction;
