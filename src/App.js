import './App.css';
import QuoteBox from './components/quote-box.component';
import {connect} from 'react-redux'


const App = ({page}) => {
  const {currentColor} = page;
  return (
    <div style={currentColor} className='container'>
      <QuoteBox />
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    page: state.page
  }
}

export default connect(mapStateToProps)(App);
