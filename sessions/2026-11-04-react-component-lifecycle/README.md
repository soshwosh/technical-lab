# Session: Lifecycle of a React Component
**Date:** 2026-11-04     
**Type:** Discussion

## Guiding Questions / Ideas
*Some specific questions or thoughts about the topic to cover.*
- mounting vs updating vs unmounting
- what tasks happen when
- how hooks like useEffect, useRef fit into the cycle
- how can i step through this process in development? dev tools?

## Key Takeaways
*A couple bullets with the big ideas you came away with.*
- Most issues we deal with when maintaining React codebases arise from the "updating" phase. Otherwise, React does a good job at handling performance, state management, and cleanup under the hood as part of the lifecycle.

## Artifacts & Resources
*Diagrams, sandbox code, link to helpful documentation or articles.*
- [braindump visual](./react-component-lifecycle.png)

## Remaining Questions / Follow-ups
*Follow-up questions, edge cases, or complete tangents to look into further on your own, or to be added to the Topic Backlog for a future lab.*
- Test using the Profiler tab in React Dev Tools for observing the component lifecycle
- What/when are the cleanup functions used in the unmounting phase?
- Common bugs in each stage of the lifecycle