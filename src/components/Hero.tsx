import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, linkedin, wolf } from "../assets";
import { Tilt } from 'react-tilt';
import { fadeIn } from '../utils/motion';
import { SocialIcon } from '.';
import { socialIcons } from '../constants';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto flex justify-center'>
            <div className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5`}>
                <div className='flex justify-start items-start gap-5'>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
                        <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
                    </div>
                    <div className='flex flex-col gap-5 ml-5'>
                        <h1 className={`${styles.heroHeadText} violet-text-gradient `}>
                            Hi, I'm <span>Konrad</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            Full-stack .NET Developer
                        </p>
                        {socialIcons.map((el, index) => (
                            <SocialIcon icon={el.icon} title={el.title} link={el.link} />
                        ))}
                    </div>
                </div>
                <img src={wolf} alt={'test'} className="w-max h-max object-contain" />
            </div>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};


export default Hero;