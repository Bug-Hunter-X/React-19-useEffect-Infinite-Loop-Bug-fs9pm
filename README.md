# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common bug in React 19 involving the `useEffect` hook.  The bug is an infinite loop caused by inappropriately updating the state within the effect without proper dependencies in the dependency array.  The solution shows how to correct the code to prevent the infinite loop.

## Bug
The provided `bug.js` file contains a React component that uses the `useEffect` hook to increment a state variable (`count`) repeatedly.  Because the effect depends on `count` and the effect itself modifies `count`, an infinite loop occurs.