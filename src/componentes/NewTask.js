import React, { Component } from 'react';

class NewTask extends Component {
    render() {
        return (
            <div className="card mt-5 py-5 bg-light">
                <h2 className="card-title text-center mb-5">
                    Formulario para Tareas
                </h2>
                <div className="card-body">               
                    <form className="row">
                        <div className="col-10">
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-4 col-form-label">
                                    Ingrese la tarea
                                </label>
                                <div className="col-sm-8 col-lg-8">
                                    <textarea 
                                        className="form-control"
                                        placeholder="Ingrese la tarea" 
                                        
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="col-2">
                            <input type="submit"
                                className="py-3 mt-2 btn btn-success"                             
                            /> 
                        </div>
                    </form>
                        
                </div>
            </div>



        );
    }
}

export default NewTask;



