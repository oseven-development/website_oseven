const navigation = [
  {
    name: "Services",
    href: "/services",
    submenu: [
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
      {
        name: "Cloud Services",
        links: [
          // { name: "Cloud Beratung", href: "/" },
          // { name: "DevOps", href: "/" },
          { name: "Azure Operations", href: "/services/cloud/azure-ops" },
          // {
          //   name: "Cloud Native Entwicklung",
          //   href: "/",
          // },
          // { name: "Cloud Beratung", href: "/services/cloud/cloud-beratung" },
          // { name: "DevOps", href: "/services/cloud/devops" },
          // { name: "Kubernetes", href: "/services/cloud/kubernetes" },
          // {
          //   name: "Cloud Native Entwicklung",
          //   href: "/services/cloud-native-entwicklung",
          // },
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
