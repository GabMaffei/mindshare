import { Page } from "@/components/Page";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { CreateIdeaDialog } from "./components/CreateIdeaDialog";
import { useState } from "react";

export function IdeasPage() {
    const [openDialog, setOpenDialog] = useState(false)

    return (
        <Page>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <Label className="text-3xl font-medium text-purple-600">
                        Ideias
                    </Label>
                    <Button onClick={() => setOpenDialog(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Nova Ideia
                    </Button>
                </div>
            </div>

            <CreateIdeaDialog
                open={openDialog}
                onOpenChange={setOpenDialog}
            />
        </Page>
    )
}