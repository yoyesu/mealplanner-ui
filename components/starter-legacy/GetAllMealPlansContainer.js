import getMealplans from '../starter-legacy/customHook'
import LegacyData from './LegacyData';

export default function GetAllMealPlansContainer() {
    let url = 'https://yoyesu-mealplanner.onrender.com/mealplan';
    const { data, loadingState, error } = getMealplans(url);
    console.log("this is the results container", data);
    return (
      <div>
      {data && <LegacyData data={data} />}
      </div>
      
    )
}