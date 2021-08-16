import { Avatar, Typography } from "@material-ui/core"

const Profile = (props) => {

    return (
        <div>
            <div>
                <Avatar>{String(props.username[0]).toUpperCase}</Avatar>
            </div>
            <div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.username}
                </Typography>
            </div>
            <div>
                <Typography variant="body2" color="textSecondary" component="p">
                    At: {props.address}
                </Typography>
            </div>
        </div>
    )
}

export default Profile;