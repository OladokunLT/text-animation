let mainContainerEl = document.querySelector(".main-container");

let skills = ["Architect", "Web developer", "Web designer", "Instructor"];

let skill_index = 0;
let char_index = 0;
let article = "";

setInterval(updateDom, 1000);

function updateDom() {
  char_index++;

  console.log(char_index);
  mainContainerEl.innerHTML = `
<h1>Hi, I'm ${article} ${skills[skill_index].slice(0, char_index)} </h1>
`;

  if (skills[skill_index].length === char_index) {
    char_index = 0;
    skill_index++;
  }

  if (skill_index === skills.length) {
    skill_index = 0;
  }

  article = "AEIOU".includes(skills[skill_index].charAt(0)) ? "an" : "a";
}
