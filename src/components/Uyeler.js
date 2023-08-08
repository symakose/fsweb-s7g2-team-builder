import React from "react";

function Uyeler(props) {
  const { uyeKisi } = props;

  return (
    <div>
      {uyeKisi.map((uye, index) => (
        <div key={index} className="kutu-uye">
          <h2 className="uye-isim">{uye.name}</h2>
          <h2 className="uye-surname">{uye.surname}</h2>
          <div className="uye-ozellikler">
            <div className="uye-label">
              <b>Üye Email: </b>
            </div>
            <div>{uye.email}</div>
          </div>
          <div className="uye-ozellikler">
            <div className="uye-label">
              <b>Üyenin Takımdaki Rolü: </b>
            </div>
            <div>{uye.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Uyeler;
