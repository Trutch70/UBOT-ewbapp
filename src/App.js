import Header from './components/Layout/Header';
import MainPage from './components/MainPage/MainPage';
import './index.css';

function App() {
    let content = <MainPage/>;

    return (
        <>
            <Header/>
            {content}
        </>
    );
}

export default App;
