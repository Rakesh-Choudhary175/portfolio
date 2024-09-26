import { useContext, useState } from "react";
import {
  SiGithub,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiX,
} from "react-icons/si";
import { Context } from "../../Context";

function ContactPage() {
  const [formFilled, setFormFilled] = useState(false);
  const [loading, setLoading] = useState(false);

  const mobile = "7972487464";
  const email = "inqu.rc@gmail.com";
  const socialLinks = [
    {
      icon: <SiLeetcode />,
      link: "https://leetcode.com/Rakesh-dev/",
    },
    {
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/rakesh-choudhary-146282200/",
    },
    {
      icon: <SiX />,
      link: "https://x.com/Rakesh_Dev_",
    },
    {
      icon: <SiGithub />,
      link: "https://github.com/Rakesh-Choudhary175",
    },
    {
      icon: <SiInstagram />,
      link: "https://www.instagram.com/rakesh_choudhary_._/",
    },
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "756c2034-2ef9-4066-9aea-fdb3fe162d3c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    setLoading(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    setLoading(false);

    if (res.success) {
      setFormFilled(true);
      // console.log("Success", res);
    }
  };

  const { navBar } = useContext(Context);

  return (
    <section
      className={`contact-section sec-padding activeOn ${
        navBar ? "fade-out" : ""
      }`}
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Contact me</h2>
          </div>
        </div>
        <div className="row">
          {!formFilled && (
            <div className="contact-form">
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Name"
                      name="Name"
                      className="input-control"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Email"
                      name="Email"
                      className="input-control"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      name="Subject"
                      className="input-control"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      placeholder="Message"
                      name="Message"
                      className="input-control"
                      required
                    ></textarea>
                  </div>
                  <div className="submit-btn">
                    {loading ? (
                      <span className="loader"></span>
                    ) : (
                      <button type="submit" className="btn">
                        send message
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          )}
          {formFilled && (
            <div
              className="contact-form"
              style={{ textAlign: "center", margin: "auto" }}
            >
              <h2>Thank you for reaching out to me.</h2>
              <h2>
                I have received your message and will get back to you as soon as
                possible.
              </h2>
            </div>
          )}
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <a className="nostyle" href={`mailto:${email}`} target="_blank">
                <p>{email}</p>
              </a>
            </div>
            <div className="contact-info-item">
              <h3>Phone</h3>
              <a className="nostyle" href={`tel:+91${mobile}`} target="_blank">
                <p>{mobile}</p>
              </a>
            </div>
            <div className="contact-info-item">
              <h3>follow me</h3>
              <div className="social-links">
                {socialLinks.map((social, i) => (
                  <a href={social.link} target="_blank" key={i}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
