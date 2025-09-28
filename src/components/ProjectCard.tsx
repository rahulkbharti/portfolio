// components/ProjectCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export interface ProjectCardProps {
    title: string;
    description: string;
    techs: string[];
    imageUrl: string;
    githubUrl: string;
    liveUrl: string;
}

export function ProjectCard({
    title,
    description,
    techs,
    imageUrl,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <Card
            className="
        w-full max-w-md overflow-hidden 
        border border-slate-200  
        dark:border-slate-800   
        dark:bg-slate-900       /* Dark mode background */
        transition-transform duration-300 hover:scale-105 hover:shadow-xl
      "
        >
            <div className="relative h-48 w-full">
                <Image
                    src={imageUrl}
                    alt={`${title} project thumbnail`}
                    fill
                    className="object-cover"
                />
            </div>

            <CardHeader>
                <CardTitle
                    className="
            text-xl font-bold 
            text-slate-800       /* Light mode text */
            dark:text-slate-100   /* Dark mode text */
          "
                >
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                        <Badge
                            key={tech}
                            variant="secondary"
                            className="
                bg-slate-100 text-slate-700    /* Light mode badge */
                dark:bg-slate-800 dark:text-slate-200 /* Dark mode badge */
              "
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="flex justify-end gap-3 p-4">
                <Link href={githubUrl} target="_blank" aria-label={`GitHub repository for ${title}`}>
                    <Button variant="outline" size="icon">
                        <SiGithub className="h-4 w-4" />
                    </Button>
                </Link>
                <Link href={liveUrl} target="_blank" aria-label={`Live demo of ${title}`}>
                    <Button>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}