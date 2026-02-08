import React, { useEffect, useState } from "react";
import "./Historia.css";

const Historia = () => {
  const [showShips, setShowShips] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);

  useEffect(() => {
    setShowShips(true);

    const explosionTimer = setTimeout(() => {
      setShowExplosion(true);
    }, 5000);

    const hideTimer = setTimeout(() => {
      setShowShips(false);
      setShowExplosion(false);
    }, 7000);

    return () => {
      clearTimeout(explosionTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="content taru-page">
      <h2 className="taru-title">HISTORIA</h2>
      <div className="taru-story">
        <section className="taru-boxes">
          <div className="taru-box">
            <img src="/images/KF.jpeg" alt="Image 1" className="box-image" />
            <div className="box-text">
              <h3>K.F. Dunderbergin konepajan alku</h3>
              <p>
                Karl Fredrik “K.F.” Dunderberg oli koulutukseltaan kuparisepän
                kisälli, joka laajensi osaamistaan koneteollisuuteen
                1880–1890‑luvuilla. Vuonna 1892 hän muutti isältään perimänsä
                vaskisepänliikkeen Tampereella K.F. Dunderbergin konepajaksi,
                jolloin yritys siirtyi tuotannollisesti koneiden ja
                metallitöiden pariin. Pajan toiminta oli monipuolista, ja se
                valmisti mm. prässinauloja, peltikattoja, viemäriputkia sekä
                osia laivanrakennukseen. Venäjältä saadut tilaukset 1910-luvulla
                vauhdittivat liiketoiminnan kultakautta.
              </p>
            </div>
          </div>

          <div className="taru-box">
            <img src="/images/Maria.jpeg" alt="Image 2" className="box-image" />
            <div className="box-text">
              <h3>Maria Dunderbergin kausi ja konepajan sopeutuminen</h3>
              <p>
                K.F. Dunderbergin menehdyttyä 1928 Maria Dunderberg,
                koulutukseltaan ei‑tekninen, astui konepajan vetovastuuseen. Hän
                vastasi lähinnä strategisista ja taloudellisista linjauksista,
                ja luotti tekniseen johtaja Altti Braskiin päivittäisissä
                operaatioissa. 1929 Yhdysvaltain pörssiromahdus vaikutti
                voimakkaasti myös Suomeen, mutta Maria ja Brask onnistuivat
                suuntaamaan pajan toimintamallia kohti LVI‑tekniikkaa –
                erityisesti lämpö‑ ja vesijohtojärjestelmiä – ja säilyttivät
                tuotannon kannattavuuden laman ja poliittisten muutosten
                keskellä K.F. Dunderbergin menehdyttyä 1928 Maria Dunderberg,
                koulutukseltaan ei‑tekninen, astui konepajan vetovastuuseen. Hän
                vastasi lähinnä strategisista ja taloudellisista linjauksista,
                ja luotti tekniseen johtaja Altti Braskiin päivittäisissä
                operaatioissa. 1929 Yhdysvaltain pörssiromahdus vaikutti
                voimakkaasti myös Suomeen, mutta Maria ja Brask onnistuivat
                suuntaamaan pajan toimintamallia kohti LVI‑tekniikkaa –
                erityisesti lämpö‑ ja vesijohtojärjestelmiä – ja säilyttivät
                tuotannon kannattavuuden laman ja poliittisten muutosten
                keskellä. K.F. Dunderbergin menehdyttyä 1928 Maria Dunderberg,
                koulutukseltaan ei‑tekninen, astui konepajan vetovastuuseen. Hän
                vastasi lähinnä strategisista ja taloudellisista linjauksista,
                ja luotti tekniseen johtaja Altti Braskiin päivittäisissä
                operaatioissa. 1929 Yhdysvaltain pörssiromahdus vaikutti
                voimakkaasti myös Suomeen, mutta Maria ja Brask onnistuivat
                suuntaamaan pajan toimintamallia kohti LVI‑tekniikkaa –
                erityisesti lämpö‑ ja vesijohtojärjestelmiä – ja säilyttivät
                tuotannon kannattavuuden laman ja poliittisten muutosten
                keskellä Venäjän vallankumous katkoi entiset vientiyhteydet
                itään. Lama ja taloudellinen epävarmuus pakottivat yrityksen
                uudistamaan tarjontaansa. Konepaja sopeutui rakentamisen
                LVI‑tarvikkeisiin, mikä mahdollisti toiminnan jatkumisen sekä
                saneeraus- että uudiskohteissa.
              </p>
            </div>
          </div>

          <div className="taru-box">
            <img
              src="/images/konepaja.jpeg"
              alt="Image 3"
              className="box-image"
            />
            <div className="box-text">
              <h3>Konepajan sulkeutuminen ja säätiön muodostuminen</h3>
              <p>
                Konepaja jatkoi toimintaansa muutamaa sukupolvea, kunnes
                vetäytyi 1970-luvun lopulla. Aluekehityksen myötä yhtiön tilat
                Kalevanrinteessä muuttuivat 1980-luvulla kauppa‑ ja
                palvelukäytöksi – osana Tampereen laajempaa teollisuuden ja
                infrastruktuurin muutosta. Koska K.F. ja Maria Dunderberg eivät
                saaneet omia lapsia, he testamenttasivat koko omaisuutensa,
                mukaan lukien konepajansa, säätiölle. Säätiö jatkoi
                konepajatoimintaa aina vuoteen 1978, jonka jälkeen sen hallinto
                keskittyi varallisuuden hoitoon ja apurahatoimintaan perustajan
                aatteen mukaisesti.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Historia;
