import { axiosPublic } from 'src/config/axios/index';
import { UserAlbumsResponse } from 'src/api/albums/types';

export function getAlbumsByUserId(userId: number) {
  return axiosPublic<UserAlbumsResponse[]>({
    url: `/albums`,
    method: 'GET',
    params: { userId },
  });
}
