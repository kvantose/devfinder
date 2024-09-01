import "./Button.css";

interface ButtonProps {
    children: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button
            className="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
}