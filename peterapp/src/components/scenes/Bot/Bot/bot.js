import React, { Component } from 'react' ;
import { connect } from 'react-redux';
import { sendMessage } from './chat';
import Navbar from "../../Navbar/Navbar";


// const Bot = props => {
//   const {feed, sendMessage} = props;
//   console.log(feed)
//   return (
//     <div>
//       <h1>Hello Bot!</h1>
//       <ul>
//   {feed.map( entry => <li >{entry.text}</li>) }
//       </ul>
//       <input type="text" onKeyDown={(e)=> e.keyCode === 13 ? sendMessage(e.target.value) : null}/>
//     </div>
//     );
// }

class Bot extends Component {
  render() {
    
    const {feed, sendMessage} = this.props;
    console.log(feed)
    return (
      <div className="chatbot">
        <Navbar />
    <div >
      <h1>Привет, я чат бот</h1>
      <ul>
      { feed.map( entry => <li>{entry.text}</li>) }
      </ul>
      <input type="text" onKeyDown={(e)=> e.keyCode === 13 ? sendMessage(e.target.value) : null}/>
    </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  feed: state
});

export default connect(mapStateToProps,{
   sendMessage
  })(Bot); 
