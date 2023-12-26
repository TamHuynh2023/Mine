import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>huynh minh tam</h2>
            <p>tran ngoc yen</p>
            <ul>
                <li>game</li>
                <li>caphe</li>
                <li>sleep</li>
            </ul>
        </div>
    )
}

// Render component App vào #root element
// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

