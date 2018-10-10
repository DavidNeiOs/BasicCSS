import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./backdropComponent.css";

class BackdropComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: null
    }
    this.outsideClick = this.outsideClick.bind(this);
  }

  componentDidMount() {
    let bd = document.querySelector('.backdrop');
    let modal = document.querySelector('.modal');
    setTimeout(function(){
      modal.classList.add('open');
      bd.classList.add('open');
    }, 10);
    this.setState({ backdrop: document.querySelector('.backdrop') });
    window.addEventListener('click', this.outsideClick);
  }
  
  outsideClick(e) {
    if(e.target === this.state.backdrop) {
      this.props.showBackdrop();
    }
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.outsideClick);
  }
  
  render() {
    return (
      <div className="backdrop">
        <div className="modal">
          <h1 className="modal__title">Do you want to continue?</h1>
          <div className="modal__actions">
            <Link to="/startHosting" className="modal__action">
              Yes!
            </Link>
            <button 
              className="modal__action modal__action--negative" 
              type="button"
              onClick={this.props.showBackdrop}
            >
              No!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BackdropComponent;
