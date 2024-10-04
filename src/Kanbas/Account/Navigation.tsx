import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-6 rounded-0">
      <Link to={`/Kanbas/Account/Signin`} className="list-group-item active border border-0" > Signin  </Link> <br/>
      <Link to={`/Kanbas/Account/Signup`} className="list-group-item text-danger border border-0" > Signup  </Link> <br/>
      <Link to={`/Kanbas/Account/Profile`} className="list-group-item text-danger border border-0"> Profile </Link> <br/>
    </div>
);}