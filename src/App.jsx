import { useSelector, useDispatch } from 'react-redux'
import { add, remove, reset } from './react/slice/slice'
import './App.css'

 function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <button label='add' onClick={() => dispatch(add())}>
        Add
      </button>
      <span>{count}</span>
      <button label='remove' onClick={() => dispatch(remove())}>
        Remove
      </button>
      <button label='reset' onClick={() => dispatch(reset())}>
        Reset
      </button>
    </>
  )
}
export default App