import "/src/assets/style/w3.css";
import "/src/assets/style/font-lato.css";
import "/src/assets/style/font-awesome-min.css";

function Contact() {
  return (
    <>
    <div
        className="w3-container w3-content w3-padding-64"
        style={{maxWidth: "800px"}}
        id="contact"
      >
        <h2 className="w3-wide w3-center">CONTACT</h2>
        <p className="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
        <div className="w3-row w3-padding-32">
          <div className="w3-col m6 w3-large w3-margin-bottom">
            <i className="fa fa-map-marker" style={{width: "30px"}}></i> Iran, Busher<br />
            <i className="fa fa-phone" style={{width: "30px"}}></i> Phone: +98 771 555 65 965  <br />
            <i className="fa fa-envelope" style={{width: "30px"}}> </i> Email:
            hraofian@gmail.com<br />
          </div>
          <div className="w3-col m6">
            <form action="/action_page.php" target="_blank">
              <div className="w3-row-padding" style={{margin: "0 -16px 8px -16px"}}>
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Name"
                    required
                    name="Name"
                  />
                </div>
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Email"
                    required
                    name="Email"
                  />
                </div>
              </div>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Message"
                required
                name="Message"
              />
              <button
                className="w3-button w3-black w3-section w3-right"
                type="submit"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;