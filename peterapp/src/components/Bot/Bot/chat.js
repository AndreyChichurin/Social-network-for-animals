// import {ApiAiClient} from 'api-ai-javascript';
// import {applyMiddleware, createStore} from 'redux';

// const accessToken= 'c1812075dd8643e5aebf3791ec598fb0';
// const client = new ApiAiClient({accessToken});

// const ON_MESSAGE = 'ON_MESSAGE';

// export const sendMessage = (text, sender='user') => ({
//   type: ON_MESSAGE,
//   payload: { text, sender},
 
// });

// const messageMiddleware = () => next => action => {
//   next(action);
  
//   if(action.type === ON_MESSAGE) {
//     const { text } = action.payload;
//       client.textRequest(text)
//         .text( onSuccess)

//       function onSuccess(response) {
//         const { result: { fulfillment}} = response ;
//         next(sendMessage(fulfillment.speach, 'bot'));
//       }
//     }
// };



// export const store = createStore(messageReducer, applyMiddleware(messageMiddleware));
