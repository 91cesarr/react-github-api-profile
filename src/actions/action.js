import axios from "axios";
import store from "../store.js";

export function getUserInfo() {
  axios.get("http://localhost:3001/users").then(res => {
    store.dispatch({
      type: "GET_USER_INFO",
      item: res.data
    });
  });
}

export function getRepo() {
  axios.get("http://localhost:3001/users/91cesarr/repos").then(res => {
    store.dispatch({
      type: "GET_REPO",
      repo: res.data
    });
  });
}

// https://api.github.com/users/91cesarr

// https://api.github.com/users/91cesarr/repos