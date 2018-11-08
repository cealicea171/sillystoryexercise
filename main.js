let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
} // varaiable created with string
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
//Store the first set of three strings inside an array
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {

  //Create a new variable called newStory, and set it's value to equal storyText.
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  console.log(newStory.replace(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem));
  //.replace method takes 2 arguments

  if (customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
    // if block, add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable. In this block we are saying "If a value has been entered into the customName text input, replace Bob in the story with that custom name."

  }

  if (document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14);
    let temperature = Math.round((94 - 32) * 5 / 9);
    //Just under the two variable definitions, add two more string replacement lines that replace '94 fahrenheit' with the contents of the temperature variable, and '300 pounds' with the contents of the weight variable.
    newStory = newStory.replace('94 fahrenheit', temperature + "centigrade");
    //and '300 pounds' with the contents of the weight variable.
    //cacatanate or whatever
    newStory = newStory.replace('300 pounds', weight + "stones");
  }
  // make the textContent property of the story variable (which references the paragraph) equal to newStory.
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
