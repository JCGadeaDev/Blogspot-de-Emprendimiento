import React, { useState } from "react";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_PROPOSALS_ID;

const categories = [
  "Finanzas",
  "Productividad",
  "Marketing Digital",
  "Ideas de Negocio",
  "Liderazgo",
  "Otro",
];

const CommunitySection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    category: "",
    description: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" // <-- Corrección 1: Agregado para evitar errores de CORS/Redirección
        },
        body: JSON.stringify({
          _subject: `💡 Nueva propuesta de tema: "${form.topic}"`,
          nombre: form.name,
          email: form.email,
          tema: form.topic,
          categoria: form.category,
          descripcion: form.description,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          topic: "",
          category: "",
          description: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="comunidad"
      style={{
        background: "#0d0d0d",
        padding: "clamp(4rem, 8vh, 7rem) clamp(1.5rem, 6%, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative amber glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(ellipse, rgba(248,152,49,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
          position: "relative",
        }}
        className="community-grid"
      >
        {/* Left: Pitch */}
        <div>
          <div className="eyebrow" style={{ color: "var(--amber)" }}>
            Comunidad
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            ¿Qué quieres
            <br />
            <em style={{ color: "var(--amber)", fontStyle: "italic" }}>
              aprender
            </em>{" "}
            hoy?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "420px",
            }}
          >
            Este blog existe para ti. Si hay un tema que te gustaría ver
            cubierto, un problema que necesitas resolver o una pregunta que
            nadie ha respondido bien, proponlo aquí. Leo cada propuesta
            personalmente.
          </p>

          {/* How it works */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {[
              {
                num: "01",
                title: "Propones el tema",
                desc: "Completa el formulario con tu idea y una descripción breve.",
              },
              {
                num: "02",
                title: "Revisión personal",
                desc: "Carlos lee cada propuesta y evalúa si puede cubrirla con profundidad.",
              },
              {
                num: "03",
                title: "Se publica",
                desc: "Si el tema se convierte en artículo, te notificamos por email.",
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "var(--amber)",
                    lineHeight: 1,
                    minWidth: "2rem",
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#ffffff",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.35)",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            borderRadius: "2px",
          }}
        >
          {status === "success" ? (
            <div style={{ padding: "2rem 0", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  color: "var(--amber)",
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                ✦
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                }}
              >
                ¡Propuesta recibida!
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  maxWidth: "360px",
                  margin: "0 auto",
                }}
              >
                Gracias por tu sugerencia. Si tu tema se convierte en artículo,
                te avisaremos al correo que proporcionaste.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                }}
              >
                Proponer un tema
              </div>

              {/* Name + Email */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
                className="form-two-col"
              >
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="ef-input"
                    style={darkInputStyle}
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="ef-input"
                    style={darkInputStyle}
                    placeholder="tu@correo.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Topic */}
              <div>
                <label htmlFor="topic" style={labelStyle}>
                  Título del tema *
                </label>
                <input
                  type="text"
                  id="topic"
                  className="ef-input"
                  style={darkInputStyle}
                  placeholder="Ej: Cómo validar una idea de negocio en 30 días"
                  value={form.topic}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" style={labelStyle}>
                  Categoría preferida
                </label>
                <select
                  id="category"
                  className="ef-input"
                  style={darkInputStyle}
                  value={form.category}
                  onChange={handleChange}
                >
                  <option
                    value=""
                    style={{ background: "#0d0d0d", color: "#ffffff" }}
                  >
                    Selecciona una categoría...
                  </option>
                  {categories.map((c) => (
                    <option
                      key={c}
                      value={c}
                      style={{ background: "#0d0d0d", color: "#ffffff" }}
                    >
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" style={labelStyle}>
                  ¿Por qué es importante para ti?
                </label>
                {/* <-- Corrección 2: Se eliminó el "style={darkInputStyle}" duplicado */}
                <textarea
                  id="description"
                  rows="4"
                  className="ef-input"
                  placeholder="Cuéntanos tu situación y por qué necesitas información sobre este tema..."
                  value={form.description}
                  onChange={handleChange}
                  style={{ ...darkInputStyle, resize: "vertical" }} 
                />
              </div>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "#e74c3c",
                  }}
                >
                  Error al enviar. Por favor intenta de nuevo.
                </p>
              )}

              <button
                type="submit"
                className="btn-amber"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  opacity: status === "sending" ? 0.65 : 1,
                  marginTop: "0.25rem",
                }}
              >
                {status === "sending" ? "Enviando…" : "Enviar propuesta →"}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
                @media (max-width: 768px) {
                    .community-grid { grid-template-columns: 1fr !important; }
                    .form-two-col { grid-template-columns: 1fr !important; }
                }
            `}</style>
    </section>
  );
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.35)",
  marginBottom: "0.4rem",
};

const darkInputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#ffffff",
};

export default CommunitySection;