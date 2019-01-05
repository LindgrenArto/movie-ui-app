import React from "react";

class MovieRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.viewMovie = this.viewMovie.bind(this);
  }

  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <div className="container">
        <div className="col-sm-4" style={{ float: "left" }}>
          <div
            className="card mb-4 shadow-sm"
            style={{ height: 1100, width: 350 }}
          >
            <img alt="poster" width="100%" src={this.props.movie.poster_src} />
            <h3>{this.props.movie.title}</h3>
            <div className="card-body">
              <p style={{ fontSize: 20 }} className="card-text">
                {this.props.movie.overview}.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="btn-group"
                  style={{
                    bottom: 20,
                    position: "absolute",
                    verticalAlign: "middle"
                  }}
                >
                  <button
                    type="button"
                    onClick={this.viewMovie}
                    value="View"
                    className="button"
                  >
                    View
                  </button>
                  <b
                    style={{
                      marginLeft: 100,
                      fontSize: 25,
                      marginBottom: 10
                    }}
                  >
                    {this.props.movie.vote_average}/10
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/*</div>
      <table key={this.props.movie.id} className="table">
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="150" src={this.props.movie.poster_src} />
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <b>
                <p> {this.props.movie.vote_average}/10</p>
              </b>
              <input
                type="button"
                onClick={this.viewMovie.bind(this)}
                value="View"
                className="button"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
*/

export default MovieRow;
