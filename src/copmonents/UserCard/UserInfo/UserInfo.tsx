import { LocalGithubUser } from "types";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";
import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import "./UserInfo.css";

interface UserInfoProps
  extends Pick<LocalGithubUser, "location" | "twitter" | "blog" | "company"> {}

export const UserInfo = ({
  location,
  twitter,
  blog,
  company,
}: UserInfoProps) => {
  return (
    <div className="userInfo">
      {location ? (
        <div className="infoItem">
          <LocationIcon className="icon" />
          <span className="">{location}</span>
        </div>
      ) : (
        <div>
          <LocationIcon className="icon" />
          <span className="value">Not Available</span>
        </div>
      )}

      {twitter ? (
        <div className="infoItem">
          <TwitterIcon className="icon" />

          <a
            className="link"
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            {twitter}
          </a>
        </div>
      ) : (
        <div className="infoItem">
          <TwitterIcon className="icon" />
          <span className="value">Not Available</span>
        </div>
      )}

      {blog ? (
        <div className="infoItem">
          <BlogIcon className="icon" />
          <a
            href={`https://${blog}`}
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {blog}
          </a>
        </div>
      ) : (
        <div className="infoItem">
          <BlogIcon className="icon" />
          <span className="value">Not Available</span>
        </div>
      )}

      {company ? (
        <div className="infoItem">
          <CompanyIcon className="icon" />
          <span className="value">{company}</span>
        </div>
      ) : (
        <div className="infoItem">
          <CompanyIcon className="icon" />
          <span className="">Not Available</span>
        </div>
      )}
    </div>
  );
};
