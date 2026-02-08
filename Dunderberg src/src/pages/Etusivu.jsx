import React from "react";
import "./Etusivu.css";

const Etusivu = () => {
  return (
    <div className="etusivu-container">
      <h1 className="etusivu-title">Säätiön tausta</h1>

      <div className="fancy-divider">
        <div className="line"></div>
        <span className="symbol">🌣</span>
        <div className="line"></div>
      </div>

      <div className="content-row">
        <img
          src="/images/Dunderberg.jpg"
          alt="Dunderberg"
          className="dunderberg-img"
        />
        <div className="intro-text">
          <p>
            K.F. ja Maria Dunderbergin testamenttisäätiö on vuonna 1978
            perustettu voittoa tavoittelematon säätiö Tampereella, jonka
            tehtävänä on ylläpitää perustajiensa, Karl Fredrik (K.F.) ja Maria
            Dunderbergin, lähettiläänä heidän arvojaan ja perintöään. Säätiö
            jakaa vuosittain apurahoja erityisesti tekniikan ja liikenteen
            opiskelijoille ja tutkijoille. Muita kohderyhmia ovat muun muassa
            Tampereen Naisyhdistys ry ja Vanhainkoti Tampere ry. Lisäksi saatio
            tukee tieteellista museotoimintaa ja kulttuurihistoriallisia
            hankkeita. Säätiö toimii modernilla ja humanistisella otteella,
            hdistäen käytännöllisen teknisen kehityksen sekä inhimillisen taide-
            ja yhteiskuntavastuun.
          </p>
        </div>
      </div>

      <div className="short-divider" />

      <blockquote className="etusivu-quote">
        K.F. ja Maria Dunderbergin testamenttisäätiö tukee vuosittain TAMKin
        tekniikan ja liikenteen koulutusalaa, Tampereen naisyhdistys ry:tä,
        Vanhainkoti Tampere ry:tä, Tiedemiehiä sekä Hämeen Museoseuraa!
      </blockquote>

      <div className="short-divider" />

      <div className="wide-image-wrapper">
        <img
          src="/images/factory.jpeg"
          alt="Foundation Work"
          className="wide-image"
        />
      </div>

      <div className="follow-up-text">
        <p>
          Nykyisin Dunderbergin säätiö ylläpitäa perustajiensa arvoja modernin
          näkemyksen mukaisesti. Se jatkaa apurahojen ja avustusten myöntämistä
          Tampereen alueella - keskittyen tekniikan ja liikenteen tutkimukseen,
          naistoimintaan, vanhustyöhön sekä museo- ja kulttuurihistorialliseen
          toimintaan. Luonteeltaan saätio hdistäa käytännöllisen
          insinööriosaamisen, humanistisen vakaumuksen ja taiteellisen
          herkyyden.
        </p>
        <p>Säätiön toiminnassa elää myös Maria Dunderbergin esimerkillinen rooli naisjohtajana teollisuudessa – hiljainen mutta merkityksellinen panos suomalaisen tasa-arvon ja varhaisen feministisen ajattelun historiassa.</p>
      </div>

      <div className="final-divider" />
    </div>
  );
};

export default Etusivu;
