import ImagePart from "../features/secondpage/ImagePart";
import SecondBodyComp from "../features/secondpage/SecondBodyComp";
import SecondCover from "../features/secondpage/SecondCover";

function NextMulti({number, setNumber}) {
       
    return ( 
        <SecondCover>
            <ImagePart number={number}/>
            <SecondBodyComp setNumber={setNumber}/>
        </SecondCover>
    );
}

export default NextMulti;



  
                
                
            

            

            
  