import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./ArticleCard.scss";


export default function ArticleCard(props:any) {
    return(
        <Card className="card-main pt-2 pb-2 col-xl-2 col-lg-3 col-md-4 col-sm-5">
            <div className="tag-row d-flex flex-row justify-content-between">
                {props.categories.map((tagItem:any) => <div key={tagItem} className="tags col badge badge-primary">{tagItem}</div>)}
            </div>
            <Card.Img className="card-img" variant="top" src={props.imageUrl} />
            <div className="card-body d-flex flex-column justify-content-center p-1">
                <div className="card-title text-center title" >{props.title}</div>
                <div className="card-text desc">{props.description}</div>
            </div>
            <div className="card-footer p-1 d-flex flex-column justify-content-center">
                <div className="flex-row d-flex justify-content-end m-1">
                    <p className="author">By {props.author}</p>
                </div>
                <a href={props.link} target={'_blank'} className="align-self-center"><Button  variant="primary">Read more</Button></a>
            </div>
        </Card>
    );
}