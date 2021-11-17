function train() {
  return fetch(
    'https://axistation.github.io/mainichome-data/content.data.stories/train.json'
  ).then((response) => response.json());
}

const contentDataStories = [];
contentDataStories.push(train);

export default contentDataStories;
