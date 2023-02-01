import classes from "./HeaderSection.module.css"
import mockup from "./../../../assets/images/illustration-mockups.svg"

const HeaderSection=()=>{
return (<div className={classes.section}>

<div className={classes.sectionContent}>
    <h1>Build the Community Your Fans Will Love</h1>
    <p>Huddle re-imagines the way we build communities. You have a voice, so does your audience. Create connection with your audience as you interact with them.</p>
    <button>Get Started for Free</button>
</div> 
<div className={classes.imgContainer}>
    <img src={mockup} alt="mockup" className={classes.sectionImg}></img>
    </div>

</div>)
};

export default HeaderSection;