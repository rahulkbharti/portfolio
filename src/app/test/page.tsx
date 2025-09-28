// import { ModeToggle } from "@/components/theme-switch";
"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ClosedCaptionIcon } from "lucide-react";
import { GiClosedBarbute } from "react-icons/gi";
const Page = () => {
    return <Button
        variant="outline"
        onClick={() =>
            toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                    label: <GiClosedBarbute />,
                    onClick: () => console.log("close"),
                },
            })
        }
    >
        Show Toast
    </Button>;
}

export default Page;
