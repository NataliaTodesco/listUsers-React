import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Usuario() {
    const {id} = useParams();
    const [usuario, setUsuario] = useState({});
    const [Ciudad, setCiudad] = useState();
    const [Empresa, setEmpresa] = useState();
    const [Direccion, setDireccion] = useState();

    const res = async() => await axios.get('https://jsonplaceholder.typicode.com/users/'+id).then(res => {
        setUsuario(res.data);
        setCiudad(res.data.address.city)
        setEmpresa(res.data.company.name)
        setDireccion(res.data.address.street+" - "+res.data.address.suite)
    })
        
    useEffect(() => {
        res();
    },{})
    
    return ( 
        <div className="container">
            <div className="card m-5 text-center">
                <div className="card-body">
                    <h2>{usuario.name}</h2>
                    <div className="mx-5 mt-3">
                    <h5 className='list-group-item'><span>Nombre de Usuario:</span> {usuario.username}</h5>
                    <h5 className='list-group-item'><span>Email:</span> {usuario.email}</h5>
                    <h5 className='list-group-item'><span>Dirección:</span> {Direccion}</h5>
                    <h5 className='list-group-item'><span>Ciudad:</span> {Ciudad}</h5>
                    <h5 className='list-group-item'><span>Telefono:</span> {usuario.phone}</h5>
                    <h5 className='list-group-item'><span>Sitio Web:</span> {usuario.website}</h5>
                    <h5 className='list-group-item'><span>Empresa:</span> {Empresa}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Usuario;