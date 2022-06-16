import React from "react"

const CastList = ({ cast }) => {
    return (
        <div className="row mt-3">
            {cast?.slice(0, 4).map((c, i) => (
                <div className="col-md-3 text-center" key={i}>
                    <img
                        className="img-fluid rounded-circle mx-auto d-block"
                        src={c.img}
                        alt={c.name}
                    />
                    <p className="font-weight-bold text-center">{c.name}</p>
                    <p
                        className="font-weight-light text-center"
                        style={{ color: "#5a606b" }}
                    >
                        {c.character}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default CastList