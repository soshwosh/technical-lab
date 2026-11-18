# Session: React Hooks
**Date:** 2026-11-18  
**Type:** Discussion

## Guiding Questions / Ideas
*Some specific questions or thoughts about the topic to cover.*
- Re-familiarize with React hooks we don't usually implement ourselves
- Go through the motions of design-thinking (when would I use x hook vs y hook?)

## Key Takeaways
*A couple bullets with the big ideas you came away with.*
- `useReducer()` is an alternative to `useState()` for when state management is getting complex. Especially for if you have a lot of handlers with different input needs. 
- Three steps to converting from `useState()` to `useReducer()`:
  - Move from setting stste to dispatching actions
  - Write a reducer function outside your component
  - Replace useage of `useState()` and the setter it provides with the `useReducer()` inside your component 
- `useReducer()` allows state to be handled in one big switch case. Could be subjective on whether or not it's more readable or easy to follow, especially as the returns become quite different in each case. 

## Artifacts & Resources
*Diagrams, sandbox code, link to helpful documentation or articles.*
- [code exercise](sessions/2026-11-18-react-hooks/react-hooks-exercise/src/App.js)
- [useReducer docs](https://react.dev/reference/react/useReducer)
- [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)

## Remaining Questions / Follow-ups
*Follow-up questions, edge cases, or complete tangents to look into further on your own, or to be added to the Topic Backlog for a future lab.*
- hoisting in Javascript
- pure functions and components
- are there any places in our codebases i can think of that are a good use case for `useReducer()`?