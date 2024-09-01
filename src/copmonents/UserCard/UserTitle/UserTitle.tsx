import { LocalGithubUser } from "types";
import "./UserTitle.css";

interface UserTitleProps
  extends Pick<LocalGithubUser, "created" | "login" | "name"> {}

export const UserTitle = ({ created, login, name }: UserTitleProps) => {
  const createdDate = new Date(created);
  return (
    <div className="userTitle">
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{createdDate.toLocaleDateString()}</span>
    </div>
  );
};
