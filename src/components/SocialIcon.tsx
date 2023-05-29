type SocialIconPropsType = {
    icon: string;
    title: string;
    link: string;
};

const SocialIcon = ({ icon, title, link }: SocialIconPropsType) => {

    return (
        <a href={link} target="_blank" className="w-[60px] h-[60px] inline-block float-left mx-1 violet-gradient rounded-[50px] overflow-hidden shadow-lg transition-all hover:w-[200px]">
            <div className="flex w-[60px] h-[60px] rounded-[50px] box-border leading-[60px] transition-all duration-[5000ms]">
                <img src={icon} alt={title} className="w-[60px] h-[60px] object-contain leading-[60px]" />
                <span className="text-xl leading-[60px] ml-3 font-medium">{title}</span>
            </div>
        </a>
    );
}

export default SocialIcon;