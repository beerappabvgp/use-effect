import { useRef } from 'react'
import Counter from './components/Counter';
import Effect from './components/Effect';


function App() {
	const ref = useRef(0);
	const inputRef = useRef();
	const handleClick = () => {
		ref.current = ref.current + 1;
		console.log(ref.current);
	}
	const handleChange = () => {
		console.log(inputRef.current);
		inputRef.current;
	}

	const handleFocus = () => {
		inputRef.current.focus();
	}

	return (
		<div>
			{/* <h1>{ref.current}</h1>
			<button onClick={handleClick}>Increment</button>
			<h1>-------------==========================------------------------</h1>
			<Counter />
			<input type="text" placeholder='Type something ... ' ref = {inputRef} onChange={handleChange}/>
			<button onClick={handleFocus}>Focus</button> */}
			<Effect />
		</div>
	);
}
export default App
