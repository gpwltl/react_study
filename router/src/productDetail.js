import React, { Component } from "react";

export default class ProductDetails extends Component {
    handleSave = () => {
        this.props.history.replace("/products"); // push() 또는 replace() 사용
    };

    render() {
        return (
            <div>
                <h1>Product Details - {this.props.match.params.id} </h1>
                <button onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}