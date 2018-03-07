# Happy Restaurant

### PLAN
- Tab bar
  1) Hamburger (Problem : https://github.com/react-navigation/react-navigation/issues/165
  https://github.com/react-navigation/react-navigation/issues/1632)

- List
1) Data
2) Flatlist

- Restaurant Detail
- Recommendation Tab Bar in two
1) native-base tab bar
2)


# SCRUM
1. List
  - react-navigation
  - TabBar at tome
  - Hamburger button

2. Restaurant Detail
  - Recommendation & - Full Menu Tap  

### Error
1) Error on watchman at the beginning of the program run
2.0-. jest-haste-map: Watchman crawl failed. Retrying once with node crawler.

echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
watchman shutdown-server
watchman watch-del-all
and restart project

2) Building error type:transform Error
yarn remove babel-preset-react-native
yarn add babel-preset-react-native@2.1.0

3) ...
