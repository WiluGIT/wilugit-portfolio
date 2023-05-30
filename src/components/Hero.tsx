import { motion } from 'framer-motion';
import { styles } from '../styles';
import { wolf } from "../assets";
import { SocialIcon } from '.';
import { socialIcons } from '../constants';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto flex justify-center'>
            <div className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-5 lg:flex-nowrap`}>
                <div className='flex justify-start gap-2'>
                    <div className='flex items-end mb-5'>
                        <div className='w-1 sm:h-80 h-60 rounded-full violet-gradient-reverse'></div>
                    </div>
                    <div className='flex flex-col gap-5 ml-5'>
                        <h1 className={`${styles.heroHeadText} violet-text-gradient `}>
                            Hi, I'm <span>Konrad</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            Full-stack .NET Developer
                        </p>
                        {socialIcons.map((el, index) => (
                            <SocialIcon key={index} icon={el.icon} title={el.title} link={el.link} />
                        ))}
                        <div className='flex justify-start items-center mt-5'>
                            <div className='h-1 sm:w-80 w-60 rounded-full violet-gradient-reverse'></div>
                        </div>
                    </div>
                </div>
                <img src={wolf} alt={'test'} className="w-auto h-auto object-contain" />
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