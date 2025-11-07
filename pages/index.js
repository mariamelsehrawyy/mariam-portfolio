import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#f7f3ef",
        color: "#4a3f35",
        fontFamily: "Inter, sans-serif",
        lineHeight: "1.8",
        minHeight: "100vh",
      }}
    >
      {/* 🔹 Header */}
      <header
        style={{
          padding: "30px 0",
          textAlign: "center",
          boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          backgroundColor: "#fffaf6",
        }}
      >
        <h1 style={{ color: "#c27c48", fontSize: "2.5rem", margin: 0 }}>
          Mariam Elsehrawy
        </h1>
        <p style={{ margin: "5px 0", fontSize: "1.1rem" }}>
          Cloud & Infrastructure Engineer ☁️
        </p>
      </header>

      {/* 🔹 Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <Image
          src="/avatar.jpg"
          alt="Mariam Elsehrawy"
          width={150}
          height={150}
          style={{
            borderRadius: "50%",
            boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
          }}
        />
        <h2 style={{ color: "#a65f33", marginTop: "25px" }}>Hello there 👋</h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "15px auto",
            fontSize: "1.1rem",
          }}
        >
          I help teams automate, scale, and monitor cloud infrastructure using
          technologies like Terraform, Ansible, OpenShift, and Python.
          Passionate about reliability, observability, and systems that just
          work 🍁.
        </p>
      </section>

      {/* 🔹 Projects Section */}
      <section
        id="projects"
        style={{
          padding: "60px 20px",
          backgroundColor: "#fffaf6",
          boxShadow: "inset 0 3px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ color: "#c27c48", textAlign: "center" }}>
          Featured Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            marginTop: "30px",
            maxWidth: "900px",
            marginInline: "auto",
          }}
        >
          {[
            {
              title: "VMware IaaS with Terraform",
              desc: "Automated full VMware infrastructure provisioning with Terraform.",
              link: "https://github.com/mariamelsehrawyy/vmware-terraform",
            },
            {
              title: "Linux Patching Automation",
              desc: "Ansible playbooks to patch hundreds of RHEL servers seamlessly.",
              link: "https://github.com/mariamelsehrawyy/linux-patching",
            },
            {
              title: "OpenShift Monitoring Setup",
              desc: "Configured Prometheus and Grafana dashboards for OpenShift metrics.",
              link: "https://github.com/mariamelsehrawyy/openshift-monitoring",
            },
            {
              title: "Cloud Provisioning Pipelines",
              desc: "CI/CD pipelines automating infrastructure on AWS and Azure.",
              link: "https://github.com/mariamelsehrawyy/cloud-pipelines",
            },
          ].map((p) => (
            <div
              key={p.title}
              style={{
                backgroundColor: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
            >
              <h3 style={{ color: "#c27c48" }}>{p.title}</h3>
              <p style={{ color: "#4a3f35" }}>{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "8px 14px",
                  backgroundColor: "#c27c48",
                  color: "#fffaf6",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#a65f33")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#c27c48")
                }
              >
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#c27c48" }}>Let’s Connect 🍂</h2>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:mariamelsehrawyy@gmail.com"
            style={{ color: "#a65f33" }}
          >
            mariamelsehrawyy@gmail.com
          </a>
        </p>
        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/mariamelsehrawy"
            style={{ color: "#a65f33" }}
          >
            linkedin.com/in/mariamelsehrawy
          </a>
        </p>
        <p>
          🧑‍💻 GitHub:{" "}
          <a
            href="https://github.com/mariamelsehrawyy"
            style={{ color: "#a65f33" }}
          >
            github.com/mariamelsehrawyy
          </a>
        </p>
      </section>

      {/* 🔹 Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "15px",
          fontSize: "0.9rem",
          backgroundColor: "#fffaf6",
          color: "#8b7f76",
        }}
      >
        © {new Date().getFullYear()} Mariam Elsehrawy — All rights reserved.
      </footer>
    </div>
  );
}

