import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { TabletCanvas } from './canvas';


const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null!);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            'service_6jbw3ig',
            'template_q4wcquf',
            {
                from_name: form.name,
                to_name: 'Wilczek Dev',
                from_email: form.email,
                to_email: 'xatinot890@goflipa.com',
                //to_email: 'mykozakmail@gmail.com',
                message: form.message,

            },
            'hZ8QwAVmTtcaE6z4c'
        ).then(() => {
            setLoading(false);
            alert("Email has been send successfully");
            setForm({
                name: '',
                email: '',
                message: ''
            });
        }, (error) => {
            setLoading(false);
            console.error("Sending email action failed: ", error);
            alert('Something went wrong');
        });
    };

    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className='flex-1 bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What's your message?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                        />
                    </label>
                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='xl:h-auto md:h-[550px] h-[350px] xl:w-[45%]'
            >
                <TabletCanvas />
            </motion.div>
        </div>
    );
}

export default SectionWrapper(Contact, "contact");