// import { Button } from "@/components/ui/button.tsx";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card.tsx";
// import { Badge } from "@/components/ui/badge.tsx";
// import {
//   Mail,
//   Github,
//   Linkedin,
//   Database,
//   Server,
//   Cloud,
//   Code,
//   Lock,
//   Zap,
// } from "lucide-react";

// export default function Index() {
//   const projects = [
//     {
//       title: "Distributed Payment API",
//       description:
//         "High-throughput payment processing system handling 10K+ transactions per second with Redis caching and PostgreSQL",
//       tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
//       color: "bg-primary",
//     },
//     {
//       title: "Microservices Architecture",
//       description:
//         "Event-driven microservices platform with RabbitMQ message queuing and Kubernetes orchestration",
//       tags: ["Go", "RabbitMQ", "Kubernetes", "gRPC"],
//       color: "bg-secondary",
//     },
//     {
//       title: "Real-Time Analytics Engine",
//       description:
//         "Scalable data pipeline processing millions of events daily with Apache Kafka and ClickHouse",
//       tags: ["Python", "Kafka", "ClickHouse", "AWS"],
//       color: "bg-accent",
//     },
//     {
//       title: "Authentication Service",
//       description:
//         "OAuth 2.0 and JWT-based auth service with multi-factor authentication and session management",
//       tags: ["Node.js", "MongoDB", "JWT", "OAuth"],
//       color: "bg-primary",
//     },
//     {
//       title: "REST API Gateway",
//       description:
//         "High-performance API gateway with rate limiting, load balancing, and request routing",
//       tags: ["Express", "Nginx", "Docker", "Prometheus"],
//       color: "bg-secondary",
//     },
//     {
//       title: "Data Migration Tool",
//       description:
//         "ETL pipeline for seamless data migration between legacy systems and modern cloud infrastructure",
//       tags: ["Python", "Airflow", "PostgreSQL", "S3"],
//       color: "bg-accent",
//     },
//   ];

//   const skills = [
//     {
//       name: "API Development",
//       icon: Code,
//       description: "RESTful & GraphQL APIs with comprehensive documentation",
//     },
//     {
//       name: "Database Design",
//       icon: Database,
//       description: "SQL, NoSQL, caching strategies, and query optimization",
//     },
//     {
//       name: "Cloud Infrastructure",
//       icon: Cloud,
//       description: "AWS, Docker, Kubernetes, and CI/CD pipelines",
//     },
//     {
//       name: "Microservices",
//       icon: Server,
//       description: "Event-driven architecture and distributed systems",
//     },
//     {
//       name: "Security",
//       icon: Lock,
//       description: "Authentication, authorization, and data encryption",
//     },
//     {
//       name: "Performance",
//       icon: Zap,
//       description: "Load balancing, caching, and system optimization",
//     },
//   ];

