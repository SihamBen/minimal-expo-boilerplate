import { client } from './client';
export function getPosts(): Promise<any> {
  return client({
    url: `posts`,
    method: 'GET',
  }).then((response) => response.data);
}
