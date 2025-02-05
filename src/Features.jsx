import'./App.css'
import { FeatureItems } from '../public/Images';
function Features(){
    return(
        <div>
            <div className="flex flex-col flex-wrap items-center relative top-48">
                <p className="text-orange-700 font-bold text-2xl">Feature</p>
                <p className='text-5xl relative top-4'>Easily build your code</p>
                </div>
                <div className="flex flex-wrap mt-10 relative top-40 lg:mt-20">
        {FeatureItems.map((FeatureItems, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {FeatureItems.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{FeatureItems.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {FeatureItems.description}
                </p>
              </div>
            </div>
          </div>
           ))}
           </div>
           </div>
                
            
    );
}
export default Features