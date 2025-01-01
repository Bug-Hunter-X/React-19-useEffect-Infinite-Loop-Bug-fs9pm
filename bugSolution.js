```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation with empty dependency array to run once on mount
    let intervalId;
    if(count < 5) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```