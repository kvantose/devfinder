import { LocalGithubUser } from "types"
import './UserStat.css'

interface UserStatProps extends Pick<LocalGithubUser, "repos" | "followers" | "following"> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => {
    return (
        <div className="userStat">
            <div className="info">
                <div className="infoTitle">Repos</div>
                <div className="infoNumber">{repos}</div>
            </div>
            <div className="info">
                <div className="infoTitle">Followers</div>
                <div className="infoNumber">{followers}</div>
            </div>
            <div className="info">
                <div className="infoTitle">Following</div>
                <div className="infoNumber">{following}</div>
            </div>
        </div>
    )
}