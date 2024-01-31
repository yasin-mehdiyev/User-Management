import { axiosPublic } from 'src/config/axios/index';
import { UserPostsResponse } from 'src/api/posts/types';

export function getPostsByUserId(userId: number) {
  return axiosPublic<UserPostsResponse[]>({
    url: `/posts`,
    method: 'GET',
    params: { userId },
  });
}
