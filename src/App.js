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
                    class="btn btn-outline-primary my-2 w-100"
                  >
                    Primary
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-primary my-2 w-100"
                  >
                    Primary
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-primary my-2 w-100"
                  >
                    Primary
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-primary my-2 w-100"
                  >
                    Primary
                  </button>
                </div>
              </div>
            </div>
            {/* coller Filters end */}
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
