import Link from "next/link";

const projects = [
  {
    id: "terraform",
    title: "VMware IaaS with Terraform",
    short: "Automated provisioning for VMware IaaS infrastructure using Terraform.",
  },
  {
    id: "ansible",
    title: "Linux Patch Automation with Ansible",
    short: "Developed Ansible playbooks to patch 200+ servers with zero downtime.",
  },
  {
    id: "openshift",
    title: "OpenShift Monitoring with Prometheus & Grafana",
    short: "Integrated full monitoring and alerting stack for OpenShift clusters.",
  },
  {
    id: "cloud-pipelines",
    title: "Cloud Provisioning Pipelines",
    short: "Designed CI/CD pipelines to deploy infrastructure on AWS and Azure.",
  },
];

export default function Projects() {
  return (
    <div
      style={{
        backgroundColor: "#0d1117",
        color: "#c9d1d9",
        fontFamily: "Inter, sans-serif",
        minHeight: "100vh",
        padding: "60px",
      }}
    >
      <h1 style={{ color: "#58a6ff", textAlign: "center" }}>Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.id}
            style={{
              backgroundColor: "#161b22",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
          >
            <h3 style={{ color: "#58a6ff" }}>{p.title}</h3>
            <p style={{ color: "#8b949e" }}>{p.short}</p>
            <Link href={`/projects/${p.id}`} legacyBehavior>
              <a
                style={{
                  color: "#58a6ff",
                  textDecoration: "underline",
                  display: "inline-block",
                  marginTop: "10px",
                }}
              >
                View Details →
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

