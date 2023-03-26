const BASE_URL = 'http://api.tvmaze.com'; /**https://api.tvmaze.com/search/1 */

const apiGet = async queryString => {
  // throw new Error('something bad has happened');
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();

  return body;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = query => apiGet(`/search/people?q=${query}`);
export const getShowById = showId => apiGet(`/shows/${showId}`);
