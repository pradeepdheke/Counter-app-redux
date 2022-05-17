
import './App.css';
import { Form } from './component/form/Form';
import { Container } from './component/tableContainer/Container';


const App = () => {
  // const [count, setCount] = useState(0);
// const increaseCount = () => {
  // setCount(count+1);
// };

// const decreaseCount = () => {
  // setCount(count-1);
// };

  return (
    <div className=''>
      <h1>Counter app without redux</h1>
      <Container/>

      <Form />
    </div>
  )

};


export default App;