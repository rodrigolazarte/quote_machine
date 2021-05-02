import React, {useState} from 'react';
import {connect} from 'react-redux';
import './quote-box.styles.scss';
import {changeQuote} from '../redux/quote-machine/quote-machine.actions';
import Button from '@material-ui/core/Button';
import {changeBackgroundColor} from '../redux/background-page/background-page.actions';
import {pickRandomColor, generateRandomNumber} from '../utils/functions';
import TwitterIcon from '@material-ui/icons/Twitter';
import {tweetUrl} from '../utils/functions'

const QuoteBox = ({listOfQuotes, changeQuote, changeBackgroundColor, listOfColors}) => {
    const {currentQuote, quotes} = listOfQuotes;
    const {colors} = listOfColors;
    const [completeQuote, setCompleteQuote] = useState({id:1, text: "No hay que ir para atrás ni para darse impulso", author: "Lao Tsé"});

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
                        quote.id === currentQuote ? <p><b>{quote.author}</b></p>: <p></p>)
                }
            </div>
            <Button variant='contained' color='primary' className='change-button'
            onClick={() => {
                var num = generateRandomNumber(currentQuote)
                changeQuote(num);
                var shareQuote = quotes.find(quote => quote.id === num);
                setCompleteQuote(shareQuote);
                changeBackgroundColor(pickRandomColor())}}>
                Cambia!
            </Button>
            <Button variant='contained' color='secondary' className='share-button' href={`${tweetUrl(completeQuote)}`} target="_blank">
            <TwitterIcon className='share-icon'></TwitterIcon>
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