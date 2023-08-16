import Form from './components/Form'
import store from './app/store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <Provider store={store}>
      <div className='min-h-screen bg-sky-100'>
        <Form />

      </div>
    </Provider>
  )
}

export default App
