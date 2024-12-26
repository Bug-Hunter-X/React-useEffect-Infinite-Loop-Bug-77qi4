# React useEffect Infinite Loop Bug

This repository demonstrates a common but easily missed bug in React's `useEffect` hook: creating an infinite loop by incorrectly updating state within the dependency array.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description

The issue lies in the `useEffect` hook.  It attempts to increment the `count` state variable inside the effect itself, triggering a re-render that runs the `useEffect` again, causing an infinite loop. This renders the browser unresponsive and eventually crashes it.

## Solution

The solution involves preventing unnecessary re-renders and state updates.   The corrected code ensures the state only updates under certain conditions or uses techniques to break the loop.  See the solution in `bugSolution.js`.