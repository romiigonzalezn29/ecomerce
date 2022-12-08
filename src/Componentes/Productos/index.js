import React from "react";
import img from '../assets/images/img01.jpg'
export const Productos = () => {
    return (
        <>
        <h1 className="title"> Productos</h1>
        <div className="productos">
            <a href="#">
            <div className="producto">
            <img src={img} alt =''/>
            </div>
            </a>
            <div className="producto_footer">
                <h1>Title</h1>
                <p>Categoria</p>
                <p className="price">$320</p>
            </div>
            <div className="button">
                <button className="btn"> A;adir al carrito </button>
                <div>
                    <a href="#" className="btn"> Vista </a>
                </div>
            </div>
        </div>
        </>
    )
}