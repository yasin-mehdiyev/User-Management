import { axiosPublic } from 'src/config/axios/index';
import { UserResponse } from 'src/api/users/types';

export function getAllUsers() {
  return axiosPublic<UserResponse[]>({
    url: `/users`,
    method: 'GET',
  });
}
