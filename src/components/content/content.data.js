import contentDataStories from "./content.data.stories.js";

const contentData = [];

contentDataStories.forEach(function (func) {
  func().then((json) => {
    contentData.push(json);
  });
});

export default contentData;

/* https://github.com/wo-benkyou-shimasu/axistation */

/* Schema for use at https://pmk65.github.io/jedemov2/dist/demo.html
{
  "title": "Story",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "default": null
    },
    "title": {
      "type": "string",
      "default": null
    },
    
    "sentences": {
      "type": "array",
      "format": "table",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "title": "sentences",
        "properties": {
          "id": {
            "type": "integer",
            "default": null
          },
"translated": {
      "type": "string",
      "default": null
    },
          "morphs": {
            "type": "array",
            "format": "table",
            "uniqueItems": true,

            "items": {
              "type": "object",
              "title": "morphs",
              "properties": {
                "id": {
                  "type": "integer",
                  "default": null
                 },
                 "name": {
                  "type": "string",
                  "default": null
                 },
                 "kana": {
                  "type": "string",
                  "default": null
                 },
                 "romaji": {
                  "type": "string",
                  "default": null
                 },
                 "meaning": {
                  "type": "string",
                  "default": null
                 }
              }
            }
          }
        }
      }
    }
  }
}
*/
