import Header from './components/Layout/Header/Header';
import './index.css';
import Footer from './components/Layout/Footer/Footer';

const App = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
}

export default App;
