import React from "react";

import './NewGoal.css'

const NewGoal =  (props) => {

    const handleSubmit = (e) => {
     e.preventDefault();

     const newGoal = {
        id: Math.random().toString(),
        text:"My New Goal"
     }
    
     props.onAddGoal(newGoal);

    };

     return <form onSubmit={handleSubmit} className="new-goal">
        <input type="text"/>
        <button type="submit">Add Goal</button>
     </form>
};

export default NewGoal;