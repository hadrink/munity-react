
import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Icon, Segment, Header, Comment } from 'semantic-ui-react'

class MunityChat extends React.Component {
  constructor(props) {
    super(props)

    props.openSocketConnection()
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
    <Header style={{width: '100%'}} as='h3'>Community Name</Header>
     <Segment basic floated style={{width: '100%', height: '100%', top: '-100px', padding: '100px 0 0 0'}}>
     <Comment.Group style={{height: '100%', width: '100%', overflowY: 'scroll', maxWidth: 'none'}}>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/joe.jpg' />
         <Comment.Content>
           <Comment.Author>Joe Henderson</Comment.Author>
           <Comment.Metadata>
             <div>1 day ago</div>
           </Comment.Metadata>
           <Comment.Text>
             <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there.</p>
             <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
           </Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>

       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>
       <Comment>
         <Comment.Avatar as='a' src='/assets/images/avatar/small/christian.jpg' />
         <Comment.Content>
           <Comment.Author>Christian Rocha</Comment.Author>
           <Comment.Metadata>
             <div>2 days ago</div>
           </Comment.Metadata>
           <Comment.Text>I re-tweeted this.</Comment.Text>
           <Comment.Actions>
             <Comment.Action>Reply</Comment.Action>
           </Comment.Actions>
         </Comment.Content>
       </Comment>

     </Comment.Group>
     <Input
         style={{width: '100%'}}
         action={{ color: 'red', labelPosition: 'right', icon: 'copy', content: 'Send', onClick: (e) => { this.handleSubmit() } }}
         placeholder='Send a message...'
         onChange={ (e) => this.handleInputChange(e) }
       />
   </Segment>
   </div>
    )
  }
}

MunityChat.propTypes = {

}

export default MunityChat
