import React from "react";
import OpcionesBotones from './OpcionesBotones';
import textos from './data.json';

class Texto extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          id: 0,
          historia: "",
          opcionA: "",
          opcionB: ""
        };
      };
    
      componentDidMount () {
        this.setState({
          id: textos[0].id,
          historia: textos[this.state.id].historia,
          opcionA: textos[this.state.id].opciones.a,
          opcionB: textos[this.state.id].opciones.b,
        });
      };
    
      updateOptions = (event) => {
        if (parseInt(this.state.id) < 5) {
          const seleccion = textos.find( texto => texto["id"] === `${parseInt(this.state.id)+1}${event.target.id}`);
          this.setState({
            id: seleccion.id,
            historia: seleccion.historia,
            opcionA: seleccion.opciones.a,
            opcionB: seleccion.opciones.b
          });
        } else {
          alert("Fin de la historia");
        };
      };
    
      render() {
        return (
          <>
            <h1 className="historia">{this.state.historia}</h1>
            <div className="opciones">
              <OpcionesBotones opcionA={this.state.opcionA} opcionB={this.state.opcionB} updating={this.updateOptions}/>
            </div>
          </>
        );
      };
    };
export default Texto;
