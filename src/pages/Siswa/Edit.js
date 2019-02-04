import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

class SiswaEdit extends Component {
  constructor() {
    super();
    this.state = {
      nis: "",
      nama: "",
      no_telp: "",
      alamat: "",
      jurusan: ""
    };
  }
  handleSubmit = e => {
    const siswaId = this.props.match.params.id;
    const token = localStorage.getItem("token");
    const headers = {
      token: token
    };
    const { nis, nama, no_telp, alamat, jurusan } = this.state;
    axios
      .put(
        `http://localhost:3000/siswas/${siswaId}`,
        {
          nis,
          nama,
          no_telp,
          alamat,
          jurusan
        },
        { headers }
      )
      .then(res => {
        console.log(res);
        Swal.fire("Good job!", "You clicked the button!", "success");
        this.props.history.push("/siswa");
      })
      .catch(err => console.log(err));
    //   supaya tidak reload
    e.preventDefault();
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const siswaId = this.props.match.params.id;
    const token = localStorage.getItem("token");
    const headers = {
      token: token
    };
    if (!token) {
      return (window.location = "/");
    } else {
      axios
        .get(`http://localhost:3000/siswas/${siswaId}`, { headers })
        .then(res => {
          //   console.log(res);
          const { nis, nama, no_telp, alamat, jurusan } = res.data.data;
          this.setState({
            nis,
            nama,
            no_telp,
            alamat,
            jurusan
          });
        });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { nis, nama, no_telp, alamat, jurusan } = this.state;
    return (
      <div>
        <h2>Tambah Siswa</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nis</label>
            <input
              required
              name="nis"
              value={nis}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Nama</label>
            <input
              type="text"
              required
              name="nama"
              value={nama}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>No. Telp</label>
            <input
              type="number"
              required
              name="no_telp"
              value={no_telp}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Alamat</label>
            <input
              type="text"
              required
              name="alamat"
              value={alamat}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Jurusan</label>
            <input
              type="text"
              required
              name="jurusan"
              value={jurusan}
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary" type="sumbit">
            Simpan
          </button>
        </form>
      </div>
    );
  }
}

export default SiswaEdit;
