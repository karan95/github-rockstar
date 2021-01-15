import { resolve } from './utils';

export const getTopUsers = async () => {
  return await resolve(fetch('https://api.github.com/search/users?sort=followers&order=desc&q=created:2020&per_page=5').then(res => res.json()));
}

/**
 * 
 * @param {*} userId 
 */
export const getFollowersOfUser = async (userId) => {
  return await resolve(fetch(`https://api.github.com/users/${userId}`).then(res => res.json()));
}
