import api from "./github.js";
import user from "./user.js";

const searchAlert = document.querySelector(".search_alert");
const searchInput = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_btn");
const searchInterface = document.querySelector(".search");

const renderAlertInSearch = (text) => {
  searchAlert.textContent = text;
};

const startSearchProcess = (login) => {
  api
    .getUserInfoByLogin(login)
    .then(user.githubUserInfoAdapter)
    .then(user.renderUserInfo)
    .catch((e) => renderAlertInSearch(e?.message || "Something went wrong"));
};

const onClickSearchButton = (e) => {
  e.preventDefault();
  if (searchInput.value) {
    startSearchProcess(searchInput.value);
  }
};

const onClickSearchInterface = (e) => {
  e.preventDefault();
  searchInput.focus();
};

const bindSearchHandlers = () => {
  searchBtn.addEventListener("click", onClickSearchButton);
  searchInterface.addEventListener("click", onClickSearchInterface);
};

export default {
  bindSearchHandlers,
  startSearchProcess,
};
