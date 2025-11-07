import { useRouter } from "next/router";
import Link from "next/link";

const projectData = {
  terraform: {
    title: "VMware IaaS with Terraform",
    desc: `
    Built a full Terraform-based automation for VMware infrastructure,
    covering VM templates, networking, and storage provisioning.
    Integrated with GitLab CI/CD pipelines for continuous delivery.
    `,
    tech: ["Terraform", "VMware vSphere", "GitLab CI/CD"],
  },
  ansible: {
    title: "Linux Patch Automation with Ansible",
    desc: `
    Developed playbooks for automated patching across 200+ RHEL servers.
    Implemented compliance reporting and Slack notifications after patch runs.
    `,
    tech: ["Ansible", "RHEL", "YAML", "Jinja2"],
  },
  openshift: {
    title: "OpenShift Monitoring Stack",
    desc: `
    Configured Prometheus and Grafana for cluster-wide metrics collection,
    custom dashboards, and alerting via Alertmanager.
    `,
    tech: ["OpenShift", "Prometheus", "Grafana", "Alertmanager"],
  },
  "cloud-pipelines": {
    title: "Cloud Provisioning Pipelines",
    desc: `
    Designed CI/CD pipelines using Jenkins to deploy infrastructure to AWS and Azure.
    Automated VM creation, load balancer setup, and DNS provisioning.
    `,
    tech: ["AWS", "Azure", "Jenkins", "Terraform"],
  },
};

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectData[id];

  if (!project) {
    return (
      <div
        style={{
          backgroundColor: "#0d1117",
          color: "#c9d1d9",
          minHeight: "100vh",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <h1>Project Not Found</h1>
        <Link href="/projects" legacyBehavior>
          <a style={{ color: "#58a6ff" }}>← Back to Projects</a>
        </Link>
      </div>
    );
  }

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
      <Link href="/projects" legacyBehavior>
        <a style={{ color: "#58a6ff" }}>← Back to Projects</a>
      </Link>
      <h1 style={{ color: "#58a6ff", marginTop: "20px" }}>{project.title}</h1>
      <p style={{ marginTop: "20px", lineHeight: "1.8" }}>{project.desc}</p>
      <h3 style={{ marginTop: "30px", color: "#8b949e" }}>Technologies Used:</h3>
      <ul>
        {project.tech.map((t) => (
          <li key={t} style={{ color: "#58a6ff" }}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

