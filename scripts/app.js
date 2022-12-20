import theme from "./theme/theme.js";
import search from "./search.js";

const preloadUserLogin = "octocat";

const initialize = () => {
  theme.bindSwitchThemeHandlers();
  search.bindSearchHandlers();
  theme.renderCurrentTheme();
  search.startSearchProcess(preloadUserLogin)
};

initialize();
