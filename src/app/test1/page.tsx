// app/page.tsx
import { ProjectCard, ProjectCardProps } from "@/components/ProjectCard";
import { ModeToggle } from "@/components/theme-switch";

// Sample data for your project
const sampleProject: ProjectCardProps = {
    title: "Multi-Tenant Library ERP Platform",
    description: "A modern, responsive e-commerce platform built with the latest web technologies for a seamless shopping experience.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "GraphQL"],
    imageUrl: "/project.jpg", // Make sure this image exists in your `public` folder
    githubUrl: "https://github.com/your-username/your-repo",
    liveUrl: "https://your-live-demo.com",
};

const HomePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8 dark:bg-gray-950">
            <ModeToggle />
            <h1 className="mb-12 text-4xl font-extrabold">My Projects</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* You can map over an array of projects here */}
                <ProjectCard {...sampleProject} />
                {/* Add more <ProjectCard /> components as needed */}
            </div>
        </main>
    );
}

export default HomePage;