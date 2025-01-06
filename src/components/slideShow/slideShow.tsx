import "/src/assets/style/w3.css";
import "/src/assets/style/font-lato.css";
import "/src/assets/style/font-awesome-min.css";

function SlideShow() {
  return (
    <>
    <div className="mySlides w3-display-container w3-center">
        <img src="/src/assets/images/ny.jpg" style={{width: "100%"}} />
        <div
          className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small"
        >
          <h3>Los Angeles1</h3>
          <p><b>We had the best time playing at Venice Beach!1</b></p>
        </div>
      </div>

    </>
  );
}

export default SlideShow;
