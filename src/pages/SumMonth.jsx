import SumMonthBody from "../features/summonth/SumMonthBody";
import ImageSumMonth from "../features/summonth/ImageSumMonth";
import SumMonthCover from "../features/summonth/SumMonthCover";



function SumMonth({number, setNumber}) {
  

    return ( 
        <SumMonthCover>
            <ImageSumMonth number={number} />
            <SumMonthBody setNumber={setNumber}/>
        </SumMonthCover>
            
    );
    
}

export default SumMonth;