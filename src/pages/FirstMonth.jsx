import FirstMonthBody from "../features/firstmonth/FirstMonthBody";
import FirstMonthCover from "../features/firstmonth/FirstMonthCover";
import ImageFirstMonth from "../features/firstmonth/ImageFirstMonth";


function FirstMonth({number, setNumber}) {


    return (
        <FirstMonthCover>
            <ImageFirstMonth number={number}/>
            <FirstMonthBody setNumber={setNumber}/>
        </FirstMonthCover> 
                 
    );
}
 
export default FirstMonth;