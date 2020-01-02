import React, { Component } from 'react'
import { CategoriaConsumer } from '../context/CategoriaContext';
import { EventosConsumer } from '../context/EventosContext';

class Formulario extends Component {

    state = {
        nombre: '',
        categoria: ''
    }

    obtenerDatosEvento = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <EventosConsumer>
                {(value) => {
                    console.log(value);
                    return(
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                value.obtenerEventos(this.state);
                            }}
                        >
                        <fieldset className="uk-fieldset uk-margin">
                            <legend className="uk-legend uk-text-center">
                                Buscá tu evento por Nombre o Categoría
                            </legend>
                        </fieldset>
                        <div className="uk-column-1-3@m uk-margin">
                            <div className="uk-margin" uk-margin="true">
                                <input
                                    name="nombre"
                                    className="uk-input"
                                    type="text"
                                    placeholder="Nombre de Evento o Ciudad"
                                    onChange={this.obtenerDatosEvento}
                                />
                            </div>
                        </div>
                        <div className="uk-column-1-3@m uk-margin">
                            <select
                                className="uk-select"
                                name="categoria"
                                onChange={this.obtenerDatosEvento}
                            >
                                <option value="">Selecciona una Categoría</option>
                                <CategoriaConsumer>
                                    {(value) => {
                                        return(
                                            value.categorias.map(categoria => (
                                                <option key={categoria.id} value={categoria.id} data-uk-form-select>
                                                    {categoria.name_localized}
                                                </option>
                                            ))
                                        )
                                    }}
                                </CategoriaConsumer>
                            </select>
                        </div>
                        <div className="uk-column-1-3@m uk-margin">
                            <input type="submit" className="uk-button uk-button-danger" value="Buscar Eventos"/>
                        </div>
                    </form>
                    )
                }}
  
            </EventosConsumer>
        )
    }
}

export default Formulario;
