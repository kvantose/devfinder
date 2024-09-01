import React, { useState } from "react";
import "./App.css";
import { Header } from "copmonents/Header/Header";
import { Search } from "copmonents/Search/Search";
import { UserCard } from "copmonents/UserCard/UserCard";
import { defaultUser } from "mock";
import { GithubUser, LocalGithubUser, GithubError } from "types";
import { isGithubUser } from "utils/typeguards";
import { extractLocalUser } from "utils/extract-local-user";

const BASE_URL = "https://api.github.com/users/"

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async(username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = await res.json() as GithubUser | GithubError;

    if(isGithubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }
  return (
    <div className="App">
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
        {user && <UserCard {...user} />}
    </div>
  );
}

export default App;
