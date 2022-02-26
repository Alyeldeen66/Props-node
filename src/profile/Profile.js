
import  PropTypes  from "prop-types";

const myData = ({fullName="Wael Mohamed",bio="YOLO",profession="Doctor",children,handleName}) =>{
    
    return(
        <div> 
            <h2 >Hello {fullName}</h2>
            <h3>{bio}</h3>
            <h3>{profession}</h3>
            <h1 onClick={() =>handleName(fullName)}>{children}</h1> 

        </div>
    );
}
export default myData;

myData.propTypes = {
    fullName: PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string

};
