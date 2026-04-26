import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { hackathonData } from "../Data/Hackathon";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function HackathonDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { img, title, description, created, techUsed, role, link } =
    hackathonData.filter((el) => el.id === id)[0];

  return (
    <>
      <div className="portfolio-popup open">
        <div className="pp-inner">
          <div className="pp-content">
            <div className="pp-header">
              <button
                type="button"
                className="btn pp-close"
                onClick={() => navigate(-1)}
              >
                <IoClose />
              </button>

              <div className="pp-thumbnail">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}>
                  {img.map((item, index) => (
                    <SwiperSlide key={index}>
                      {item.includes(".webm") ? (
                        <video autoPlay loop muted style={{ width: "100%", height: "auto" }}>
                          <source src={item} type="video/webm" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img src={item} alt={`img-${index}`} style={{ width: "100%", height: "auto" }} />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <h3>{title}</h3>
            </div>

            <div className="pp-body">
              <div className="description">
                <p>
                  {description &&
                    description.map((dis, i) => <li key={i}>{dis}</li>)}
                </p>
              </div>
              <div className="general-info">
                <ul>
                  <li>
                    Date - <span>{created}</span>
                  </li>
                  <li>
                    technologies used - <span>{techUsed}</span>
                  </li>
                  <li>
                    Role - <span>{role}</span>
                  </li>
                  <li>
                    {link && (
                      <>
                        View Online -{" "}
                        <span>
                          <a href={link} target="_blank">
                            Link
                          </a>
                        </span>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HackathonDetails;
