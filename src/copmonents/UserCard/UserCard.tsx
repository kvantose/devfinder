import { LocalGithubUser } from "types";
import { UserStat } from "./UserStat/UserStat";
import { UserTitle } from "./UserTitle/UserTitle";
import "./UserCard.css";
import { UserInfo } from "./UserInfo/UserInfo";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className="userCard">
      <img src={props.avatar} alt="User Avatar" className="avatar" />
      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />
      <p className={`bio${props.bio ? "" : "empty"}`}>
        {props.bio || "This profile has no bio"}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo
        location={props.location}
        blog={props.blog}
        twitter={props.twitter}
        company={props.company}
      />
    </div>
  );
};
