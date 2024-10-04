import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
  <div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
  <div id="wd-dashboard-courses" className="row g-4">
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/webdev.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1235/Home">
            <img src="/images/webdev.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1235 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
        </Link>
       </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1235/Home">
            <img src="/images/webdev.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1235 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
        </Link>
       </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1235/Home">
            <img src="/images/webdev.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1235 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
        </Link>
       </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1235/Home">
            <img src="/images/webdev.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1235 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
        </Link>
       </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1235/Home">
            <img src="/images/webdev.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1235 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
        </Link>
       </div>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
        <Link className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1235/Home">
            <img src="/images/webdev.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1235 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
        </Link>
       </div>
      </div>
    </div> 
  </div>
  </div>
  );
}
