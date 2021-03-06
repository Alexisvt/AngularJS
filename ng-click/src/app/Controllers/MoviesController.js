export class MoviesController {
  constructor() {
    this.likesList = [];
    this.favorites = [
      {
        title: 'The Shawshank Redemption',
        year: '1994',
      },
      {
        title: 'Inception',
        year: '2010',
      },
      {
        title: 'The Matrix',
        year: '1999',
      },
      {
        title: 'Saving Private Ryan',
        year: '1998',
      },
    ];
  }

  addToLikes(movie) {
    this.likesList.push(movie);
  }

  unlike(index) {
    this.likesList.splice(index, 1);
  }
}
