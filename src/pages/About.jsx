import { Link } from 'react-router-dom'
import styles from '../css/privacy.module.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const About = () => {
  const { darkMode } = useSelector((store) => store.user)

  useEffect(() => {
    document.title = `RedInking | About`
  }, [])

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <h2>
          About{' '}
          <Link to='/'>
            Red<span>Inking</span>
          </Link>
        </h2>
        <section>
          <p>
            Welcome to{' '}
            <Link to='/'>
              Red<span>Inking</span>
            </Link>
            ! We're delighted to have you here. Our blog is a vibrant space
            where ideas, stories, and insights converge. We believe in the power
            of words to inspire, educate, and connect people from all walks of
            life. Whether you're a tech enthusiast, a creative spirit, an
            explorer of the world, or simply curious, there's something for
            everyone at RedInking.
          </p>

          <h3>Our Mission</h3>
          <p>
            At{' '}
            <Link to='/'>
              Red<span>Inking</span>
            </Link>
            , our mission is to foster a community of lifelong learners and
            thinkers. We're committed to delivering engaging, informative, and
            thought-provoking content that sparks conversations, encourages
            growth, and empowers individuals to navigate the complexities of the
            modern world. We're not just a blog; we're a platform for discovery
            and connection.
          </p>

          <h3>Our Topics</h3>
          <p>
            From technology trends to personal development, from creative
            expression to the latest in science and culture,{' '}
            <Link to='/'>
              Red<span>Inking</span>
            </Link>{' '}
            covers a diverse range of topics that reflect the multifaceted
            interests of our readers. Our expert contributors share their
            expertise, experiences, and unique perspectives, ensuring that
            you're always in the know about the topics that matter most.
          </p>

          <h3>What Sets Us Apart</h3>
          <p>
            <Link to='/'>
              Red<span>Inking</span>
            </Link>{' '}
            stands out for its commitment to authenticity, quality, and
            community engagement. Our content is carefully curated to provide
            value and insight, rather than overwhelming you with information. We
            believe in the beauty of nuanced storytelling and the impact of
            well-researched articles.
          </p>

          <h3>Join the Conversation</h3>
          <p>
            Your voice matters. We encourage you to be a part of the dialogue by
            leaving comments, sharing your thoughts, and engaging with our
            content. We're not just content creators; we're listeners and
            learners too. Your feedback shapes the direction of{' '}
            <Link to='/'>
              Red<span>Inking</span>
            </Link>
            , and we're excited to grow alongside our readers.
          </p>

          <h3>Connect with Us</h3>
          <p>
            Whether you're a seasoned reader or just discovering us, we're
            thrilled to connect with you. Follow us on social media to stay
            updated with our latest posts, special features, and community
            events. Feel free to reach out through our contact page with your
            questions, suggestions, or ideas. We're here to make your experience
            at{' '}
            <Link to='/'>
              Red<span>Inking</span>
            </Link>{' '}
            enriching and enjoyable.
          </p>
          <p>
            Thank you for being a part of the{' '}
            <Link to='/'>
              Red<span>Inking</span>
            </Link>{' '}
            community. Let's embark on this journey of exploration, inspiration,
            and growth together.
          </p>

          <p>Happy reading!</p>

          <p>
            The{' '}
            <Link to='/'>
              Red<span>Inking</span>
            </Link>{' '}
            Team
          </p>
        </section>
      </div>
    </div>
  )
}
export default About
