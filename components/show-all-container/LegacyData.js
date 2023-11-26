import React from 'react';

export default function LegacyData({data}) {

  const {mealplan} = data;
  console.log("LOGGGGGG")
  console.log(mealplan)
//  const convertSkillsArrayToString = (index) => {
//    let newArray = [];
//    sims[index].skillsToMaster.map((skill) => {
//      newArray.push(skill.name);
//    });
//      return newArray.join(", ");
//  };
  return (
  
    <div className='results-container'>
      <p>Plans ({mealplan.length}): <span className='randomized-results'>{mealplan}</span></p>

    </div>
    
  );
};