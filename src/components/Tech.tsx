import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.slice(0, 14).map((technology) => (
                <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
                    <span>{technology.name}</span>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
            <span>
                {technologies.slice(14).map(function (elem) {
                    return elem.name;
                }).join(", ")}...
            </span>
        </div>
    );
}

export default SectionWrapper(Tech, "");