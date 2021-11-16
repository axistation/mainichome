function sentencesOfTheDay() {
  return fetch(
    'https://axistation.github.io/mainichome-data/content.data.stories/sentences-of-the-day.json'
  ).then((response) => response.json());
}

function train() {
  return fetch(
    'https://axistation.github.io/mainichome-data/content.data.stories/train.json'
  ).then((response) => response.json());
}

// const sentencesOfTheDay = {
//   title: "sentences-of-the-day",
//   url:
//     "https://axistation.github.io/mainichome-data/content.data.stories/sentences-of-the-day.json"
// };
// const train = {
//   title: "train",
//   url:
//     "https://axistation.github.io/mainichome-data/content.data.stories/train.json"
// };

// const train = () =>
//   fetch(
//     "https://axistation.github.io/mainichome-data/content.data.stories/train.json"
//   ).then((response) => response.json());

const contentDataStories = [];
contentDataStories.push(sentencesOfTheDay);
contentDataStories.push(train);

export default contentDataStories;
