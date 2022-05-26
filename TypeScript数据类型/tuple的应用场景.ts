// hook: useState
// const [counter, setCounter] = useState(10);

function useState(state: any) {
    let currentState = state

    const changeState = (newState: any) => {
        currentState = newState;
    }

    const tuple: [any, (newState: any) => void ] = [currentState, changeState];
    
    return tuple;
}

const [counter, setCounter] = useState(19);
setCounter(200)

const [title, setTitle] = useState("abc"); 


export {}