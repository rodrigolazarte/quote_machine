import React from 'react';
import {connect} from 'react-redux';
import './quote-box.styles.scss';
import {changeQuote} from '../redux/quote-machine/quote-machine.actions';
import Button from '@material-ui/core/Button';
import {changeBackgroundColor} from '../redux/background-page/background-page.actions';
import {pickRandomProperty} from '../utils/functions';

const QuoteBox = ({listOfQuotes, changeQuote, changeBackgroundColor, listOfColors}) => {
    const {currentQuote, quotes} = listOfQuotes;
    const {colors} = listOfColors;
    return(
        <div className='quote-box'>
            <div className='quote-text'>
                {
                    quotes.map(quote =>
                        quote.id === currentQuote ? <p>"{quote.text}"</p>: <p></p>
                        )
                }
            </div>
            <div className='author-text'>
                {
                    quotes.map(quote =>
                        quote.id == currentQuote ? <p>{quote.author}</p>: <p></p>)
                }
            </div>
            <Button variant='contained' color='primary' className='change-button'
            onClick={() => {
                var num = Math.floor((Math.random() * (16-1))+1);
                while (num === currentQuote){
                    var num = Math.floor((Math.random() * (16-1))+1);
                } 
                changeQuote(num);
                changeBackgroundColor(pickRandomProperty(colors))}}>
                Change!
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        listOfQuotes: state.quote,
        listOfColors: state.page
    }
}

const mapDispatchToProps = dispatch => ({
    changeQuote: nextQuote => dispatch(changeQuote(nextQuote)),
    changeBackgroundColor: nextColor => dispatch(changeBackgroundColor(nextColor))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);