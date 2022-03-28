import React from 'react';
import './Answers.css';

const Answers = () => {
    return (
        <div className='answers'>
            <div>
               <h3>How react works?</h3>
               <p>Ans: React is a javascript library which is creates user interface in a efficient way by using declarative code.React using JSX,Props,Components,useState and useEffect method to create single page applications or mobile apps.When react works it's create a copy of browser DOM by using Diff algorithm for better performance which is called virtual DOM.If users changes or update anything reacts go to virtual DOM and check which elements are changed then it's finally update the UI.Besides, react have many others working method to build  applications in better way with better performance.   </p>
            </div>
            <div>
                <h3>Difference between props vs state?</h3>
                <p>Ans: Both props and state are used to control data in a component. State is internal and controlled by component but props are external and controlled by whatever renders the component.   Props are read only but state changes can be asynchronously.State can be modified by using this.setState method but props can not be modified.</p>
            </div>
        </div>
    );
};

export default Answers;