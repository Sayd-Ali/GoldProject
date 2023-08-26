import { render } from "react-dom";
import  { Counter } from './components';

render(
    <div>
        <Counter />
    </div>,
    document.getElementById('root')
)