function train() {
  return fetch(
    'https://axistation.github.io/mainichome-data/content.data.stories/電車 - Train.json'
  ).then((response) => response.json());
}

function theNorthWindAndTheSun() {
  return fetch(
    'https://axistation.github.io/mainichome-data/content.data.stories/北風と太陽 - The North Wind and the Sun.json'
  ).then((response) => response.json());
}

const contentDataStories = [];
contentDataStories.push(train);
contentDataStories.push(theNorthWindAndTheSun);

export default contentDataStories;
