import {useSelector} from 'react-redux'

function About() {
    const countGlobalValue = useSelector(state=>state.counterStore.counter);
    return (  
        <div className='w-100 text-danger text-center mt-5 h1'>COUNTER: {countGlobalValue}</div>
    );
}

export default About;