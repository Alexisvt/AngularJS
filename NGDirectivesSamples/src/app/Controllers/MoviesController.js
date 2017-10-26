export class MoviesController {
  constructor() {
    this.favorities = [
      {
        title: 'Movie 1',
        year: '1994',
        popular: true,
        category: 'fantasy',
      },
      {
        title: 'Movie 2',
        year: '1996',
        popular: true,
        category: 'action',
      },
      {
        title: 'Movie 3',
        year: '2010',
        popular: false,
        category: 'thriller',
      },
      {
        title: 'Movie 4',
        year: '1994',
        popular: true,
        category: 'thriller',
      },
      {
        title: 'Movie 5',
        year: '1994',
        popular: true,
        category: 'none',
      },
    ];
  }
}
