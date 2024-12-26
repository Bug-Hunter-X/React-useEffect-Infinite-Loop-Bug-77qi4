```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Using a flag to prevent infinite rerenders
    if(!isLoading){
        setIsLoading(true);
        setTimeout(()=>{
            setCount(prevCount => prevCount + 1);
            setIsLoading(false);
        }, 1000);
    }
  }, [isLoading]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```