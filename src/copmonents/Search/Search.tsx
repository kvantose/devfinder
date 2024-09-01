import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { Button } from "copmonents/Button/Button";
import "./Search.css";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
 const handleSubmint = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.username.value;
    if(text) onSubmit(text);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmint} autoComplete="off">
      <div className="search">
        <SearchIcon className="search__icon" />
        <input
          className={`textField`}
          placeholder="Search Github username..."
          type="text"
          name="username"
        />
        {hasError && <div className="error">User not found</div>}
        <Button children="Search" onClick={() => {}} />
      </div>
    </form>
  );
};
