import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App | a092devs</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = ' by a092devs'

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click here to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // MyApp()
    // <MyApp />
    // ReactElement
    anotherElement
    // reactElement
    // <App />
)