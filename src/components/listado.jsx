import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Listado() {
  const [Users, setUsers] = useState([]);
  const ObtenerUsuarios = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = await res.data;
    setUsers(users);
  };
  useEffect(() => {
    ObtenerUsuarios();
  }, []);

  return (
    <div className="container text-center">
      <h1 className="display-3">Listado de Usuarios</h1>
      <div className="row">
        {Users.map((user) => {
          return (
            <div className="col-lg-4">
              <div className="card mt-4 p-3">
                <h4>{user.name}</h4>
                <h6 className="list-group-item">
                  <span>Nombre de Usuario:</span> {user.username}
                </h6>
                <h6 className="list-group-item">
                  <span>Email:</span> {user.email}
                </h6>
                <Link to={"/usuario/" + user.id}>
                  <button className="btn btn-block btn-dark">Ver mas</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Listado;
