import { Loader2 } from "lucide-react";

type SpinnerProps = {
    size?: number;
    text?: string;
};

export default function Spinner({ size = 70, text }: SpinnerProps) {
    return (
        <div className="page-container">
            <div className="flex flex-col items-center justify-center gap-3 py-40">
                <Loader2
                    className="animate-spin text-primary"
                    style={{ width: size, height: size }}
                />
                {text && (
                    <p className="text-sm text-muted-foreground">
                        {text}
                    </p>
                )}
            </div>
        </div>
    );
}
