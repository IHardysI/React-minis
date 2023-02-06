import React from "react"

function Info() {
    return(
        <div className="info">
            <div className="info__img-back">
                <div className="info__img"></div>
            </div>
            <div className="info__down-block container">
                <h1 className="info__name">Karotkin Uladzislau</h1>
                <h4 className="info__position">Frontend Developer</h4>
                <h5 className="info__h5">karotkinuladzislau.website</h5>
                <ul className="info__list">
                    <li className="info__item">
                        <a href="mailto:uladzislau.praca@gmail.com">
                        <button className="btn btn__email">Email</button>
                        </a>
                    </li>
                    <li className="info__item">
                        <a href="https://www.linkedin.com/in/uladzislau-karotkin-56019a243">
                            <button className="btn btn__link">Linkedin</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Info

