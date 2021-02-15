/**
 * ! input box handling
 * ? we can catch every checkBox by their name attr than we add a listener in every check box by forEach() method...in forEach method we check checked property and if checked is true we push this checked box's value in a array...if false we remove value by their indexNumber and push it again 
 */
const skills = document.getElementsByName('skills')
const selectedSkill = document.getElementById('selected-skill')
const skillsArray = [];

// ? change event works when checkbox is change
// * e.target.checked-->:bool , check is the box is checked
[...skills].forEach(skill => {
    skill.addEventListener('change', function (e) {
        // console.log(e.target.checked)
        if (e.target.checked) {
            skillsArray.push(e.target.value)
            outputSkills(selectedSkill, skillsArray)
        } else {
            let index = skillsArray.indexOf(e.target.value)
            skillsArray.splice(index, 1)
            outputSkills(selectedSkill, skillsArray)
        }
    })
})

function outputSkills(parent, selectedSkillsArray) {
    let result = ''
    selectedSkillsArray.forEach((skill, index) => {
        result += `(${index + 1}) ${skill}  `
    })
    parent.innerHTML = result
}