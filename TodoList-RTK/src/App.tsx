import Form from './components/Form'
import store from './app/store'
import { Provider } from 'react-redux'
import TodoWrapper from './components/TodoWrapper'
const App = () => {
  return (
    <Provider store={store}>
      <div className='min-h-screen bg-sky-200/80'>
        <Form />
        <TodoWrapper/>

      </div>
    </Provider>
  )
}

export default App
