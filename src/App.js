import "bulma/css/bulma.css";
import "./App.css";
import ProfileCard from "./ProfileCard";
import alexa from "./image/2.jpg";
import cortana from "./image/Microsoft_Cortana_transparent.svg.png";
import siri from "./image/sirikit-og-twitter.png";
function App() {
  return (
    <>
      <div>
        <section className="hero is-warning">
          <div className="hero-body">
            <p className="title">Personal Didital Assistance</p>
          </div>
        </section>

        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <ProfileCard
                  title="Alexa"
                  handle="@alexa99"
                  image={alexa}
                  description="Alexa was created by Amazon help you bye things."
                />
              </div>
              <div className="column is-4">
                {" "}
                <ProfileCard
                  title="cartana"
                  handle="@cortana23"
                  image={cortana}
                  description="cortana was by microsoft. who knows what is dose"
                />
              </div>
              <div className="column is-4">
                {" "}
                <ProfileCard
                  title="siri"
                  handle="@siri143"
                  image={siri}
                  description="siri was mode by apple and is beging phased out"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
