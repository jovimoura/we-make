import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return ( 
    <div className="min-h-screen flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <p>
        Algo deu errado :(
      </p>
      <Button variant="secondary" asChild>
        <Link to="/">
          Voltar para o Início
        </Link>
      </Button>
    </div>
  );
};
 
export default ErrorPage;