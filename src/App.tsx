function App() {
  const [message, setMessage] = useState(
    "lets learn more about testing in React"
  );
  return (
    <div>
      <h1>Hello world!</h1>
      <p>Let's learn more about testing in React</p>
      <p>{message}</p>
      <button onClick={() => setMessage("new message")}>Change message</button>
    </div>
  );
}
