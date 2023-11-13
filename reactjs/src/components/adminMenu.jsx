import { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminMenu extends Component {
  render() {
    return (
      <div>
        <Link to="trainerApplications">
          <div>Edző jelentkezések</div>
        </Link>
      </div>
    );
  }
}
