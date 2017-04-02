export function getPosts() {
  return fetch('https://www.reddit.com/r/getmotivated.json')
    .then(response => response.json())
    .then(json => {
      //console.log(json);
      let posts = json.data.children.map(child => child.data);
      let preview = posts.map(child => child.preview)
        .filter(child => {
          return child !== undefined;
        });
      let images = preview.map(child => child.images[0].source.url);
      //console.log(posts);
      //console.log(preview);
      //console.log(images);
      return {
        type: 'REDDIT_UPDATE',
        payload: images 
      }
    })
} 
