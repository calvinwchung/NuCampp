import AboutOne from "../components/AboutOne";
import AboutTwo from "../components/AboutTwo";
import AboutThree from "../components/AboutThree";
import TextBox from "../components/TextBox";
import TextBox2 from "../components/TextBox2";
import TextBox3 from "../components/TextBox3";
import TextBoxMartin from '../components/TextBoxMartin';

const AboutPage = () => {
    const content = 'content can go here or come from an API or come from another component as a prop';
    return (
        <div>
            <AboutOne />
            <TextBox />
            <TextBoxMartin title='title goes here' content={content}/>
            <AboutTwo />
            <TextBox2 />
            <AboutThree />
            <TextBox3 />
        </div>
    )
};

export default AboutPage;