import SumYearBody from "../features/sumyear/SumYearBody";
import ImageSumYear from "../features/sumyear/ImageSumYear";
import SumYearCover from "../features/sumyear/SumYearCover";


function SumYear({number, setNumber}) {
  

    return ( 
        <SumYearCover>
            <ImageSumYear number={number} />
            <SumYearBody setNumber={setNumber} />
        </SumYearCover>
         
    );
    
}

export default SumYear;