import useAxiosOriginal from "axios-hooks";
import useAuthContext from "./useAuthContext";

// Simple version of useAxios with auth token
const useAxios = <T>(url: string, options?: any) => {
  const { token } = useAuthContext();

  const headers = {
    Authorization: token ? `Bearer ${token}` : undefined,
    ...options?.headers,
  };

  const axios = useAxiosOriginal<T>({
    url,
    headers,
    ...options,
  });

  return axios;
};

export default useAxios;
