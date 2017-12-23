
import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Icon, Segment, Header, Comment, Form } from 'semantic-ui-react'

class MunityChat extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    input: ''
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = () => {
    this.props.sendMessage(this.state.input)
  }

  render() {
    return (
    <div style={{height: '100%', width: '100%'}}>
    <Header style={{width: '100%'}} as='h3'>{this.props.communityName}</Header>
     <Segment basic floated style={{width: '100%', height: '100%', top: '-100px', padding: '100px 0 0 0'}}>
     <Comment.Group style={{height: '100%', width: '100%', overflowY: 'scroll', maxWidth: 'none'}}>

       {this.props.messages.map(message => (
        <Comment>
         <Comment.Content>
           <Comment.Author>{message.username}</Comment.Author>
           <Comment.Metadata>
             <div>1 day ago</div>
           </Comment.Metadata>
           <Comment.Text>
             <p>{message.message}</p>
           </Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       ))}

     </Comment.Group>
     <Form>
     <Form.Input
         disabled={!this.props.token}
         style={{width: '100%'}}
         action={{ color: 'red', labelPosition: 'right', icon: 'copy', content: 'Send', onClick: (e) => { this.handleSubmit() } }}
         placeholder='Send a message...'
         onChange={ (e) => this.handleInputChange(e) }
       />
    </Form>
   </Segment>
   </div>
    )
  }
}

MunityChat.propTypes = {

}

export default MunityChat
