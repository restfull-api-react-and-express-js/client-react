import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class Siswa extends Component {
  constructor() {
    super();
    this.state = {
      siswa: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("http://localhost:3000/siswas")
      .then(res => {
        console.log(res);
        this.setState({ siswa: res.data.data });
      })
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        axios
          .delete(`http://localhost:3000/siswas/${id}`)
          .then(res => {
            this.getData();
          })
          .catch(err => console.log(err));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  handleEdit = id => {
    this.props.history.push(`/siswa/edit/${id}`);
  };

  render() {
    return (
      <div>
        <h2>Data Siswa</h2>

        <Link className="btn btn-primary" to="/siswa/create">
          Tambah Siswa
        </Link>
        <br />
        <br />

        <table className="table">
          <thead>
            <tr>
              <th>Nis</th>
              <th>Nama</th>
              <th>No. Telp</th>
              <th>Alamat</th>
              <th>Jurusan</th>
              <th colSpan="2">
                <center>Aksi</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.siswa.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.nis}</td>
                  <td>{data.nama}</td>
                  <td>{data.no_telp}</td>
                  <td>{data.alamat}</td>
                  <td>{data.jurusan}</td>
                  <td>
                    <button
                      onClick={() => this.handleEdit(data.id)}
                      className="btn btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(data.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
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
