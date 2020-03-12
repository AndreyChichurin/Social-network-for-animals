import {ApiAiClient} from 'api-ai-javascript';
import {applyMiddleware, createStore} from 'redux';

const accessToken= 'c1812075dd8643e5aebf3791ec598fb0';
const client = new ApiAiClient({accessToken});

console.log(client)

const ON_MESSAGE = 'ON_MESSAGE';

export const sendMessage = (text, sender='user') => ({
  type: ON_MESSAGE,
  payload: { text, sender},
 
});

const messageMiddleware = () => next => action => {
  next(action);
  
  if(action.type === ON_MESSAGE) {
    const { text } = action.payload;
      client.textRequest(text)
        .then( onSuccess)

      function onSuccess(response) {
        // const { result: { fulfillment}} = response ;
        next(sendMessage(response.result.fulfillment.speech, 'bot'));
      }
    }
};

const initState =[{text:'Привет!'}];
const messageReducer=(state=initState,action)=>{
  switch(action.type){
    case ON_MESSAGE:
      return [...state,action.payload]
      default:
        return state
  }
}

export const store = createStore(messageReducer, applyMiddleware(messageMiddleware));
