import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { certificates } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

type ServiceCardPropsType = {
    index: number;
    title: string;
    subtitle: string;
    icon: string;
}

const ServiceCard = ({ index, title, subtitle, icon }: ServiceCardPropsType) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    className="bg-tertiary rounded-[20px] py-5 px-3 min-h-[400px] gap-5 flex justify-start items-center flex-col">
                    <img src={icon} alt={title} className="w-[200px] h-[200px] object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                    <span className="text-white text-[16px] font-bold text-center">{subtitle}</span>
                </div>
            </motion.div>
        </Tilt>
    );
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant(0.1)}>
                <p className={styles.sectionSubText}>Overview</p>
                <h2 className={styles.sectionHeadText}>Technology stack & <br />Certificates</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm a full-stack .NET developer with over 3 years of experience. Down below you can see my technology stack and obtained certificates.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10 justify-center">
                {certificates.map((certificate, index) => (
                    <ServiceCard key={certificate.title} index={index} {...certificate} />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(About, "about");