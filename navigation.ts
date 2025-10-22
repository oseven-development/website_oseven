const navigation = [
  {
    name: "Services",
    href: "/services",
    submenu: [
      {
        name: "Azure Services",
        links: [
          {
            name: "Azure Betrieb Analyse",
            href: "/services/azure/azure-betrieb-analyse",
          },
          // {
          //   name: "Managed Service IT-Betrieb",
          //   href: "/services/azure/azure-managed-service-it-betrieb",
          // },
          {
            name: "Azure Administrator",
            href: "/services/azure/azure-administrator",
          },
          // {
          //   name: "Azure Managed Backup",
          //   href: "/services/azure/azure-managed-backup",
          // },
        ],
      },
      {
        name: "Audit",
        links: [
          { name: "Cloud Audit", href: "/services/audit/cloud-audit" },
          { name: "Cost-Review", href: "/services/audit/cloud-audit" },
          { name: "CICD-Review", href: "/services/audit/cloud-audit" },
          // { name: "Cost-Review", href: "/services/audit/cost-review" },
          // { name: "CICD-Review", href: "/services/audit/cicd-review" },
        ],
      },
    ],
  },
  {
    name: "Projekte",
    href: "/projekte",
  },
  {
    name: "Ressourcen",
    href: "/ressourcen",
    submenu: [
      {
        name: "Ressourcen",
        links: [
          { name: "Blog", href: "/blog" },
          { name: "Case Studies", href: "/case-studies" },
          { name: "Whitepapers", href: "/whitepapers" },
        ],
      },
    ],
  },
  {
    name: "Jobs",
    href: "/jobs",
  },
  {
    name: "Über Uns",
    href: "/about-us",
  },
];
export default navigation;
