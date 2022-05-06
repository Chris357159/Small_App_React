import React from "react";

class ListDepartement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: "",
      selectedDepartement: null
    };
  }

  componentDidMount() {
    fetch("https://geo.api.gouv.fr/departements")
      .then((dataDepartement) => dataDepartement.json())
      .then((dataDepartement) => this.setState({ data: dataDepartement }));
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClickUnique(dep) {
    this.setState({ selectedDepartement: dep });
  }

  handleClickListe() {
    this.setState({ selectedDepartement: null });
  }

  render() {
    if (this.state.data.length === 0) {
      return "Loading";
    }
    const filteredDepartement = this.state.data.filter(
      (dep) => dep.nom.indexOf(this.state.value) !== -1
    );
    const listeDepartementName = filteredDepartement.map((dep) => (
      <li className="listeDep" key={dep.code}>
        <p>
          {dep.nom} ({dep.code}) {dep.codeRegion}
          {"  "}
          <button onClick={() => this.handleClickUnique(dep)}>
            Plus d'info
          </button>
        </p>
      </li>
    ));
    return (
      <div>
        {this.state.selectedDepartement === null ? (
          <div>
            <input
              type="text"
              value={this.state.data.nom}
              onChange={(e) => this.handleChange(e)}
            />
            <ul>{listeDepartementName}</ul>
          </div>
        ) : (
          <div>
            <h1>{this.state.selectedDepartement.nom}</h1>(
            {this.state.selectedDepartement.code})
            {this.state.selectedDepartement.codeRegion}
            <br />
            <button onClick={() => this.handleClickListe()}>Retour</button>
          </div>
        )}
      </div>
    );
  }
}

export default ListDepartement;
