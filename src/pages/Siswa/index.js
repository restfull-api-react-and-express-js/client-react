import React, { Component } from "react";
import axios from "axios";

class Siswa extends Component {
  constructor() {
    super();
    this.state = {
      siswa: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/siswas")
      .then(res => {
        console.log(res);
        this.setState({ siswa: res.data.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Data Siswa</h1>
        <table className="table">
          <thead>
            <th>Nis</th>
            <th>Nama</th>
            <th>No. Telp</th>
            <th>Alamat</th>
            <th>Jurusan</th>
          </thead>
          <tbody>
            {this.state.siswa.map((data, index) => {
              return (
                <tr>
                  <td>{data.nis}</td>
                  <td>{data.nama}</td>
                  <td>{data.no_telp}</td>
                  <td>{data.alamat}</td>
                  <td>{data.jurusan}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Siswa;
