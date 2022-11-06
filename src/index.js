/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/// Entry point => packeg 
// main file
import ReactDOM from 'react-dom/client';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
let myDiv = document.getElementById('dom');
let rootElement =ReactDOM.createRoot( myDiv);
rootElement.render(
    <><div className='container'>
        <i className='fa fa-home fa-5x text-info '></i>
        <h1>Hello from index.js</h1>
            <App />
        </div>
</>
)

