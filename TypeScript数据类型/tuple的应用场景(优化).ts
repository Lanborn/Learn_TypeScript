// hook: useState
// const [counter, setCounter] = useState(10);

function useState<T>(state: T) {
    let currentState = state

    const changeState = (newState: T) => {
        currentState = newState;
    }

    const tuple: [T, (newState: T) => void ] = [currentState, changeState];
    
    return tuple;
}

const [counter, setCounter] = useState(19);
setCounter(200)

const [title, setTitle] = useState("abc"); 

// type MyFunction = () => void

// const foo : MyFunction = () => {}