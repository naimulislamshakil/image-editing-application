import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <h2 className="text-center mt-3 text-primary">Image Editing Plartform</h2>
      <div className="border border-2 border-info">
        <div className="row m-3">
          <div className="col-6 border-2 border-info border-end">
            {/* coller Filters start */}
            <div>
              <h5>Filters:</h5>
              <div className="row">
                <div className="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-primary my-2 w-100 fs-5"
                  >
                    Brightness
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-primary my-2 w-100 fs-5"
                  >
                    Saturation
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-primary my-2 w-100 fs-5"
                  >
                    Inversion
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-primary my-2 w-100 fs-5"
                  >
                    Grayscale
                  </button>
                </div>
              </div>
            </div>
            {/* coller Filters end */}

            {/* Brightness start */}
            <div className="mt-2">
              <div className="d-flex justify-content-between">
                <h2 className="text-primary fs-5">Brightness:</h2>
                <h2 className="text-primary fs-5">100%</h2>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <input type="range" className="w-75 " min="0" max="200" />
              </div>
            </div>
            {/* Brightness end */}
          </div>
          <div className="col-6">
            <h2>This is image section</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
