import ImageComp from '../features/firstpage/ImageComp';
import FirstBodyComp from '../features/firstpage/FirstBodyComp';
import FirstCover from '../features/firstpage/FirstCover';



export default function BodyMulti ({ number, setNumber}) {
    
    return (
        <div> 
            <FirstCover>
                <ImageComp number={number}/>
                <FirstBodyComp setNumber={setNumber}/>
            </FirstCover>  
       
        </div> 
    );
}
 