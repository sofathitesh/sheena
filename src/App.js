import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getData } from "./actions";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillReceiveProps(newProps) {
    if (newProps.data) {
      this.setState({ data: newProps.data });
    }
  }
  sortOrder(e) {
    let newSortObj = this.state.data.sort((a, b) => {
      if (e.target.value === "ASC") {
        if (parseInt(a.id) < parseInt(b.id)) {
          return -1
        }
      }//else{
      //   if(parseInt(a.id) > parseInt(b.id)){
      //     return 1
      //   }
      // }
      return 0;
    })
    this.setState({ data: newSortObj });
  }
  render() {
    console.log(this.state.data);
    return (
      <Fragment>
        <div className="container">
          <div className="row content">
            <div className="col-sm-3 col-md-3 sidenav">
              <h4>John's Blog</h4>
              <ul className="list-group">
                <li className="list-group-list"><label><input type="checkbox" value="Human" />Human</label></li>
                <li className="list-group-list"><label><input type="checkbox" value="Mytholog" />Mytholog</label></li>
                <li className="list-group-list"><label><input type="checkbox" value="Other Speces" />Other Speces</label></li>
              </ul><br></br>
              <h4>Gender</h4>
              <ul className="list-group">
                <li className="list-group-list"><label><input type="checkbox" value="Male" />Male</label></li>
                <li className="list-group-list"><label><input type="checkbox" value="Female" />Female</label></li>
              </ul><br></br>
              <h4>Origin</h4>
              <ul className="list-group">
                <li className="list-group-list"><label><input type="checkbox" value="Unknown" />Unknown</label></li>
                <li className="list-group-list" ><label><input type="checkbox" value="Post Apocatype Earth" />Post Apocatype Earth</label></li>
                <li className="list-group-list"><label><input type="checkbox" value="Nupta" />Nupta</label></li>
                <li className="list-group-list"><label><input type="checkbox" value="Other Origins" />Other Origins</label></li>
              </ul><br></br>
            </div>

            <div className="col-sm-9 col-md-9">
              <div className="row">
              <div className="col-sm-1">
                <h4><small>Filter</small></h4>
              </div>
              <div className="offset-9">
                <div className="form-group">
                  <select className="form-control" onChange={(e) => this.sortOrder(e)} id="sel1">
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                  </select>
                </div>
              </div>
              </div>
              <hr></hr>
              <div className="col-md-12">
                <div className="row">
                  {this.state.data && this.state.data.map((value, index) => {
                    return (
                      <div className="col-md-4 col-sm-6">
                        <div className="card mb-4">
                          <span className="heading-name">
                            <h2>{value.name}</h2>
                            <p>id {value.id}, created {value.created}</p>
                          </span>
                          <img className="card-img-top" data-src="holder.js/200x200" src={value.image} className="img-thumbnail" alt="200x200" />
                          <div className="card-body">
                            <ul className="list-group">
                              <li className="list-group-item"><span className="headings">STATUS</span><span className="heading-data">{value.status}</span></li>
                              <li className="list-group-item"><span className="headings">SPECIES</span><span className="heading-data">{value.species}</span></li>
                              <li className="list-group-item"><span className="headings">GENDER</span><span className="heading-data">{value.type ? value.type : <div className='blank-block'></div>}</span></li>
                              <li className="list-group-item"><span className="headings">ORIGIN</span><span className="heading-data">{value.origin ? value.origin.name : <div className='blank-block'></div>}</span></li>
                              <li className="list-group-item"><span className="headings">LAST LOCATION</span><span className="heading-data">{value.location ? value.location.name : <div className='blank-block'></div>}</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapToStateProps = (state) => {

  return {
    data: state.getData ? state.getData.data : []
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: dispatch(getData())
  }
}


export default connect(mapToStateProps, mapDispatchToProps)(App);
