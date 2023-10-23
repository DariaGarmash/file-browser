## File Browser

SPA that represents file browser.

### User story 1 - View tree

As a user I can see the files and folders rendered as a tree structure in the `sidebar`, where contents of the folder are **ordered alphabetically**.

### User story 2 - Expand/collapse

As a user I can click once on a folder in the `sidebar` to expand/collapse it's contents. The same click will also make the folder active. Expanding/collapsing a folder should not result in previously expanded/collapsed folders to change state.

### User story 3 - Activating a file/folder in sidebar

As a user I can click on a folder or file in the `sidebar` to make it active. Currently active file/folder should be displayed in the `main` area.

- Active folder should display it's contents in the `main` area.
- Active file should display it's name and type in the `main` area.

### User story 4 - Activating a file/folder in main area

As a user I can click on a file or folder in the `main` area to activate it. When activated, it should also expand the path to the folder in the `sidebar` tree.

## TECH notes

This repository is considered as my playground to get familiar with Redux toolkit mostly.
That means that it is not obviously I would have choose this solution for the problem solving, but more trying the new tool in action.

- React + typescript
    - react components
    - playing with generics in dataHandler
- Redux - Redux toolkit (learning)
    - typescript support
    - slices and action creators
- SASS
    - variables
    - functions
- Jest
    - mock API request
    - Redux: renderWithStore, mock useSelector, useDispatcher

Besides that, repository is configured to run debugger in VS Code, including Jest debugger

## How to start app

Run app

```
npm run start
```

Run server 

```
npm run server:start
```

Application will be running on `localhost:3000`

Run tests 

```
npm run test
```

Check test coverage

```
npm run test:coverage
```

Further improvements: 

- Implement ErrorBoundary
- Collapse sidebar on devices like tablets and smaller
- Implement more slices: fx user with externalReducers that set data per user
- simple and useful features like search by file name etc