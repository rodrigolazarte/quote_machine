import './App.css';
import QuoteBox from './components/quote-box.component';
import {connect} from 'react-redux'


const App = ({page}) => {
  const {currentColor, colors} = page;
  const nextColor = colors[currentColor]
  return (
    <div style={nextColor} className='container'>
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
