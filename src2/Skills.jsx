import './App1.css'
import { WDicons } from './Schoolimages/Skillicons';
import { LDicons } from './Schoolimages/Skillicons';
import { Ticons } from './Schoolimages/Skillicons';
function Skills(){
    return(
        <div id="#skill" className='relative top-44 '>
            <div className='flex flex-col items-center'>
            <div className="text-7xl text-yellow-600 font-bold relative top-96">My Skills</div>

            <div>
                {}
            </div>
        </div>
        <div className='flex flex-row m-8 justify-center gap-24'>
        <div className='flex flex-col gap-4 relative top-96 my-12 p-4 bg-purple-950 rounded-2xl w-72 '>
            <div className='text-center font-bold text-3xl'>Web development</div>
        {WDicons.map((item,index)=>(
          
                <div key={index} className='flex flex-row gap-2 relative top-5'>
                    <div> {item.icon}</div>
                    <div className='relative top-1 text-2xl font-semibold'> {item.text}</div>

                    </div>
            
                
            

        ))}
        </div>
        <div className='flex flex-col gap-4 relative top-96 my-12 p-4  bg-gradient-to-r from-purple-500 to-purple-800 rounded-2xl w-72'>
        {LDicons.map((item,index)=>(
          
                <div key={index} className='flex flex-row gap-2'>
                    <div> {item.icon}</div>
                    <div className='relative top-1 text-2xl font-semibold'> {item.text}</div>

                    </div>
            
                
            

        ))}
        </div>
        <div className='flex flex-col gap-4 relative top-96 my-12 p-4  bg-purple-950 rounded-2xl w-72'>
        {Ticons.map((item,index)=>(
          
                <div key={index} className='flex flex-row gap-2'>
                    <div> {item.icon}</div>
                    <div className='relative top-1 text-2xl font-semibold'> {item.text}</div>

                    </div>
            
                
            

        ))}
        </div>
        </div>
        </div>
    );
}
export default Skills