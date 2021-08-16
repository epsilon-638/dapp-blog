import React from 'react';
import { Card, CardContent, CardActions, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { ThumbUp, ThumbDown } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    carddiv: {
        paddingLeft: 40,
        paddingBottom: 15
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    likes: {
        paddingLeft: 12,
    },
    avatar: {
        backgroundColor: red[500],
      },
  }));

const Post = ({props}) => {
    const classes = useStyles();

    return (
        <div className={classes.carddiv}>
        <Card className={classes.root}>
            <CardHeader 
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {props.avatar}
                </Avatar>
            }
            title="username"
            subheader="timestamp"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p"> 
                    This is where the postbody will go so i'm
                    just going to fill this with super random text, 
                    maybe test my typing speed ahhhhhhhh, so 
                    you can't hold down keys in vscode, that's not
                    very cash money. 
                </Typography>
            </CardContent>
            <CardActions>
                <div>
                    <IconButton aria-label="like">
                        <ThumbUp />
                    </IconButton>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.likes}>
                        {props.likes}
                    </Typography>
                </div>
                <div>
                    <IconButton aria-label="dislike">
                        <ThumbDown />
                    </IconButton>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.likes}>
                        {props.dislikes}
                    </Typography>
                </div>
            </CardActions>
        </Card>
        </div>
    );
}

export default Post;
