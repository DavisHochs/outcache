import React from "react";
// import { FormBtn } from "../Form";

function ResultCard(props) {
    const { id, name, price, img, hearted, clickRouter } = props;
    console.log(props)

    console.log(hearted)

    let isHearted

    function heart() {
        isHearted = "addHeart"
        if (hearted) {
            for (let item of hearted) {
                if (item === id) {
                    isHearted = "removeHeart"
                }
            }
        }
    }
    heart()

    console.log(isHearted);

    return (
        <div className="col offset-s2 s8 m3 l2 resultCardContainer" style={{
            padding: "0px",
            "margin-bottom": "10px",
        }}>
            < div className="resultCard z-depth-2" onClick={() => clickRouter(props, "openModal")}>
                <div className="cardImageContainer">
                    <img className="cardImage" src={img} alt={name} />
                    {isHearted ? <div className="littleSquareSelected" style={{ "paddingTop": "5px", "padding-bottom": "5px" }}></div> :
                        <div className="littleSquare" onClick={() => clickRouter(props, true)} style={{ "paddingTop": "5px", "padding-bottom": "5px" }}></div>}

                </div>
                <div className="cardInfoContainer">
                    <h6 className="cardName">{name}</h6>
                    <p className="cardLocation" style={{ padding: "0px", margin: "0px" }}>location</p>
                    <div className="row" style={{ marginBottom: "0px", width: "100%" }}>
                        <p className="col s5 cardPrice" style={{ padding: "0px", "padding-left": "15px" }}>${price}</p>
                        <p className="col s3 perDayText" style={{ padding: "0px" }}>{' '}/ day</p>

                    </div>
                </div>
            </div >
        </div >
    );
}

export default ResultCard;