export interface AuthContextProps {
  token?: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  isAuthenticated: () => boolean;
  logout: VoidFunction;
  login: (token: string) => void;
}
