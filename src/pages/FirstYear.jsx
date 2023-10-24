import FirstYearBody from "../features/firstyear/FirstYearBody";
import FirstYearCover from "../features/firstyear/FirstYearCover";
import ImageFirstYear from "../features/firstyear/ImageFirstYear";


function FirstYear({number, setNumber}) {
    


    return ( 
       <FirstYearCover>
            <ImageFirstYear number={number} />
            <FirstYearBody setNumber={setNumber} />              
       </FirstYearCover>

    );
}
 
export default FirstYear;