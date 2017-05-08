var React = require('react');
var ReactDOM = require('react-dom');

const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });
      return state.concat([newCard]);
    default:
      return state || [];
  }
};

const store = Redux.createStore(Redux.combineReducers({
  cards: cards
}));

const App = (props) => {
  return (
    <div>
    </div>);

};

ReactDOM.render(< App />, document.getElementById('root'));
