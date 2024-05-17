
import "./cycleSkills.css";

const CycleSkills = ({ label, image }) => {
    return (
        <div className="cycle-card-container bg-amber-600">
            <img src={image} alt="" />
            <span>{label}</span>
        </div>
    );
};

export default CycleSkills;
