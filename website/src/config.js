export default {
  baseUrl: 'https://podcasts.search.windows.net/indexes/podcasts/docs?api-version=2017-11-11&$count=true&$top={maxResults}&queryType=full&search={searchTerm}', // note, appending a ~1 to the search term will enable fuzzy searching...but I don't recommend it
  maxResults: 200,
  apiKey: '18EA821D408444FCF3DC3EC4F3790FEC',
  corsProxy: 'https://cors-anywhere.herokuapp.com/',
  playbackRates: [1, 1.25, 1.5, 1.75, 2]
}
