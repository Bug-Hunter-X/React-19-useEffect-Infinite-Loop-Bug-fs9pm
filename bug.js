```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the effect depends on 'count',
    // and the effect updates 'count'.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```