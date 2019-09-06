import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="card mt-5 py-5 border-0">
                <div className="card-body">               
                    <form className="row">
                        <div className="col-10">
                            <div className="form-group row">
                                <label className="col-sm-10 col-lg-10 col-form-label">
                                    Reunión ejecutiva en sala de juntas para los demas clientes en el area
                                </label>

                            </div>

                        </div>
                        <div className="col-2">
                            <input type="submit"
                                className="btn btn-primary p-2"                             
                            /> 
                            <input type="submit"
                                className="btn btn-danger p-2"                             
                            /> 
                        </div>

                    </form>
                        
                </div>
                <div className="card-body">               
                    <form className="row">
                        <div className="col-10">
                            <div className="form-group row">
                                <label className="col-sm-10 col-lg-10 col-form-label">
                                    Se debe presentar el documento al cliente para el dia martes
                                </label>

                            </div>

                        </div>
                        <div className="col-2">
                            <input type="submit"
                                className="btn btn-primary p-2"                             
                            /> 
                            <input type="submit"
                                className="btn btn-danger p-2"                             
                            /> 
                        </div>

                    </form>
                        
                </div> 
            </div>
        );
    }
}

export default Task;

