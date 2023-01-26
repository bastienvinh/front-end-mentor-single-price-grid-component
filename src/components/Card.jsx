import './Card.scss'

const Card = () => {
  // 630  470
  return (
    <div className="card">
      <div className="card-1">
        <h1>Join our community</h1>
        <h2>30-day, hassle-free money back guarantee</h2>
        <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
      </div>
      <div className="card-2">
        <div className="content-1">
          <p className="title">Monthly Subscription</p>
          <p className="price-wrapper"><span className="price">$29</span> <span className="per">per month</span></p>
          <p className="access">Full access for less than $1 a day</p>
          <button>Sign Up</button>
        </div>
        <div className="content-2">
          <p className="title">Why Us</p>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card