//   const technologies = {
//     languages: ["Node.js", "Python", "Go", "TypeScript", "Java"],
//     databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "ClickHouse"],
//     tools: ["Docker", "Kubernetes", "Kafka", "RabbitMQ", "Nginx"],
//     cloud: ["AWS", "Google Cloud", "Azure", "Terraform", "Ansible"],
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Navigation */}
//       <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <h1 className="text-2xl font-bold text-foreground">Portfolio</h1>
//             <div className="flex gap-4">
//               <Button variant="ghost" size="sm" asChild>
//                 <a href="#about">About</a>
//               </Button>
//               <Button variant="ghost" size="sm" asChild>
//                 <a href="#projects">Projects</a>
//               </Button>
//               <Button variant="ghost" size="sm" asChild>
//                 <a href="#contact">Contact</a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="py-24 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="max-w-3xl">
//             <Badge className="mb-4 bg-accent text-accent-foreground">
//               Open to opportunities
//             </Badge>
//             <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-foreground">
//               Backend Engineer & Systems Architect
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8 text-balance">
//               Building scalable, high-performance systems and APIs that power
//               modern applications. Specialized in distributed systems,
//               microservices, and cloud infrastructure.
//             </p>
//             <div className="flex gap-4 flex-wrap">
//               <Button
//                 size="lg"
//                 className="bg-primary text-primary-foreground hover:bg-primary/90"
//               >
//                 View Projects
//               </Button>
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
//               >
//                 <Mail className="w-4 h-4 mr-2" />
//                 Contact Me
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="about" className="py-24 px-6 bg-card/30">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold mb-4 text-foreground">Expertise</h2>
//           <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
//             Experienced in building robust backend systems, designing scalable
//             architectures, and optimizing performance for high-traffic
//             applications.
//           </p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {skills.map((skill) => (
//               <Card key={skill.name} className="border-border">
//                 <CardHeader>
//                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                     <skill.icon className="w-6 h-6 text-primary" />
//                   </div>
//                   <CardTitle className="text-lg">{skill.name}</CardTitle>
//                   <CardDescription>{skill.description}</CardDescription>
//                 </CardHeader>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tech Stack Section */}
//       <section className="py-24 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold mb-12 text-foreground">
//             Tech Stack
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-4 text-foreground">
//                 Languages
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {technologies.languages.map((tech) => (
//                   <Badge
//                     key={tech}
//                     className="bg-primary/10 text-primary border-primary/20"
//                   >
//                     {tech}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4 text-foreground">
//                 Databases
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {technologies.databases.map((tech) => (
//                   <Badge
//                     key={tech}
//                     className="bg-secondary/10 text-secondary border-secondary/20"
//                   >
//                     {tech}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4 text-foreground">
//                 Tools
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {technologies.tools.map((tech) => (
//                   <Badge
//                     key={tech}
//                     className="bg-accent/10 text-accent border-accent/20"
//                   >
//                     {tech}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4 text-foreground">
//                 Cloud & DevOps
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {technologies.cloud.map((tech) => (
//                   <Badge
//                     key={tech}
//                     className="bg-primary/10 text-primary border-primary/20"
//                   >
//                     {tech}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-24 px-6 bg-card/30">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold mb-4 text-foreground">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
//             A selection of backend systems and infrastructure projects
//             demonstrating scalability, performance, and architectural expertise.
//           </p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <Card
//                 key={project.title}
//                 className="border-border hover:shadow-lg transition-shadow"
//               >
//                 <CardHeader>
//                   <div
//                     className={`w-full h-32 rounded-lg ${project.color} mb-4 flex items-center justify-center`}
//                   >
//                     <Server className="w-12 h-12 text-white/80" />
//                   </div>
//                   <CardTitle className="text-lg">{project.title}</CardTitle>
//                   <CardDescription className="text-sm">
//                     {project.description}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag) => (
//                       <Badge
//                         key={tag}
//                         variant="secondary"
//                         className="bg-muted text-muted-foreground text-xs"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-6 text-foreground">
//             Let's Build Something Great
//           </h2>
//           <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
//             Looking for opportunities to work on challenging backend systems and
//             contribute to high-impact projects.
//           </p>
//           <div className="flex gap-4 justify-center flex-wrap">
//             <Button
//               size="lg"
//               className="bg-primary text-primary-foreground hover:bg-primary/90"
//             >
//               <Mail className="w-4 h-4 mr-2" />
//               Email Me
//             </Button>
//             <Button
//               size="lg"
//               variant="secondary"
//               className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
//             >
//               <Github className="w-4 h-4 mr-2" />
//               GitHub
//             </Button>
//             <Button
//               size="lg"
//               variant="secondary"
//               className="bg-accent text-accent-foreground hover:bg-accent/90"
//             >
//               <Linkedin className="w-4 h-4 mr-2" />
//               LinkedIn
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-border py-12 px-6">
//         <div className="max-w-6xl mx-auto text-center text-muted-foreground">
//           <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
