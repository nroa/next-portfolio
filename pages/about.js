import Link from 'next/link'

export default () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a>Go to Home</a>
    </Link>
    <p>JavaScript programmer</p>
    <img src="/static/javascript-logo.png" alt="Javascript" height="200px" />
  </div>
)