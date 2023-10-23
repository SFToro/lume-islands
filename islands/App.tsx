export default function button() {
  function alerter() {
    alert("hello world");
  }
  return <button onClick={alerter}>Click me</button>;
}
