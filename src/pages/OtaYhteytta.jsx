import React, { useState } from "react";
import "./OtaYhteytta.css";

const OtaYhteytta = () => {
  const [formData, setFormData] = useState({
    etunimi: "",
    sukunimi: "",
    sahkoposti: "",
    aihe: "",
    viesti: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.etunimi ||
      !formData.sukunimi ||
      !formData.sahkoposti ||
      !formData.aihe ||
      !formData.viesti
    ) {
      setSubmitStatus("Täytä kaikki pakolliset kentät!");
      return;
    }

    try {
      const response = await fetch("/send_contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("Viesti lähetetty onnistuneesti!");
        setFormData({
          etunimi: "",
          sukunimi: "",
          sahkoposti: "",
          aihe: "",
          viesti: "",
        });
      } else {
        setSubmitStatus("Virhe viestin lähetyksessä. Yritä uudelleen.");
      }
    } catch (error) {
      setSubmitStatus("Palvelinvirhe. Yritä myöhemmin.");
    }
  };

  return (
    <div className="yhteytta-container">
      <h1 className="yhteytta-title">Ota yhteyttä</h1>
      <div className="fancy-divider">
        <div className="line"></div>
        <span className="symbol">❦</span>
        <div className="line"></div>
      </div>

      <form className="yhteytta-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="etunimi">Etunimi *</label>
          <input
            type="text"
            id="etunimi"
            name="etunimi"
            value={formData.etunimi}
            onChange={handleChange}
            required
            placeholder="Anna etunimesi"
          />
        </div>

        <div className="form-row">
          <label htmlFor="sukunimi">Sukunimi *</label>
          <input
            type="text"
            id="sukunimi"
            name="sukunimi"
            value={formData.sukunimi}
            onChange={handleChange}
            required
            placeholder="Anna sukunimesi"
          />
        </div>

        <div className="form-row">
          <label htmlFor="sahkoposti">Sähköpostiosoite *</label>
          <input
            type="email"
            id="sahkoposti"
            name="sahkoposti"
            value={formData.sahkoposti}
            onChange={handleChange}
            required
            placeholder="Sähköpostiosoitteesi"
          />
        </div>

        <div className="form-row">
          <label htmlFor="aihe">Aihe *</label>
          <input
            type="text"
            id="aihe"
            name="aihe"
            value={formData.aihe}
            onChange={handleChange}
            required
            placeholder="Viestin aihe"
          />
        </div>

        <div className="form-row">
          <label htmlFor="viesti">Viesti *</label>
          <textarea
            id="viesti"
            name="viesti"
            value={formData.viesti}
            onChange={handleChange}
            required
            placeholder="Kirjoita viestisi tähän"
            rows="6"
          />
        </div>

        <button type="submit" className="submit-btn">
          Lähetä viesti
        </button>

        {submitStatus && <p className="submit-status">{submitStatus}</p>}
      </form>
    </div>
  );
};

export default OtaYhteytta;
