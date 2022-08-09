const KEY = '28193181-1d0a0826250053d79f38b5461';

export class API {
  async fetchImgs(value) {
    const response = await fetch(
      `https://pixabay.com/api/?q=${value}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`
    );
    if (!response.ok) {
      throw new Error(`could not fetch , ${response.status}`);
    }
    return response.json();
  }
}
