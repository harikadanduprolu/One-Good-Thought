import { Button } from "@/components/ui/button";

interface CategoryButtonProps {
  label: string;
  icon: string;
  isActive?: boolean;
  onClick: () => void;
}

const CategoryButton = ({ label, icon, isActive, onClick }: CategoryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={isActive ? "default" : "secondary"}
      size="lg"
      className={`
        font-body font-medium transition-bounce
        ${isActive 
          ? 'bg-primary text-primary-foreground shadow-soft' 
          : 'bg-white/80 hover:bg-white text-foreground shadow-soft'
        }
      `}
    >
      <span className="mr-2 text-lg">{icon}</span>
      {label}
    </Button>
  );
};

export default CategoryButton;
