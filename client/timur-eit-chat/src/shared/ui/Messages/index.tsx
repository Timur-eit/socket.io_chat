import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import './style.scss'

interface IMessagesProps {
    [prop: string]: any,
    messages: Array<{
        userName: string,
        text: string,
        date: Date,
    }>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    inline: {
      display: 'block',
    },
  }),
);

const Messages: React.FC<IMessagesProps> = ({messages}) => {

    const classes = useStyles()
    return (
      <div className='messages-block'>
        <List className={classes.root}>
        {messages.map((message, i) => {
          return (
            <div className='message' key={message.userName + i}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={message.userName}
                  secondary={<pre>{`${message.date}: ${message.text}`}</pre>}
                />
              </ListItem>
            </div>
          )
        })}
        </List>
      </div>
    )
}

export default Messages;
