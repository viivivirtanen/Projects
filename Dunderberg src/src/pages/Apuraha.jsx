import React from "react";
import "./Apuraha.css";

const grants = [
  {
    title: "Tampereen ammattikorkeakoulun opiskelijoille",
    description:
      "Apurahoja myönnetään vuosittain Tampereen ammattikorkeakoulun tekniikan ja liikenteen koulutusalalta pääsevien tai päässeiden opintojen edistämiseksi.Apurahahaku käynnistyy Tampereen ammattikorkeakoulun kautta ja oppilaitoksen koulutusorganisaatio antaa lausunnon hakemuksiin.Säätiö voi myös julistaa ko. apurahoja haettavaksi muulla tavoin.Sama henkilö voi saada apurahan useampanakin vuonna.",
  },
  {
    title: "Tampereen Naisyhdistys r.y.",
    description:
      "Tampereen Naisyhdistys r.y:lle säätiö jakaa vuosittain apurahaa iäkkäiden ihmisten asumispalvelujen tuottamiseen Tampereen kaupungissa.",
  },
  {
    title: "De Gamlas Hem i Tammerfors r.f. – Vanhainkoti Tampereella r.y.",
    description:
      "De Gamlas Hem i Tammerfors rf:lle säätiö jakaa vuosittain apurahaa yhdistyksen omistaman vanhainkodin ylläpitoon.",
  },
  {
    title: "Kyvykkäät suomalaiset tiedemiehet",
    description:
      "Metalliteollisuuden tai konerakentamisen kehitystä edistäville suomalaisille tiedemiehille jaetaan matka-, opiskelu tai muuta apurahaa.Säätiö julistaa apurahat haettavaksi, ei kuitenkaan välttämättä vuosittain.",
  },
  {
    title: "Hämeen Museoseura r.y.",
    description:
      "Hämeen Museoseura r.y:lle säätiö jakaa vuosittain apurahaa käytettäväksi K.F. ja Maria Dunderbergin esineistön ylläpitoon ja muihin yhdistyksen tarpeisiin.",
  },
];

const Apuraha = () => {
  return (
    <div className="apurahat-container">
      <h1 className="apurahat-title">Säätiön apurahat</h1>

      <p className="apurahat-intro">
        Säätiö jakaa vuosittain apurahoja valikoiduille kohteille, jotka tukevat
        koulutusta, tasa-arvoa, kulttuuria ja hyvinvointia yhteiskunnassamme.
      </p>

      <div className="step-list">
        {grants.map((grant, index) => (
          <div key={index} className="step-item">
            <div className="elegant-divider" />
            <div className="step-info">
              <h3>{grant.title}</h3>
              <p>{grant.description}</p>
            </div>
          </div>
        ))}
        <div className="elegant-divider" />
      </div>
    </div>
  );
};

export default Apuraha;
