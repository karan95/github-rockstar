import { resolve } from './utils';

export const getTopRepositories = async () => {
  return await resolve(fetch('https://api.github.com/search/repositories?sort=stars&order=desc&q=created:2020-12&per_page=5').then(res => res.json()));
}
