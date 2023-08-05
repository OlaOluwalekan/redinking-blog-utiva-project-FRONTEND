import { Link } from 'react-router-dom'
import styles from '../css/privacy.module.css'
import { useSelector } from 'react-redux'

const Privacy = () => {
  const { darkMode } = useSelector((store) => store.user)

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <h2>
          Privacy Policy for{' '}
          <Link to='/'>
            Red<span>Inking</span>
          </Link>
        </h2>
        <section>
          <p>
            This Privacy Policy describes how{' '}
            <Link to='/'>
              Red<span>Inking</span>
            </Link>{' '}
            ("we," "our," or "us") collects, uses, and shares your personal
            information when you visit our blog website at{' '}
            <Link to='/'>
              Red<span>Inking</span>
            </Link>
            . By accessing and using our Website, you consent to the practices
            described in this Privacy Policy. If you do not agree with the terms
            outlined below, please do not use our Website.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to
            us when you subscribe to our newsletter, comment on blog posts, or
            contact us through the contact form. This information may include:
          </p>

          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Your interests</li>
            <li>Your username (display name)</li>
            <li>Any other information you provide to us voluntarily</li>
          </ul>

          <h3>Usage data</h3>
          <p>
            We may automatically collect certain information about how you
            interact with our Website. This data may include:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages you visit on our Website</li>
            <li>Time and date of your visit</li>
            <li>Referring and exit pages</li>
            <li>Clickstream data</li>
          </ul>
          <p>
            We may use cookies and similar tracking technologies to collect this
            information. You have the option to disable cookies through your web
            browser settings, but doing so may affect the functionality of the
            Website.
          </p>

          <h3>Use of Information</h3>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>
              To improve and optimize our Website's content and user experience.
            </li>
            <li>To respond to your comments, inquiries, or requests.</li>
            <li>
              To send periodic newsletters, updates, or promotional content
              related to our blog or services (you can opt-out of these
              communications at any time).
            </li>
            <li>
              To analyze and understand how users interact with our Website and
              its content.
            </li>
          </ul>

          <h3>Data Sharing and Disclosure</h3>
          <p>
            We do not sell, rent, or disclose your personal information to third
            parties for their marketing purposes without your consent. However,
            we may share your information in the following circumstances:
          </p>
          <ul>
            <li>
              With trusted service providers who assist us in operating our
              Website and providing services. These service providers are bound
              by confidentiality agreements and are only permitted to use the
              information for the specified purposes.
            </li>
            <li>
              In response to legal requests, court orders, or to comply with
              applicable laws, regulations, or governmental requests.
            </li>
            <li>
              To protect the rights, property, and safety of{' '}
              <Link to='/'>
                Red<span>Inking</span>
              </Link>
              , our users, or others.
            </li>
          </ul>

          <h3>Data Security</h3>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the internet or electronic
            storage is entirely secure. Therefore, we cannot guarantee absolute
            security.
          </p>

          <h3>Third-Party Links</h3>
          <p>
            Our Website may contain links to third-party websites or services
            that are not operated by us. We are not responsible for the privacy
            practices or content of these third-party websites. We encourage you
            to review the privacy policies of these websites before providing
            any personal information.
          </p>

          <h3>Children's Privacy</h3>
          <p>
            Our Website is not directed to children under the age of 13. We do
            not knowingly collect personal information from children. If you
            believe that we have inadvertently collected personal information
            from a child, please contact us immediately, and we will take
            appropriate measures to remove the information.
          </p>

          <h3>Changes to this Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. Any changes will be posted on this page, and the
            date of the latest revision will be indicated at the top of the
            page.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please contact us at:
          </p>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <span>Email:</span> app4bells@gmail.com
            </li>
            <li>
              <span>Address:</span> 141, Park Lane, Los Angeles, United States
            </li>
            <li>
              <span>Phone:</span> +234 814 265 9447
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
export default Privacy
